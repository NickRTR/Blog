<script context="module">
	export async function load({ fetch }) {
		const postsRes = await fetch("/api/posts");
		const postsData = await postsRes.json();

		const categoriesRes = await fetch("/api/categories");
		const categoriesData = await categoriesRes.json();

		return {
			props: {
				posts: postsData.posts,
				categories: categoriesData.categories
			}
		};
	}
</script>

<script>
	import PostsGrid from "$lib/components/PostsGrid.svelte";

	export let posts;
	export let categories;
</script>

<body>
	<h1>Categories</h1>

	{#each categories as { name: category }}
		<h2># {category}</h2>
		<PostsGrid
			posts={posts.filter((post) => {
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
