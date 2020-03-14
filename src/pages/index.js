import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components";
import SliceZone from '../components/sliceZone'
import Image from '../components/image'
export const query = graphql`
{
  prismic {
    allHomepages {
      edges {
        node {
          body {
            ... on PRISMIC_HomepageBodyHero {
              type
              label
              primary {
                hero_content
                hero_title
              }
						}
						... on PRISMIC_HomepageBodyCall_to_action_grid {
              type
              primary {
                section_title
              }
              fields {
                button_destination {
                  ... on PRISMIC_Page {
                    page_title
                    content
                    _meta {
                      uid
                    }
                  }
                }
                button_label
                call_to_action_title
                content
                featured_image
              }
            }
          }
        }
      }
    }
  }
}
`;
const StyledTopWrapper = styled.div`
  position: relative;
  overflow: hidden;
  background: rgba(255, 169, 34, 0.85);
  color: #fff;
  /* min-height: calc(100vh - 56px); */
  text-align: center;
  @media (max-width: 992px) {
    background: #f9e242;
  }
`;
const IndexPage = (props) => {
console.log(props)
	return (
  <Layout>
 <SliceZone body={props.data.prismic.allHomepages.edges[0].node.body}/>
  </Layout>
)}

export default IndexPage
