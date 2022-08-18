import { json } from "@sveltejs/kit";
import { searchQuery } from "$lib/queries";
import hygraph from "$lib/hygraph";

export async function GET({ params }) {
	let { search } = params;

	const { posts } = await hygraph.request(searchQuery);

	let searchedPosts = [];

	posts.forEach((post) => {
		const title = post.title.toLowerCase();
		search = search.toLowerCase();
		if (title.startsWith(search) || title.includes(search)) {
			searchedPosts.push(post);
		}
	});

	return json({
		posts: searchedPosts
	});
}
