import hygraph from "$lib/hygraph";
import { postsQuery, blogCategoriesQuery } from "$lib/queries";

export async function GET() {
	const { posts } = await hygraph.request(postsQuery);
	// categories
	const { __type: enumValues } = await hygraph.request(blogCategoriesQuery);
	const categories = enumValues.enumValues;

	return {
		body: {
			posts,
			categories
		}
	};
}
