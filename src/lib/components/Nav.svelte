<script>
	import Search from "./Search.svelte";

	let searchElement;
	let search = "";

	$: {
		// restrict search to letters and numbers
		search = search.replace(/[^a-z0-9]/gi, "");
	}

	function focusSearch(event) {
		if (event.key === "/") {
			searchElement.focus();
		}

		if (event.key === "Escape") {
			searchElement.blur();
			search = "";
		}
	}
</script>

<svelte:window on:keydown={focusSearch} />

<nav>
	<section>
		<a href="/" title="Home" data-sveltekit-prefetch>Home</a>
		<a href="/categories" title="Categories" data-sveltekit-prefetch>Categories</a>
	</section>
	<aside>
		<div class="search">
			<input
				type="text"
				placeholder="type / to search posts"
				bind:this={searchElement}
				bind:value={search}
			/>
			{#if search !== ""}
				<Search bind:search />
			{/if}
		</div>
		<a href="https://github.com/NickRTR/blog" title="GitHub">
			<img src="/GitHub-light.png" alt="GitHub" />
		</a>
	</aside>
</nav>

<style>
	nav {
		margin-top: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	a {
		font-weight: bold;
		font-size: 1.2rem;
		height: 2rem;
		width: 2rem;
	}

	section a {
		margin-right: 0.5rem;
	}

	aside {
		display: flex;
		align-items: center;
	}

	input {
		margin-right: 0.5rem;
		padding: 0.25rem;
		width: 126px;
	}

	img {
		width: 2rem;
		height: 2rem;
		filter: brightness(0.9);
		transition: filter 0.1s ease-in-out;
		margin: 0;
		padding: 0;
	}

	a:hover img {
		filter: brightness(1);
	}
</style>
