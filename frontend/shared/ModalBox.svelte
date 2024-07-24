<script lang="ts">
	import { BaseColorPicker } from "@gradio/colorpicker";
    import { BaseButton } from "@gradio/button";
    import { BaseDropdown } from "./patched_dropdown/Index.svelte";
	import { createEventDispatcher } from "svelte";
    import { onMount, onDestroy } from "svelte";

    export let label = "";
    export let currentLabel = "";
    export let choices = [];  // [(label, i)]
    export let choicesColors = [];
    export let color = "";
    export let currentColor = "";
    export let showRemove = true;
    
    const dispatch = createEventDispatcher<{
		change: object;
	}>();

    function dispatchChange(ret: number) {
        dispatch("change", {
            label: currentLabel,
            color: currentColor,
            ret: ret // -1: remove, 0: cancel, 1: change
        });
    }

    function onDropDownChange(event) {
        const { detail } = event;
		let choice = detail;

        if (Number.isInteger(choice)) {
            if (Array.isArray(choicesColors) && choice < choicesColors.length) {
                currentColor = choicesColors[choice];
            }
            if (Array.isArray(choices) && choice < choices.length) {
                currentLabel = choices[choice][0];
            }
        } else {
            currentLabel = choice;
        }
    }

    function onColorChange(event) {
        const { detail } = event;
		currentColor = detail;
    }

    function onDropDownEnter(event) {
        onDropDownChange(event);
        dispatchChange(1);
    }

    function handleKeyPress(event: KeyboardEvent) {
		switch (event.key) {
			case "Enter":
                dispatchChange(1);
				break;
		}
	}

	onMount(() => {
		document.addEventListener("keydown", handleKeyPress);
        currentLabel = label;
        currentColor = color;
	});
    
	onDestroy(() => {
        document.removeEventListener("keydown", handleKeyPress);
  	});

</script>

<div class="modal" id="model-box-edit">
    <div class="modal-container">
        <span class="model-content">
            <div style="margin-right: 10px;">
                <BaseDropdown
                    value={currentLabel}
                    label="Label"
                    {choices}
                    show_label={false}
                    allow_custom_value={true}
                    on:change={onDropDownChange}
                    on:enter={onDropDownEnter}
                />
            </div>
            <div style="margin-right: 40px; margin-bottom: 8px;">
                <BaseColorPicker
                    value={currentColor}
                    label="Color"
                    show_label={false}
                    on:change={onColorChange}
                />
            </div>
            <div style="margin-right: 8px;">
                <BaseButton
                on:click={() => dispatchChange(0)}
                >Cancel</BaseButton>
            </div>
            {#if showRemove}
                <div style="margin-right: 8px;">
                    <BaseButton
                        variant="stop"
                        on:click={() => dispatchChange(-1)}
                    >Remove</BaseButton>
                </div>
            {/if}
            <div>
                <BaseButton
                    variant="primary"
                    on:click={() => dispatchChange(1)}
                >OK</BaseButton>
            </div>
        </span>
    </div>
</div>

<style>
    .modal {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: var(--layer-top);
        -webkit-backdrop-filter: blur(4px);
        backdrop-filter: blur(4px);
    }

    .modal-container {
        border-style: solid;
        border-width: var(--block-border-width);
        border-color: var(--block-border-color);
        margin-top: 10%;
        padding: 20px;
        box-shadow: var(--block-shadow);
        border-color: var(--block-border-color);
        border-radius: var(--block-radius);
        background: var(--block-background-fill);
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        width: fit-content;
    }

    .model-content {
        display: flex;
        align-items: flex-end;
    }
</style>
