<script lang="ts" module>
	import { base } from '$app/paths';
	import { expand, submit } from '$lib/actions.js';
	// import { bot } from '$lib/stores.js';

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
</script>

<script lang="ts">
	let type = $state('Image');
	let value = $state('');
	let loading = $state(false);
	let generating = $state(false);

	let response = $state<Deferred<string>>();

	let placeholder = $state(' Ask anything');

	function onsubmit(e: SubmitEvent) {
		// const data = new FormData(e.target as HTMLFormElement);
		// const request = data.get('request');
		placeholder = 'loading...';
		value = '';

		response = deferred<string>();
		setTimeout(() => {
			response?.resolve('response.png');
			placeholder = ' Ask anything';
		}, 1000);
	}
</script>

<section>
	<p>
		{#if response}
			{#await response.promise}
				<span id="loader">
					<img src="{base}/progress.svg" alt="progress" />
				</span>
			{:then response}
				<img src="{base}/response.png" alt="Response" />
			{/await}
		{/if}
	</p>
	<br />
	<p>
		Please create an image of a vintage-style motorcycle parked on a snow-covered road, surrounded
		by evergreen trees. The motorcycle features a sleek design with a vibrant blue fuel tank, black
		accents, and rugged tires suitable for various terrains. The setting suggests a cold winter day,
		with soft sunlight filtering through the trees, creating a warm, inviting atmosphere against the
		chilly backdrop.
	</p>
	<br />
	<!-- {#if form?.success}
		{JSON.stringify(form)}
		<p>Successfully requested!</p>
	{/if} -->
</section>

<form id="form" {onsubmit} style="--base: {base}">
	<!-- <img src="{base}/orb.png" alt="orb" /> -->
	<label class="flex gap-1">
		<textarea
			disabled={placeholder.includes('loading...')}
			name="request"
			use:expand
			use:submit
			bind:value
			{placeholder}
			class="p-6 pb-12"
			class:pb-16={value.includes('\n')}
		></textarea>
	</label>
	<fieldset class="z-index-1 flex">
		{#each ['Text', 'Image'] as radio}
			<label class:checked={type === radio} class="type flex gap-2">
				<img alt={radio} src="{base}/{radio}.svg" class="opacity-50" />
				<input type="radio" name="type" value={radio} bind:group={type} class="hidden" />
				{#if type === radio}
					{radio}
				{/if}
			</label>
		{/each}
	</fieldset>
</form>

<style>
	#form {
		position: relative;
		background: url('/orb.png') no-repeat left bottom;
		background-size: 75px;
		mix-blend-mode: exclusion;
		padding-left: 75px;
		& > label {
			padding: 0;
		}
	}
	fieldset {
		position: absolute;
		flex-wrap: wrap;
		bottom: 24px;
		left: 85px;
	}
	label {
		display: flex;
		align-items: center;
		border-radius: 60px;
		padding: 0.45em 1em;
		& img {
			cursor: pointer;
		}
		&.checked {
			color: rgba(242, 241, 244);
			background-color: rgba(250, 237, 237, 0.08);
			& img {
				opacity: 1;
				cursor: auto;
			}
		}

		& textarea {
			background-color: rgba(250, 237, 237, 0.08);
			outline: 1px solid rgba(255, 255, 255, 0.08);
			border: 1px solid rgba(255, 255, 255, 0.2);
			background-clip: padding-box;
			border-radius: 30px;
			width: 100%;
			min-height: 96px;
			font-size: inherit;
			resize: none;

			&::placeholder {
				color: rgba(242, 241, 244, 0.6);
			}
		}
	}
	#loader {
		width: 512px;
		height: 512px;
		display: grid;
		place-content: center;
		background-color: rgba(250, 237, 237, 0.08);
		border-radius: 16px;
	}
</style>
