<script lang="ts" module>
	import { base } from '$app/paths';
	import { expand, submit } from '$lib/actions.js';
	import type { EventHandler } from 'svelte/elements';

	function deferred<T>() {
		let resolve!: (value: T | PromiseLike<T>) => void;
		let reject!: (reason?: any) => void;

		const promise = new Promise<T>((res, rej) => {
			resolve = res;
			reject = rej;
		});

		return { promise, resolve, reject };
	}

	type Deferred<D> = ReturnType<typeof deferred<D>>;

	type Props = {
		type: 'Text' | 'Image';
		value: string;
		types: string[];
		onsubmit: EventHandler<SubmitEvent, HTMLFormElement>;
		status: '' | 'loading' | 'generating' | 'typing';
		native: boolean;
	};
</script>

<script lang="ts">
	let {
		type = 'Image',
		value = $bindable(''),
		types = ['Text', 'Image'],
		onsubmit,
		status = '',
		native = false
	}: Partial<Props> = $props();

	let response = $state<Deferred<string>>();
	let placeholder = $state(' Ask anything');

	// function onsubmit(e: SubmitEvent) {
	// 	// const data = new FormData(e.target as HTMLFormElement);
	// 	// const request = data.get('request');
	// 	placeholder = 'loading...';
	// 	value = '';

	// 	response = deferred<string>();
	// 	setTimeout(() => {
	// 		response?.resolve('response.png');
	// 		placeholder = ' Ask anything';
	// 	}, 1000);
	// }
</script>

<form id="form" {onsubmit}>
	<fieldset class="flex flex-wrap p-3">
		<label class="flex-[100%]">
			<!-- svelte-ignore element_invalid_self_closing_tag -->
			<textarea
				class="font-inherit w-full resize-none border-0 bg-transparent outline-none"
				disabled={status.length > 0}
				name="request"
				rows="1"
				use:expand
				use:submit={native}
				bind:value
				{placeholder}
			/>
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
		<button>
			<img src="{base}/{status ? 'rectangle' : 'arrow-up'}.svg" alt="alt" />
		</button>
	</fieldset>
</form>

<style>
	#form {
		position: absolute;
		inset: 1em;
		top: auto;
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
