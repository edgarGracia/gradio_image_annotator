<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import { Download, Image as ImageIcon } from "@gradio/icons";
	import { DownloadLink } from "@gradio/wasm/svelte";
	import { uploadToHuggingFace } from "@gradio/utils";
	import { BlockLabel, IconButton, ShareButton, SelectSource} from "@gradio/atoms";
	import { Upload } from "@gradio/upload";
	import type { FileData, Client } from "@gradio/client";
	import type { I18nFormatter, SelectData } from "@gradio/utils";
	import { Clear } from "@gradio/icons";
	import ImageCanvas from "./ImageCanvas.svelte";
	import AnnotatedImageData from "./AnnotatedImageData";
	
	type source_type = "upload" | "clipboard" | null;

	export let value: null | AnnotatedImageData;
	export let label: string | undefined = undefined;
	export let show_label: boolean;
	export let sources: source_type[] = ["upload", "clipboard"];
	export let selectable = false;
	export let root: string;
	export let interactive: boolean;
	export let i18n: I18nFormatter;
	export let showShareButton: boolean;
	export let showDownloadButton: boolean;
	export let showClearButton: boolean;
	export let boxesAlpha;
	export let labelList: string[];
	export let labelColors: string[];
	export let boxMinSize: number;
	export let handleSize: number;
	export let boxThickness: number;
	export let disableEditBoxes: boolean;
	export let boxSelectedThickness: number;
	export let max_file_size: number | null = null;
	export let cli_upload: Client["upload"];
	export let stream_handler: Client["stream_factory"];

	let upload: Upload;
	let uploading = false;
	export let active_source: source_type = null;

	function handle_upload({ detail }: CustomEvent<FileData>): void {
		value = new AnnotatedImageData();
		value.image = detail;
		dispatch("upload");
	}

	function handle_clear(): void {
		clear();
		dispatch("clear");
		dispatch("change");
	}

	$: if (uploading) clear();

	const dispatch = createEventDispatcher<{
		change: undefined;
		clear: undefined;
		drag: boolean;
		upload?: never;
		select: SelectData;
	}>();

	let dragging = false;

	$: dispatch("drag", dragging);

	$: if (!active_source && sources) {
		active_source = sources[0];
	}

	async function handle_select_source(
		source: (typeof sources)[number]
	): Promise<void> {
		switch (source) {
			case "clipboard":
				upload.paste_clipboard();
				break;
			default:
				break;
		}
	}

	function clear() {
		value = null;
	}
</script>

<BlockLabel {show_label} Icon={ImageIcon} label={label || "Image Annotator"} />

<div class="icon-buttons">
	{#if showDownloadButton && value !== null}
		<DownloadLink href={value.image.url} download={value.image.orig_name || "image"}>
			<IconButton Icon={Download} label={i18n("common.download")} />
		</DownloadLink>
	{/if}
	{#if showShareButton && value !== null}
		<ShareButton
			{i18n}
			on:share
			on:error
			formatter={async (value) => {
				if (value === null) return "";
				let url = await uploadToHuggingFace(value.image, "base64");
				return `<img src="${url}" />`;
			}}
			{value}
		/>
	{/if}
	{#if showClearButton && value !== null && interactive}
		<div>
			<IconButton
				Icon={Clear}
				label="Remove Image"
				on:click={clear}
			/>
		</div>
	{/if}
</div>

<div data-testid="image" class="image-container">
	<div class="upload-container">
		<Upload
			hidden={value !== null}
			bind:this={upload}
			bind:uploading
			bind:dragging
			filetype={active_source === "clipboard" ? "clipboard" : "image/*"}
			on:load={handle_upload}
			on:error
			{root}
			{max_file_size}
			disable_click={!sources.includes("upload")}
			upload={cli_upload}
			{stream_handler}
		>
			{#if value === null}
				<slot />
			{/if}
		</Upload>
		{#if value !== null}
			<div class:selectable class="image-frame" >
				<ImageCanvas
					bind:value
					on:change={() => dispatch("change")}
					{boxesAlpha}
					{labelList}
					{labelColors}
					{boxMinSize}
					{interactive}
					{handleSize}
					{boxThickness}
					{disableEditBoxes}
					boxSelectedThickness={boxSelectedThickness}
					src={value.image.url}
				/>
			</div>
		{/if}
	</div>
	{#if (sources.length > 1 || sources.includes("clipboard")) && value === null && interactive}
		<SelectSource
			{sources}
			bind:active_source
			{handle_clear}
			handle_select={handle_select_source}
		/>
	{/if}
</div>

<style>
	.image-frame :global(img) {
		width: var(--size-full);
		height: var(--size-full);
		object-fit: cover;
	}

	.image-frame {
		object-fit: cover;
		width: 100%;
	}

	.upload-container {
		height: 100%;
		width: 100%;
		flex-shrink: 1;
		max-height: 100%;
	}

	.image-container {
		display: flex;
		height: 100%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		max-height: 100%;
	}

	.selectable {
		cursor: crosshair;
	}

	.icon-buttons {
		display: flex;
		position: absolute;
		top: 6px;
		right: 6px;
		gap: var(--size-1);
	}
</style>
