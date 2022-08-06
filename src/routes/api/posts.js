import { postsQuery } from "$lib/queries";
import hygraph from "$lib/hygraph";

export async function GET() {
	const { posts } = await hygraph.request(postsQuery);

	return {
		status: 200,
		body: {
			posts
		}
	};
}
