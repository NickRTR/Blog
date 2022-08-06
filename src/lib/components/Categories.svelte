<script>
	import PostCard from "$lib/components/PostCard.svelte";

	export let categories;
	export let posts;
</script>

<article>
	{#each categories as { name: category }}
		<h2># {category}</h2>
		{#each posts as post}
			{#if post.categories.includes(category)}
				<PostCard {post} />
			{/if}
		{/each}
	{/each}
</article>

<style>
	h2:hover {
		color: var(--accent);
	}
</style>
