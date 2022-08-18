<script>
	import PostsGrid from "$lib/components/PostsGrid.svelte";

	export let data;
</script>

<body>
	<h1>Categories</h1>

	{#each data.categories as { name: category }}
		<h2># {category}</h2>
		<PostsGrid
			posts={data.posts.filter((post) => {
				return post.categories.includes(category);
			})}
		/>
	{/each}
</body>

<style>
	h2:hover {
		color: var(--yellow);
	}
</style>
