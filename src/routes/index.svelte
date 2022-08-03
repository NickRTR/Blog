<script>
	import PostCard from "$lib/components/PostCard.svelte";

	export let posts;
</script>

<body>
	<h1>Nick Reutlinger - Blog</h1>

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
</style>
