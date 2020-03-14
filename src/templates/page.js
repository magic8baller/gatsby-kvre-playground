import {graphql} from 'gatsby';
import {RichText} from 'prismic-reactjs';
import React from 'react';
import Layout from "../components/layout"
export const query = graphql`
query PageQuery($id: String)	{
		prismic {
			allPages(id: $id) {
				edges {
					node {
						page_title
						content
						_meta {
							uid
							id
						}
					}
				}
			}
		}
	}
`;

const Page = (props) => {
	const {page_title: pageTitle, content} = props.data.prismic.allPages.edges[0].node;
	return (
		<Layout>
			<RichText render={pageTitle} />
			<RichText render={content} />
		</Layout>
	)
};

export default Page;