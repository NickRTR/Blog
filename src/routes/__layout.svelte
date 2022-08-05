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
		background-color: var(--background);
		color: var(--color);
		margin: auto;
	}

	:global(:root) {
		--accent: #ffc600;
		--background: #04151f;
		--color: #e5dada;
		--contrast: white;
		--grey: grey;
		/* --gradient: linear-gradient(225deg, #ffe53b 0%, #ff2525 74%); */
		--gradient: linear-gradient(90deg, rgb(255, 15, 123) 0%, rgb(248, 156, 42) 100%);
	}

	:global(*:focus) {
		outline: 2px solid var(--contrast);
		border-radius: 0.1rem;
	}

	:global(*::selection) {
		background: var(--accent);
		color: var(--background);
	}

	:global(a) {
		color: var(--accent);
		text-decoration: none;
	}

	:global(a:hover) {
		text-decoration: underline;
	}

	:global(h1) {
		color: var(--contrast);
	}

	:global(img, iframe, button) {
		user-select: none;
	}

	:global(textarea, input) {
		background-color: var(--background);
		border: 2px solid var(--color);
		border-radius: 0.5rem;
	}

	:global(textarea:hover, input:hover) {
		border-color: var(--accent);
	}

	:global(button) {
		background-color: var(--background);
		color: var(--accent);
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
