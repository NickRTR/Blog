<script>
	export let posts;

	console.log(posts);
</script>

<body>
	<h1>Nick Reutlinger - Blog</h1>

	<article>
		{#each posts as post}
			<div class="post">
				<h1>{post.title}</h1>
				<p>{post.shortDescription}</p>
			</div>
		{/each}
	</article>
</body>

<style>
	body {
		text-align: center;
	}
</style>
