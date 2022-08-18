export async function load({ fetch }) {
	const postsRes = await fetch("/api/posts");
	const postsData = await postsRes.json();

	const categoriesRes = await fetch("/api/categories");
	const categoriesData = await categoriesRes.json();

	return {
		posts: postsData.posts,
		categories: categoriesData.categories
	};
}
