<script>
	import Nav from "../lib/components/Nav.svelte";
	import Footer from "../lib/components/Footer.svelte";
</script>

<body>
	<Nav />
	<slot />
	<Footer />
</body>

<style>
	body {
		max-width: 700px;
		font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
		padding-inline: 0.5rem;
	}

	:global(body) {
		/* remove borders at top and bottom of mobile screens */
		border: 0.1px solid transparent;
		background-color: var(--background);
		color: var(--color);
		margin: auto;
	}

	:global(:root) {
		--background: #04151f;
		--color: #c8c8c8;
		--contrast: white;
		--grey: grey;
		--yellow: #ffc600;
		--gradient: linear-gradient(90deg, rgb(255, 15, 123) 0%, rgb(248, 156, 42) 100%);
	}

	:global(*:focus) {
		outline: 2px solid var(--contrast);
		border-radius: 0.1rem;
	}

	:global(*::selection) {
		background: var(--yellow);
		color: var(--background);
	}

	:global(a) {
		color: var(--contrast);
		text-decoration: none;
	}

	:global(a:hover) {
		text-decoration: underline;
		color: var(--yellow);
	}

	:global(h1, h2, h3) {
		color: var(--contrast);
	}

	:global(img, iframe, button) {
		user-select: none;
	}

	:global(textarea, input) {
		background-color: var(--background);
		color: var(--color);
		border: 2px solid var(--color);
		border-radius: 0.5rem;
	}

	:global(textarea:hover, input:hover) {
		border-color: var(--yellow);
	}

	:global(button) {
		background-color: var(--background);
		color: var(--yellow);
		border-radius: 1rem;
		font-size: 1.2rem;
		font-weight: bold;
		margin-block: 1rem;
		cursor: pointer;
	}

	:global(button:hover) {
		text-decoration: underline;
	}
</style>
