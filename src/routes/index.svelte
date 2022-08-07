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
	import AllPosts from "../lib/components/AllPosts.svelte";

	export let posts;
</script>

<body>
	<h1>Nick Reutlinger - <span>Blog</span></h1>

	<About />

	<AllPosts {posts} />
</body>

<style>
	span {
		color: var(--yellow);
	}
</style>
