<script>
	import { slide } from "svelte/transition";
	export let search;

	let posts = [];

	$: {
		if (search.length > 0) {
			fetch(`/api/search-${search}`)
				.then((res) => res.json())
				.then((data) => (posts = data.posts));
		} else {
			posts = [];
		}
	}
</script>

<section transition:slide>
	{#each posts as post}
		<a
			href="/{post.slug}"
			on:click={() => {
				search = "";
			}}>{post.title}</a
		>
	{:else}
		<p>No results found.</p>
	{/each}
</section>

<style>
	section {
		border: 4px solid var(--yellow);
		background-color: var(--background);
		border-radius: 0.5rem;
		position: absolute;
		top: 4rem;
		width: 139px;
		padding: 1rem;
	}

	a {
		display: block;
		color: var(--color);
		text-decoration: underline;
		margin-bottom: 0.5rem;
	}

	a:hover {
		color: var(--yellow);
	}

	p {
		margin: 0;
	}
</style>
