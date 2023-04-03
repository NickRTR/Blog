<script>
	export let post;
</script>

<section>
	<a href="/{post.slug}" data-sveltekit-prefetch>
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
		transition: padding 0.2s ease-in-out;
	}

	section:hover {
		padding: 0.5rem;
	}

	section:hover .post {
		padding: 0.5rem;
		height: calc(100% - 2 * 0.5rem);
	}

	section:hover .post h1 {
		text-decoration: underline;
	}

	section * {
		margin: 0;
	}

	a {
		text-decoration: none;
	}

	a:focus h1 {
		text-decoration: underline;
	}

	.post {
		transition: all 0.2s ease-in-out;
		background-color: var(--background);
		border-radius: 0.8rem;
		padding: 0.75rem;
		height: calc(100% - 2 * 0.75rem);
	}

	h1 {
		margin-bottom: 0.5rem;
	}

	.description {
		color: var(--color);
	}
</style>
