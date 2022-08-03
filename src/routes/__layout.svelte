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
		--background: black;
		--color: white;
		--grey: lightgrey;
		--gradient: linear-gradient(225deg, #ffe53b 0%, #ff2525 74%);
	}

	:global(*::selection) {
		background-color: greenyellow;
		color: black;
	}

	:global(a) {
		color: unset;
		text-decoration: none;
	}
</style>
