<script>
	import PostCard from "$lib/components/PostCard.svelte";
	import About from "../lib/components/About.svelte";

	export let posts;
</script>

<body>
	<h1>Nick Reutlinger - Blog</h1>

	<About />

	<article class="posts">
		{#each posts as post}
			<PostCard {post} />
		{/each}
	</article>
</body>

<style>
	.posts {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1rem;
	}

	@media only screen and (max-width: 600px) {
		.posts {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media only screen and (max-width: 400px) {
		.posts {
			grid-template-columns: 1fr;
		}
	}
</style>
