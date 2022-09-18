<script>
	import { onMount } from "svelte";

	export let data;
	const post = data.post;

	const created = new Date(post.createdAt);
	const edited = new Date(post.updatedAt);

	let commentAuthor = "";
	let commentBody = "";

	let commentSubmitMessage = "";

	async function postComment() {
		const res = await fetch("/api/postComment", {
			method: "POST",
			body: JSON.stringify({
				commentAuthor,
				commentBody,
				id: post.id
			})
		});

		const data = await res.json();

		if (data.error) {
			alert(data.error);
		} else {
			commentSubmitMessage = data.message;
		}

		commentAuthor = "";
		commentBody = "";
	}

	function addIdsToHeadings() {
		var tags = document.querySelectorAll("h1, h2, h3");
		for (var i = 0, h1; (h1 = tags[i]); i++) {
			h1.id = h1.innerHTML.toLowerCase().replace(" ", "-");
		}
	}

	onMount(() => {
		addIdsToHeadings(post.body.html);
	});

	const createDate = (time) => new Date(time);
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<main class="post">
	{#if post.title}
		<header>
			<h1>{post.title}</h1>
			<div class="categories">
				{#each post.categories as category}
					<p>#{category}</p>
				{/each}
			</div>
			<div class="info">
				<div class="time">
					<p>
						Created on {`${created.getDate()}.${created.getMonth() + 1}.${created.getFullYear()}`}
					</p>
					<p>Edited on {`${edited.getDate()}.${edited.getMonth() + 1}.${edited.getFullYear()}`}</p>
				</div>
				<p>{post.documentInStages[0].blogComments.length} comment(s)</p>
			</div>
			<hr />
		</header>

		<article>{@html post.body.html}</article>

		<footer>
			<hr />
			<h1>Comments</h1>
			{#each post.documentInStages[0].blogComments as comment}
				<div class="comment">
					<p>{comment.body}</p>
					<p class="userData">by {comment.author}</p>
					<p class="userData">
						on {`${createDate(comment.createdAt).getDate()}.${
							createDate(comment.createdAt).getMonth() + 1
						}.${createDate(comment.createdAt).getFullYear()}`}
					</p>
				</div>
			{/each}
			<div class="links">
				<form>
					{#if commentSubmitMessage !== ""}
						<p>{commentSubmitMessage}</p>
					{/if}
					<input type="text" placeholder="Your Name" bind:value={commentAuthor} />
					<textarea placeholder="Your Comment" bind:value={commentBody} maxlength={500} />
				</form>
				<button type="submit" on:click|preventDefault={postComment}>Comment</button>
				<button type="button"
					><a href="/" rel="canonical" data-sveltekit-prefetch title="back to blog posts"
						>Continue reading...</a
					></button
				>
			</div>
		</footer>
	{:else}
		<p>Post not found.</p>
		<p>Error: {post.message}</p>
	{/if}
</main>

<style>
	:global(.post *) {
		scroll-behavior: smooth;
		max-width: 100%;
		object-fit: cover;
	}

	hr {
		height: 5px;
		border: none;
		background: var(--gradient);
		border-radius: 0.1rem;
	}

	header hr {
		margin-bottom: 3rem;
	}

	footer hr {
		margin-top: 3rem;
	}

	header .categories {
		display: flex;
	}

	header .categories p {
		margin-top: -1.25rem;
		margin-right: 0.5rem;
		color: var(--yellow);
	}

	header .info {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}

	header .info p {
		margin: 0;
		color: var(--color);
		filter: brightness(0.6);
	}

	.comment {
		border: 5px solid var(--yellow);
		padding: 0.5rem;
		border-radius: 1rem;
		margin-bottom: 1rem;
	}

	.comment .userData {
		text-align: end;
	}

	.comment p {
		margin: 0;
	}

	form {
		display: flex;
		flex-direction: column;
		margin-top: 1rem;
	}

	textarea,
	input {
		padding: 0.5rem;
		font-size: 1rem;
		transition: 0.1s ease-in-out;
		width: unset !important;
		margin-bottom: 0.5rem;
	}

	textarea {
		height: 100px !important;
		resize: none;
	}

	@media only screen and (max-width: 900px) {
		input,
		textarea {
			width: 300px;
		}

		textarea {
			height: 150px;
		}
	}

	.links button {
		border: none;
	}

	:global(.post article h1:hover, .post article h2:hover, .post article h3:hover) {
		color: var(--yellow);
		text-decoration: underline;
		cursor: default;
	}

	:global(.post a) {
		word-break: break-all;
	}

	:global(.post blockquote) {
		border-left: 3px solid var(--yellow);
		margin-left: 0;
		padding-left: 0.6rem;
	}

	:global(.post ul) {
		padding-left: 1.3rem;
	}

	:global(.post img) {
		width: unset;
		height: unset;
	}

	:global(.post code) {
		background-color: var(--color);
		color: var(--background);
		padding-block: 0.2rem;
	}

	/* @media only screen and (max-width: 450px) {
		.links {
			display: grid;
			gap: 1rem;
		}
	} */
</style>
