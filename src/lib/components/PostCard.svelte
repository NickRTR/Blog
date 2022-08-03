<script>
	export let post;
</script>

<section>
	<a href="/{post.slug}">
		<div class="post">
			<h1>{post.title}</h1>
			{#if post.description}
				<p class="description">{post.description}</p>
			{/if}
		</div>
	</a>
</section>

<style>
	section {
		background-image: var(--gradient);
		padding: 0.25rem;
		border-radius: 1rem;
	}

	section * {
		margin: 0;
	}

	.post {
		background-color: var(--background);
		border-radius: 1rem;
		padding: 0.5rem 0.5rem;
		height: calc(100% - 2 * 0.5rem);
	}

	h1 {
		margin-bottom: 0.5rem;
	}

	.description {
		color: var(--grey);
	}
</style>
