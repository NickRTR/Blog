<script>
	export let post;
</script>

<section>
	<div class="post">
		<h1>{post.title}</h1>
		{#if post.description}
			<p class="description">{post.description}</p>
		{/if}
	</div>
</section>

<style>
	section {
		background-color: #ffe53b;
		background-image: linear-gradient(225deg, #ffe53b 0%, #ff2525 74%);
		padding: 0.25rem;
		border-radius: 1rem;
	}

	section * {
		margin: 0;
	}

	.post {
		background-color: var(--background);
		border-radius: 1rem;
		padding: 0.25rem;
		height: calc(100% - 2 * 0.25rem);
	}

	h1 {
		padding-block: 0.5rem;
	}

	.description {
		color: var(--grey);
		padding-bottom: 0.25rem;
	}
</style>
