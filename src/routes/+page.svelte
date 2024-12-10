<script lang="ts" module>
	import type { PageData, ActionData } from './$types';
	import { expand, submit } from '$lib/actions.js';

	const placeholder = ' Ask anything';
</script>

<script lang="ts">
	let { data, form }: { data: PageData; form: ActionData } = $props();
	let type = $state('Image');
	let value = $state('');
</script>

{#if form?.success}
	{JSON.stringify(form)}
	<p>Successfully requested!</p>
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
		<!-- <img id="orb" alt="orb" src="orb.png" /> -->
		<textarea
			name="textarea"
			use:expand
			use:submit
			{placeholder}
			bind:value
			class="p-6 pb-12"
			class:pb-16={value.includes('\n')}
		></textarea>
	</label>
	<fieldset class="z-index-1 flex">
		{#each ['Text', 'Image'] as radio}
			<label class:checked={type === radio} class="flex gap-2">
				<img alt={radio} src="{radio}.svg" class="opacity-50" />
				<input type="radio" name="type" value={radio} bind:group={type} class="hidden" />
				{#if type === radio}
					{radio}
				{/if}
			</label>
		{/each}
	</fieldset>
</form>

<style>
	form {
		position: relative;
		background: url('orb.png') no-repeat left bottom;
		background-size: 60px;
		mix-blend-mode: exclusion;
		padding-left: 45px;
	}
	fieldset {
		position: absolute;
		flex-wrap: wrap;
		bottom: 24px;
		left: 70px;
	}
	label {
		display: flex;
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
	}

	textarea {
		background-color: rgba(250, 237, 237, 0.08);
		outline: 1px solid rgba(255, 255, 255, 0.08);
		border: 1px solid rgba(255, 255, 255, 0.2);
		background-clip: padding-box;
		border-radius: 30px;
		width: 100%;
		min-height: 96px;
		font-size: inherit;
		resize: none;
	}
	textarea::placeholder {
		color: rgba(242, 241, 244, 0.6);
	}
</style>
