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
	let value = $state('');
	let response = $state<Deferred<string>>();

	let status = $state('');

	function onsubmit(e: SubmitEvent) {
		response = deferred<string>();
		status = 'loading...';
		value = '';

		setTimeout(() => {
			response?.resolve('response.png');
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
</section>

<section id="requester">
	<Requester {onsubmit} native={false} bind:value bind:status />
</section>

<style>
	#chat {
		overflow-y: scroll;
	}
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
