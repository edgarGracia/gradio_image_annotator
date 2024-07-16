<script lang="ts">
    import { onMount, onDestroy, createEventDispatcher } from "svelte";
	import { Clear } from "@gradio/icons";
	import { BoundingBox, Hand } from "./icons/index";
	import ModalBox from "./ModalBox.svelte";
	import Box from "./Box";
	import { Colors } from './Colors.js';
	import AnnotatedImageData from "./AnnotatedImageData";

	enum Mode {creation, drag}

    export let imageUrl: string | null = null;
	export let interactive: boolean;
	export let boxAlpha = 0.5;
	export let boxMinSize = 25;
	export let handleSize: number;
	export let boxThickness: number;
	export let boxSelectedThickness: number;
	export let value: null | AnnotatedImageData;
	export let choices = [];
    export let choicesColors = [];
	export let disableEditBoxes: boolean = false;

    let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
    let image = null;
	let selectedBox = -1;
	let mode: Mode = Mode.drag; 

	let canvasXmin = 0;
	let canvasYmin = 0;
	let canvasXmax = 0;
	let canvasYmax = 0;
	let scaleFactor = 1.0;

	let imageWidth = 0;
	let imageHeight = 0;

	let editModalVisible = false;
	let newModalVisible = false;

	const dispatch = createEventDispatcher<{
		change: undefined;
	}>();

	function colorHexToRGB(hex: string) {
		var r = parseInt(hex.slice(1, 3), 16),
			g = parseInt(hex.slice(3, 5), 16),
			b = parseInt(hex.slice(5, 7), 16);
		return "rgb(" + r + ", " + g + ", " + b + ")";
	}

	function colorRGBAToHex(rgba: string) {
		const rgbaValues = rgba.match(/(\d+(\.\d+)?)/g);
		const r = parseInt(rgbaValues[0]);
		const g = parseInt(rgbaValues[1]);
		const b = parseInt(rgbaValues[2]);
		const hex = "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
		return hex;
	}
	
    function draw() {
		if (ctx) {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			if (image !== null){
				ctx.drawImage(image, canvasXmin, canvasYmin, imageWidth, imageHeight);
			}
			for (const box of value.boxes.slice().reverse()) {
				box.render(ctx);
			}
		}
	}

    function selectBox(index: number) {
		selectedBox = index;
		value.boxes.forEach(box => {box.setSelected(false);});
		if (index >= 0 && index < value.boxes.length){
			value.boxes[index].setSelected(true);
		}
		draw();
	}

    function handleMouseDown(event: MouseEvent) {
		if (!interactive) {
			return;
		}
		
		if (mode === Mode.creation){
			createBox(event);
		} else if (mode === Mode.drag) {
			clickBox(event);
		}
	}

	function clickBox(event: MouseEvent) {
		const rect = canvas.getBoundingClientRect();
		const mouseX = event.clientX - rect.left;
		const mouseY = event.clientY - rect.top;

		// Check if the mouse is over any of the resizing handles
		for (const [i, box] of value.boxes.entries()) {
			const handleIndex = box.indexOfPointInsideHandle(mouseX, mouseY);
			if (handleIndex >= 0) {
				selectBox(i);
				box.startResize(handleIndex, event);
				return;
			}
		}

		// Check if the mouse is inside a box
		for (const [i, box] of value.boxes.entries()) {
			if (box.isPointInsideBox(mouseX, mouseY)) {
				selectBox(i);
				box.startDrag(event);
				return;
			}
		}
		selectBox(-1);
	}

    function handleMouseUp(event: MouseEvent) {
		dispatch("change");
	}

	function handleKeyPress(event: KeyboardEvent) {
		if (!interactive) {
			return;
		}

		switch (event.key) {
			case "Delete":
				onDeleteBox();
				break;
		}
	}

	function createBox(event: MouseEvent) {
		const rect = canvas.getBoundingClientRect();
		const x = (event.clientX - rect.left - canvasXmin) / scaleFactor;
		const y = (event.clientY - rect.top - canvasYmin) / scaleFactor;
		let box = new Box(
			draw,
			onBoxFinishCreation,
			canvasXmin,
			canvasYmin,
			canvasXmax,
			canvasYmax,
			"",
			x,
			y,
			x,
			y,
			Colors[value.boxes.length % Colors.length],
			boxAlpha,
			boxMinSize,
			handleSize,
			boxThickness,
			boxSelectedThickness
		);
		box.startCreating(event, rect.left, rect.top);
		value.boxes = [box, ...value.boxes];
		selectBox(0);
		draw();
		dispatch("change");
	}

    // function onAddBox() {
	// 	if (!disableEditBoxes){
	// 		newModalVisible = true;
	// 	} else {
	// 		createBox();
	// 	}
	// }

	function setCreateMode() {
		mode = Mode.creation;
		canvas.style.cursor = "crosshair";
	}

	function setDragMode() {
		mode = Mode.drag;
		canvas.style.cursor = "default";
	}

	// function createBox(
	// 	label = null,
	// 	color = null,
	// 	xmin = null,
	// 	ymin = null,
	// 	xmax = null,
	// 	ymax = null
	// ){
	// 	if (color === null || color === "") {
	// 		color = Colors[value.boxes.length % Colors.length];
	// 	} else {
	// 		color = colorHexToRGB(color);
	// 	}
	// 	if (label === null){
	// 		label = "";
	// 	}
	// 	if (xmin === null){
	// 		xmin = (imageWidth / 3) / scaleFactor;
	// 	}
	// 	if (xmax === null){
	// 		xmax = ((imageWidth / 3)*2) / scaleFactor;
	// 	}
	// 	if (ymin === null){
	// 		ymin = (imageHeight / 3) / scaleFactor;
	// 	}
	// 	if (ymax === null){
	// 		ymax = ((imageHeight / 3)*2) / scaleFactor;
	// 	}
	// 	let box = new Box(
	// 		draw,
	// 		canvasXmin,
	// 		canvasYmin,
	// 		canvasXmax,
	// 		canvasYmax,
	// 		label,
	// 		Math.round(xmin),
	// 		Math.round(ymin),
	// 		Math.round(xmax),
	// 		Math.round(ymax),
	// 		color,
	// 		boxAlpha,
	// 		boxMinSize,
	// 		handleSize,
	// 		boxThickness,
	// 		boxSelectedThickness
	// 	);
	// 	value.boxes = [box, ...value.boxes];
	// 	draw();
	// 	dispatch("change");
	// }

	// function onModalNewChange(event) {
	// 	newModalVisible = false;
	// 	const { detail } = event;
	// 	let ok = detail.ok;
	// 	if (ok) {
	// 		createBox(detail.label, detail.color)
	// 	}
	// }

	function onBoxFinishCreation() {
		if (!disableEditBoxes){
			editModalVisible = true;
		}
	}

	function onEditBox() {
		if (selectedBox >= 0 && selectedBox < value.boxes.length && !disableEditBoxes) {
			editModalVisible = true;
		}
	}

	function handleDoubleClick(event: MouseEvent){
		if (!interactive) {
			return;
		}
		
		onEditBox();
	}

	function onModalEditChange(event) {
		editModalVisible = false;
		const { detail } = event;
		let label = detail.label;
		let color = detail.color;
		let ok = detail.ok;
		if (ok && selectedBox >= 0 && selectedBox < value.boxes.length) {
			let box = value.boxes[selectedBox];
			box.label = label;
			box.color = colorHexToRGB(color);
			draw();
			dispatch("change");
		}
	}

    function onDeleteBox() {
		if (selectedBox >= 0 && selectedBox < value.boxes.length) {
			value.boxes.splice(selectedBox, 1);
			selectBox(-1);
			dispatch("change");
		}
	}

	function resize() {
		if (canvas) {
			scaleFactor = 1;
			canvas.width = canvas.clientWidth;
			if (image !== null) {
				if (image.width > canvas.width) {
					scaleFactor = canvas.width / image.width;
					imageWidth = image.width * scaleFactor;
					imageHeight = image.height * scaleFactor;
					canvasXmin = 0;
					canvasYmin = 0;
					canvasXmax = imageWidth;
					canvasYmax = imageHeight;
					canvas.height = imageHeight;
				} else {
					imageWidth = image.width;
					imageHeight = image.height;
					var x = (canvas.width - imageWidth) / 2;
					canvasXmin = x;
					canvasYmin = 0;
					canvasXmax = x + imageWidth;
					canvasYmax = image.height;
					canvas.height = imageHeight;
				}
			} else {
				canvasXmin = 0;
				canvasYmin = 0;
				canvasXmax = canvas.width;
				canvasYmax = canvas.height;
				canvas.height = canvas.clientHeight;
			}
			if (canvasXmax > 0 && canvasYmax > 0){
				for (const box of value.boxes) {
					box.canvasXmin = canvasXmin;
					box.canvasYmin = canvasYmin;
					box.canvasXmax = canvasXmax;
					box.canvasYmax = canvasYmax;
					box.setScaleFactor(scaleFactor);
				}
			}
			draw();
			dispatch("change");
		}
	}
	const observer = new ResizeObserver(resize);

	function parseInputBoxes() {
		for (let i = 0; i < value.boxes.length; i++) {
			let box = value.boxes[i];
			if (!(box instanceof Box)) {
				let color = "";
				let label = "";
				if (box.hasOwnProperty("color")) {
					color = box["color"];
					if (Array.isArray(color) && color.length === 3) {
            			color = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
        			}
				} else {
					color = Colors[i % Colors.length];
				}
				if (box.hasOwnProperty("label")) {
					label = box["label"];
				}
				box = new Box(
					draw,
					onBoxFinishCreation,
					canvasXmin,
					canvasYmin,
					canvasXmax,
					canvasYmax,
					label,
					box["xmin"],
					box["ymin"],
					box["xmax"],
					box["ymax"],
					color,
					boxAlpha,
					boxMinSize,
					handleSize,
					boxThickness,
					boxSelectedThickness
				);
				value.boxes[i] = box;
			}
		}
	}

	$: {
		value;
		setImage();
		parseInputBoxes();
		resize();
		draw();
	}

	function setImage(){
		if (imageUrl !== null) {
			if (image === null || image.src != imageUrl) {
				image = new Image();
				image.src = imageUrl;
				image.onload = function(){
					resize();
					draw();
				}
			}
		}
	}

	onMount(() => {
		if (Array.isArray(choices) && choices.length > 0) {
			if (!Array.isArray(choicesColors) || choicesColors.length == 0) {
				for (let i = 0; i < choices.length; i++) {
					let color = Colors[i % Colors.length];
					choicesColors.push(colorRGBAToHex(color));
				}
			}
		}

		ctx = canvas.getContext("2d");
		observer.observe(canvas);

		setImage();
		resize();
		draw();
	});
	
	function handleCanvasFocus() {
		document.addEventListener("keydown", handleKeyPress);
	}
	
	function handleCanvasBlur() {
		document.removeEventListener("keydown", handleKeyPress);
	}

	onDestroy(() => {
		document.removeEventListener("keydown", handleKeyPress);
  	});

</script>

<div
	class="canvas-container"
	tabindex="-1"
	on:focusin={handleCanvasFocus}
	on:focusout={handleCanvasBlur}
>
	<canvas
		bind:this={canvas}
		on:mousedown={handleMouseDown}
		on:mouseup={handleMouseUp}
		on:dblclick={handleDoubleClick}
		class="canvas-annotator"
	></canvas>
</div>

{#if interactive}
	<span class="canvas-control">
		<button
			class="icon"
			on:click={() => setCreateMode()}><BoundingBox/></button
		>
		<button
			class="icon"
			on:click={() => setDragMode()}><Hand/></button
		>
		<button
			class="icon"
			on:click={() => onDeleteBox()}><Clear/></button
		>
	</span>
{/if}

{#if editModalVisible}
	<ModalBox
		on:change={onModalEditChange}
		on:enter{onModalEditChange}
		choices={choices}
		choicesColors={choicesColors}
		label={selectedBox >= 0 && selectedBox < value.boxes.length ? value.boxes[selectedBox].label : ""}
		color={selectedBox >= 0 && selectedBox < value.boxes.length ? colorRGBAToHex(value.boxes[selectedBox].color) : ""}
	/>
{/if}

{#if newModalVisible}
	<ModalBox
		on:change={onModalNewChange}
		on:enter{onModalNewChange}
		choices={choices}
		choicesColors={choicesColors}
		color={Array.isArray(choicesColors) && choicesColors.length > 0 ? choicesColors[0] : colorRGBAToHex(Colors[value.boxes.length % Colors.length])}
	/>
{/if}

<style>
    .canvas-annotator {
        border-color: var(--block-border-color);
		width: 100%;
  		height: 100%;
  		display: block;
    }

	.canvas-control {
		display: flex;
		align-items: center;
		justify-content: center;
		border-top: 1px solid var(--border-color-primary);
		width: 95%;
		bottom: 0;
		left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;
		margin-top: var(--size-2);
	}

	.icon {
		width: 22px;
		height: 22px;
		margin: var(--spacing-lg) var(--spacing-xs);
		padding: var(--spacing-xs);
		color: var(--neutral-400);
		border-radius: var(--radius-md);
	}

	.icon:hover,
	.icon:focus {
		color: var(--color-accent);
	}
	
	.canvas-container:focus {
    	outline: none;
	}
</style>
