<body>
	<slot />
</body>

<style>
	body {
		max-width: 700px;
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
		--grey: grey;
	}
</style>
