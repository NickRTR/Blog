<script>
	import PostsGrid from "$lib/components/PostsGrid.svelte";

	export let data;
</script>

<body>
	<h1>Blog - <span>Categories</span></h1>

	<p>All blog posts sorted by category.</p>

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
	body {
		margin: 0;
	}

	h2:hover {
		color: var(--yellow);
	}

	span {
		color: var(--yellow);
	}
</style>
