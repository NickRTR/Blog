<nav>
	<section>
		<a href="/" title="Home" sveltekit:prefetch>Home</a>
		<a href="/categories" title="Categories" sveltekit:prefetch>Categories</a>
	</section>
	<a href="https://github.com/NickRTR/blog" title="GitHub">
		<img src="/GitHub-light.png" alt="GitHub" />
	</a>
</nav>

<style>
	nav {
		margin-top: 1rem;
		display: flex;
		justify-content: space-between;
	}

	a {
		font-weight: bold;
		font-size: 1.2rem;
	}

	section a {
		margin-right: 0.5rem;
	}

	img {
		width: 2rem;
		height: 2rem;
		filter: brightness(0.9);
		transition: filter 0.1s ease-in-out;
	}

	a:hover img {
		filter: brightness(1);
	}
</style>
