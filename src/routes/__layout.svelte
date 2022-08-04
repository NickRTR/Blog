<body>
	<slot />
</body>

<style>
	body {
		max-width: 700px;
		font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
	}

	:global(body) {
		margin: 0;
		background-color: var(--background);
		color: var(--color);
		margin: auto;
	}

	:global(:root) {
		--accent: #ffc600;
		--background: #04151f;
		--color: #e5dada;
		--contrast: white;
		--grey: lightgrey;
		--gradient: linear-gradient(225deg, #ffe53b 0%, #ff2525 74%);
	}

	:global(*:focus) {
		outline: 2px solid var(--contrast);
		border-radius: 0.1rem;
	}

	:global(*::selection) {
		background-color: greenyellow;
		color: black;
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
</style>
