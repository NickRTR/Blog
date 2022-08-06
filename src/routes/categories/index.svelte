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
	import Categories from "$lib/components/Categories.svelte";

	export let posts;
	export let categories;
</script>

<body>
	<h1>Categories</h1>

	<Categories {posts} {categories} />
</body>
