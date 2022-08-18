export async function load({ fetch }) {
	const res = await fetch("/api/posts");
	const data = await res.json();

	return {
		posts: data.posts
	};
}
