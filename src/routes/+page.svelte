<script>
	import About from "$lib/components/About.svelte";
	import PostsGrid from "$lib/components/PostsGrid.svelte";

	export let data;
</script>

<svelte:head>
	<title>Nick Reutlinger - Blog</title>
</svelte:head>

<main>
	<h1>Nick Reutlinger - <span>Blog</span></h1>

	<About />

	<PostsGrid posts={data.posts} />
</main>

<style>
	span {
		color: var(--yellow);
	}
</style>
