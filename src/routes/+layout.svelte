<script lang="ts" module>
	import '../app.css';
</script>

<script lang="ts">
	let { children } = $props();
</script>

<main>
	{@render children()}
</main>

<style>
	main {
		position: relative;
		display: grid;
		grid-template-rows: 1fr auto;
		min-height: 100dvh;
		max-width: 70ch;
		margin: auto;
		padding: 1em;
	}
</style>
