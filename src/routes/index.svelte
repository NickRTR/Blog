<script context="module">
	export async function load({ fetch }) {
		const res = await fetch("/api/posts");
		const data = await res.json();

		return {
			props: {
				posts: data.posts
			}
		};
	}
</script>

<script>
	import About from "../lib/components/About.svelte";
	import PostsGrid from "../lib/components/PostsGrid.svelte";

	export let posts;
</script>

<svelte:head>
	<title>Nick Reutlinger - Blog</title>
</svelte:head>

<main>
	<h1>Nick Reutlinger - <span>Blog</span></h1>

	<About />

	<PostsGrid {posts} />
</main>

<style>
	span {
		color: var(--yellow);
	}
</style>
