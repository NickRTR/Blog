<footer>
	<hr />
	<nav>
		<a href="/" title="Home" sveltekit:prefetch>Home</a>
		<a href="/categories" title="Categories" sveltekit:prefetch>Categories</a>
		<a href="https://www.nickreutlinger.de" title="Portfolio">Portfolio</a>
		<a href="https://www.nickreutlinger.de/contact" title="Contact">Contact</a>
	</nav>
	<p>©2022 Nick Reutlinger 🚀</p>
</footer>

<style>
	hr {
		margin-top: 2rem;
		height: 1px;
		background-color: var(--grey);
		border: none;
	}

	nav {
		display: flex;
		flex-direction: column;
		line-height: 2rem;
	}

	p {
		margin-top: 1rem;
	}
</style>
