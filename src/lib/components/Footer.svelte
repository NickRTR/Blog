<footer>
	<hr />
	<nav>
		<a href="https://www.nickreutlinger.de" title="Portfolio" sveltekit:prefetch>Portfolio</a>
		<a href="https://www.nickreutlinger.de/contact" title="Contact" sveltekit:prefetch>Contact</a>
	</nav>
	<p>Nick Reutlinger</p>
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
