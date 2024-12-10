<script lang="ts" module>
	import type { PageData, ActionData } from './$types';
	import { expand, submit } from '$lib/actions.js';

	const placeholder = ' Ask anything';
</script>

<script lang="ts">
	let { data, form }: { data: PageData; form: ActionData } = $props();
</script>

{#if form?.success}
	<!-- this message is ephemeral; it exists because the page was rendered in
	       response to a form submission. it will vanish if the user reloads -->
	{JSON.stringify(form)}
	<p>Successfully logged in! Welcome back, {JSON.stringify(data)}</p>
{/if}

<section>
	<p>
		Please create an image of a vintage-style motorcycle parked on a snow-covered road, surrounded
		by evergreen trees. The motorcycle features a sleek design with a vibrant blue fuel tank, black
		accents, and rugged tires suitable for various terrains. The setting suggests a cold winter day,
		with soft sunlight filtering through the trees, creating a warm, inviting atmosphere against the
		chilly backdrop.
	</p>
</section>

<form method="POST">
	<label for="" class="flex gap-1">
		<img alt="orb" src="orb.png" />
		<textarea name="textarea" use:expand use:submit {placeholder}></textarea>
	</label>
	<fieldset>
		<button type="button">Text</button>
		<button>Image</button>
	</fieldset>
</form>

<style>
	form {
	}
	label {
		/* display: flex; */
	}
	img {
		mix-blend-mode: lighten;
		width: 40px;
		height: 40px;
		flex: 1;
		aspect-ratio: 1/1;
	}
	textarea {
		background-color: rgba(255, 255, 255, 0.08);
		outline: 1px solid rgba(255, 255, 255, 0.08);
		border: 1px solid rgba(255, 255, 255, 0.2);
		-webkit-background-clip: padding-box; /* for Safari */
		background-clip: padding-box; /* for IE9+, Firefox 4+, Opera, Chrome */
		border-radius: 30px;
		width: 100%;
		min-height: 96px;
		padding: 24px;
		font-size: inherit;
		resize: none;
	}
	textarea::placeholder {
		/* color: rgba(255, 255, 255, 1); */
	}
	button {
		font-size: inherit;
	}
</style>
