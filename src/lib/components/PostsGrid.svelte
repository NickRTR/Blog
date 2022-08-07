<script>
	import PostCard from "$lib/components/PostCard.svelte";

	export let posts;
</script>

<article class="posts">
	{#each posts as post}
		<PostCard {post} />
	{/each}
</article>

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
