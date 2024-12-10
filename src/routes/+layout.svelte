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
		display: grid;
		grid-template-rows: 1fr auto;
		min-height: 100vh;
		max-width: 70ch;
		margin: auto;
		padding: 1em;
	}
</style>
