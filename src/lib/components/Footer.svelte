<footer>
	<hr />
	<nav>
		<a href="/" title="Home" data-sveltekit-prefetch>Home</a>
		<a href="/categories" title="Categories" data-sveltekit-prefetch>Categories</a>
		<a href="https://www.nickreutlinger.de" title="Portfolio">Portfolio</a>
		<a href="https://www.nickreutlinger.de/contact" title="Contact">Contact</a>
	</nav>
	<p>©{new Date().getFullYear()} Nick Reutlinger 🚀</p>
</footer>

<style>
	hr {
		margin-top: 2rem;
		background-color: var(--color);
		height: 1px;
		border: none;
	}

	nav {
		display: flex;
		flex-direction: column;
		line-height: 2rem;
	}

	a {
		text-decoration: none;
	}

	p {
		margin-top: 1rem;
	}
</style>
