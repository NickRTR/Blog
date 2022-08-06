<script>
	import About from "../lib/components/About.svelte";
	import AllPosts from "../lib/components/AllPosts.svelte";
	import Categories from "../lib/components/Categories.svelte";

	export let posts;
	export let categories;
</script>

<body>
	<h1>Nick Reutlinger - Blog</h1>

	<About />

	<AllPosts {posts} {categories} />

	<!-- <Categories {posts} {categories} /> -->
</body>
