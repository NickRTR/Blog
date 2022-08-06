<script>
	import Categories from "$lib/components/Categories.svelte";

	export let posts;
	export let categories;
</script>

<body>
	<h1>Categories</h1>

	<Categories {posts} {categories} />
</body>
