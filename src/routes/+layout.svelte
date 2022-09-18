<script>
	import Nav from "$lib/components/Nav.svelte";
	import Footer from "$lib/components/Footer.svelte";

	import { theme } from "$lib/stores";
	import { onMount } from "svelte";

	onMount(() => {
		window.document.body.classList.toggle($theme);
	});
</script>

<body>
	<Nav />
	<slot />
	<Footer />
</body>

<style>
	body {
		/* remove borders at top and bottom of mobile screens */
		border: 0.1px solid transparent;
		max-width: 700px;
		font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
		padding-inline: 0.5rem;
		background-color: var(--background);
		color: var(--color);
		margin: auto;
	}

	:global(*) {
		scroll-behavior: smooth;
	}

	:global(:root) {
		--gradient: linear-gradient(90deg, rgb(255, 15, 123) 0%, rgb(248, 156, 42) 100%);
		--yellow: #ffc600;

		--background: #04151f;
		--color: #c8c8c8;
		--contrast: white;
		--grey: grey;
	}

	:global(body.light) {
		--color: #04151f;
		--contrast: black;
		--background: white;
		--grey: #3a3a3a;
	}

	:global(*:focus) {
		outline: 2px solid var(--yellow);
		border-radius: 0.1rem;
	}

	:global(*::selection) {
		background: var(--yellow);
		color: var(--contrast);
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
		color: var(--contrast);
		border-radius: 1rem;
		font-size: 1.2rem;
		font-weight: bold;
		margin-block: 1rem;
		cursor: pointer;
	}

	:global(button:hover) {
		text-decoration: underline;
		color: var(--yellow);
	}

	/* scroll bar */
	::-webkit-scrollbar {
		width: 10px;
		border-radius: 0;
	}

	/* Track */
	::-webkit-scrollbar-track {
		border: 5px solid var(--textLight);
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: var(--yellow);
		border-radius: 1rem;
	}
</style>
