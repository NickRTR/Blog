<script>
	import { search } from "$lib/stores";

	let searchInput;

	function focusSearch(event) {
		if (event.key === "/") {
			searchInput.focus();
		}
	}
</script>

<svelte:window on:keydown={focusSearch} />

<nav>
	<section>
		<a href="/" title="Home" sveltekit:prefetch>Home</a>
		<a href="/categories" title="Categories" sveltekit:prefetch>Categories</a>
	</section>
	<aside>
		<div class="search">
			<input
				type="text"
				placeholder="type / to search"
				bind:this={searchInput}
				bind:value={$search}
			/>
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
