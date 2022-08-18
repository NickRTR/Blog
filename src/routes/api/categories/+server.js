import { json } from "@sveltejs/kit";
import { blogCategoriesQuery } from "$lib/queries";
import hygraph from "$lib/hygraph";

export async function GET() {
	const { __type: enumValues } = await hygraph.request(blogCategoriesQuery);
	const categories = enumValues.enumValues;

	return json({
		categories
	});
}
