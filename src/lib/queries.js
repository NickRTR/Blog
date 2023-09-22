import { gql } from "graphql-request";

export const postsQuery = gql`
	query posts {
		posts(stage: PUBLISHED) {
			title
			description
			createdAt
			categories
			slug
		}
	}
`;

export const searchQuery = gql`
	query search {
		posts(stage: PUBLISHED) {
			title
			slug
		}
	}
`;

export const postQuery = gql`
	query post($slug: String!) {
		post(where: { slug: $slug }) {
			id
			slug
			title
			createdAt
			updatedAt
			body {
				html
			}
			categories
			documentInStages {
				blogComments {
					author
					body
					createdAt
				}
			}
		}
	}
`;

export const commentQuery = gql`
	mutation comment($author: String!, $body: String!, $id: ID!) {
		updatePost(
			data: { blogComments: { create: { body: $body, author: $author } } }
			where: { id: $id }
		) {
			id
		}
	}
`;

export const blogCategoriesQuery = gql`
	query blogCategories {
		__type(name: "Categories") {
			enumValues {
				name
			}
		}
	}
`;
