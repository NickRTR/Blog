import hygraph from "$lib/hygraph";
import { postQuery } from "$lib/queries";

export async function load({ params }) {
	const { post } = await hygraph.request(postQuery, { slug: params.slug });

	return {
		post
	};
}
