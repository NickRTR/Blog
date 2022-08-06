import { blogCategoriesQuery } from "$lib/queries";
import hygraph from "$lib/hygraph";

export async function GET() {
	const { __type: enumValues } = await hygraph.request(blogCategoriesQuery);
	const categories = enumValues.enumValues;

	return {
		status: 200,
		body: {
			categories
		}
	};
}
