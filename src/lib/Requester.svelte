<script lang="ts" module>
	import { base } from '$app/paths';
	import { expand, submit } from '$lib/actions.js';
	import type { EventHandler } from 'svelte/elements';

	type Props = {
		value: string;
		status: string;
		onsubmit: EventHandler<SubmitEvent, HTMLFormElement>;
	};
</script>

<script lang="ts">
	let { value = $bindable(''), status = $bindable(''), onsubmit }: Partial<Props> = $props();

	let type = $state('Image');

	const types = ['Text', 'Image'];
</script>

<form id="form" {onsubmit}>
	<fieldset class="flex flex-wrap p-3">
		<label class="flex-[100%]">
			<textarea
				class="font-inherit w-full resize-none border-0 bg-transparent outline-none"
				disabled={status.length > 0}
				placeholder={status || ' Ask anything'}
				name="request"
				rows="1"
				use:expand={value}
				use:submit
				bind:value
			></textarea>
		</label>
		{#each types as radio}
			<label class:checked={type === radio} class="type flex gap-2">
				<img alt={radio} src="{base}/{radio}.svg" class="opacity-50" />
				<input type="radio" name="type" value={radio} bind:group={type} class="hidden" />
				{#if type === radio}
					{radio}
				{/if}
			</label>
		{/each}
		<button type="submit">
			<img src="{base}/{status ? 'rectangle' : 'arrow-up'}.svg" alt="alt" />
		</button>
	</fieldset>
</form>

<style>
	#form {
		position: relative;
		background: url('/orb.png') no-repeat left bottom;
		background-size: 60px;
		mix-blend-mode: lighten;
		padding-left: 60px;

		& > fieldset {
			border: 1px solid var(--bg-secondary);
			background-color: var(--bg-secondary);
			border-radius: 30px;
		}

		& textarea {
			font-size: inherit;
			&::placeholder {
				color: var(--text-secondary);
			}
		}

		& button {
			width: 35px;
			aspect-ratio: 1/1;
			text-align: center;
			border-radius: 17.5px;
			background-color: var(--text-primary);
			bottom: 0.8em;
			right: 0.8em;
			position: absolute;

			& > img {
				margin: auto;
			}
		}
	}

	label:has(img) {
		display: flex;
		align-items: center;
		border-radius: 60px;
		padding: 0.45em 1em;
		& img {
			cursor: pointer;
		}
		&.checked {
			color: var(--text-primary);
			background-color: var(--bg-secondary);
			& img {
				opacity: 1;
				cursor: auto;
			}
		}
	}
</style>
