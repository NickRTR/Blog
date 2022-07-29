<body>
	<slot />
</body>

<style>
	:global(body) {
		margin: 0;
		background-color: var(--background);
		color: var(--color);
	}

	:global(:root) {
		--accent: #ffc600;
		--background: black;
		--color: silver;
	}
</style>
