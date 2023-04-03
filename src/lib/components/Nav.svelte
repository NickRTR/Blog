<script>
	import Search from "./Search.svelte";

	import { theme, toggleTheme } from "$lib/stores";
	import { page } from "$app/stores";

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
		{#if $page.data.desktop}
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
		{/if}
		<div class="toggleAppeareance button" title="light/dark mode">
			<input
				type="checkbox"
				name="toggleAppeareance"
				id="toggleAppeareance"
				on:change={toggleTheme}
			/>
			<label for="toggleAppeareance">
				{#if $theme === "light"}
					<p>🌞</p>
				{:else if $theme === "dark"}
					<p>🌙</p>
				{/if}
			</label>
		</div>
		<a href="https://github.com/NickRTR/blog" title="GitHub">
			<img src="/GitHub-{$theme}.png" alt="GitHub" />
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
		text-decoration: none;
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
		padding: 0.25rem;
		width: 126px;
	}

	img {
		width: 2rem;
		height: 2rem;
		margin: 0;
		padding: 0;
	}

	/* Theme button */

	.button input {
		display: none;
	}

	.button p {
		margin: 0 0.4rem;
		border-radius: 100%;
		font-size: 1.6rem;
		user-select: none;
		cursor: pointer;
	}
</style>
