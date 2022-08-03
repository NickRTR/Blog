import { gql } from "graphql-request";

export const postsQuery = gql`
	query posts {
		posts {
			title
			description
			createdAt
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
