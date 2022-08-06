import { postsQuery } from "$lib/queries";
import { search } from "$lib/stores";
import { get } from "svelte/store";
import hygraph from "$lib/hygraph";

export async function GET() {
	const s = get(search);

	if (s !== "") {
		console.log("search");
	}

	const { posts } = await hygraph.request(postsQuery);

	return {
		status: 200,
		body: {
			posts
		}
	};
}
