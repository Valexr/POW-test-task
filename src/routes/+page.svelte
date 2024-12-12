<script lang="ts" module>
	import { base } from '$app/paths';
	import Requester from '$lib/Requester.svelte';

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
	let response = $state<Deferred<string>>();
	let status = $state('');
	let value = $state('');

	const text = `Please create an image of a vintage-style motorcycle parked on a snow-covered road, surrounded
		by evergreen trees. The motorcycle features a sleek design with a vibrant blue fuel tank, black
		accents, and rugged tires suitable for various terrains. The setting suggests a cold winter day,
		with soft sunlight filtering through the trees, creating a warm, inviting atmosphere against the
		chilly backdrop.`;

	function onsubmit(e: SubmitEvent) {
		console.log(e);

		const data = new FormData(e.target as HTMLFormElement);
		const { type, request } = Object.fromEntries(data);

		response = deferred<string>();
		status = type === 'Text' ? 'typing...' : 'loading...';
		value = '';

		setTimeout(() => {
			response?.resolve(type === 'Text' ? text : 'response.png');
			status = '';
		}, 1000);
	}
</script>

<section id="chat">
	<p>
		{#if response}
			{#await response.promise}
				<span id="loader">
					<img src="{base}/progress.svg" alt="progress" />
				</span>
			{:then response}
				{#if response === text}
					{text}
				{:else}
					<img src="{base}/{response}" alt="Response" />
				{/if}
			{/await}
		{/if}
	</p>
</section>

<section id="requester">
	<Requester {onsubmit} {status} bind:value />
</section>

<style>
	/* #chat {
		overflow-y: scroll;
	} */
	#requester {
		position: absolute;
		inset: 1em;
		top: auto;
	}
	#loader {
		max-width: 512px;
		width: 100%;
		height: auto;
		aspect-ratio: 1/1;
		display: grid;
		place-content: center;
		background-color: var(--bg-secondary);
		border-radius: 16px;
	}
</style>
