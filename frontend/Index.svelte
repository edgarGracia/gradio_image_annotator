<svelte:options accessors={true} />

<script context="module" lang="ts">
	export { default as BaseExample } from "./Example.svelte";
</script>

<script lang="ts">
	import type { Gradio, SelectData } from "@gradio/utils";
	import { Block, Empty, UploadText } from "@gradio/atoms";
	import { Image } from "@gradio/icons";
	import { StatusTracker } from "@gradio/statustracker";
	import type { LoadingStatus } from "@gradio/statustracker";
	import AnnotatedImageData from "./shared/AnnotatedImageData";
	import ImageAnnotator from "./shared/ImageAnnotator.svelte";

	type sources = "upload" | "webcam" | "clipboard" | null;

	export let elem_id = "";
	export let elem_classes: string[] = [];
	export let visible = true;
	export let value: null | AnnotatedImageData = null;
	export let label: string;
	export let show_label: boolean;
	export let root: string;
	export let height: number | string | undefined;
	export let width: number | string | undefined;
	export let _selectable = false;
	export let container = true;
	export let scale: number | null = null;
	export let min_width: number | undefined = undefined;
	export let loading_status: LoadingStatus;
	export let sources: ("upload" | "webcam" | "clipboard")[] = [
		"upload",
		"webcam",
		"clipboard",
	];
	export let show_download_button: boolean;
	export let show_share_button: boolean;
	export let show_clear_button: boolean;
	export let interactive: boolean;
	export let boxes_alpha: number;
	export let label_list: string[];
	export let label_colors: string[];
	export let box_min_size: number;
	export let handle_size: number;
	export let box_thickness: number;
	export let box_selected_thickness: number;
	export let disable_edit_boxes: boolean;
	export let single_box: boolean;
	export let show_remove_button: boolean;
	export let handles_cursor: boolean;
	export let use_default_label: boolean;

	export let gradio: Gradio<{
		change: never;
		error: string;
		edit: never;
		drag: never;
		upload: never;
		clear: never;
		select: SelectData;
		share: ShareData;
	}>;

	let dragging: boolean;
	let active_source: sources = null;
</script>

<Block
	{visible}
	variant={"solid"}
	border_mode={dragging ? "focus" : "base"}
	padding={false}
	{elem_id}
	{elem_classes}
	{width}
	allow_overflow={false}
	{container}
	{scale}
	{min_width}
>
	<StatusTracker
		autoscroll={gradio.autoscroll}
		i18n={gradio.i18n}
		{...loading_status}
	/>

	<ImageAnnotator
		bind:active_source
		bind:value
		on:change={() => gradio.dispatch("change")}
		selectable={_selectable}
		{root}
		{sources}
		{interactive}
		showDownloadButton={show_download_button}
		showShareButton={show_share_button}
		showClearButton={show_clear_button}
		i18n={gradio.i18n}
		boxesAlpha={boxes_alpha}
		height={height}
		width={width}
		labelList={label_list}
		labelColors={label_colors}
		boxMinSize={box_min_size}
		on:edit={() => gradio.dispatch("edit")}
		on:clear={() => {
			gradio.dispatch("clear");
		}}
		on:drag={({ detail }) => (dragging = detail)}
		on:upload={() => gradio.dispatch("upload")}
		on:select={({ detail }) => gradio.dispatch("select", detail)}
		on:share={({ detail }) => gradio.dispatch("share", detail)}
		on:error={({ detail }) => {
			loading_status = loading_status || {};
			loading_status.status = "error";
			gradio.dispatch("error", detail);
		}}
		{label}
		{show_label}
		max_file_size={gradio.max_file_size}
		cli_upload={gradio.client.upload}
		stream_handler={gradio.client.stream}
		handleSize={handle_size}
		boxThickness={box_thickness}
		boxSelectedThickness={box_selected_thickness}
		disableEditBoxes={disable_edit_boxes}
		singleBox={single_box}
		showRemoveButton={show_remove_button}
		handlesCursor={handles_cursor}
		useDefaultLabel={use_default_label}
	>
		{#if active_source === "upload"}
			<UploadText i18n={gradio.i18n} type="image" />
		{:else if active_source === "clipboard"}
			<UploadText i18n={gradio.i18n} type="clipboard" mode="short" />
		{:else}
			<Empty unpadded_box={true} size="large"><Image /></Empty>
		{/if}
	</ImageAnnotator>
</Block>
