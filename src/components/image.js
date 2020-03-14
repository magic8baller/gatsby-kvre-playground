import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-background-image"

const Image = ({children}) => {
  const data = useStaticQuery(graphql`
    query {
      bgImage: file(relativePath: { eq: "unsplash-brooklyn-street.jpg" }) {
        childImageSharp {
          fluid(quality:100, maxWidth:1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

	return <Img style={{height: 'calc(100vh - 66px)',position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}} fluid={data.bgImage.childImageSharp.fluid}>{children}</Img>
}

export default Image

// const StyledTopWrapper = styled.div`
//   position: relative;
//   overflow: hidden;
//   background: rgba(255, 169, 34, 0.85);
//   color: #fff;
//   min-height: calc(100vh - 56px);
//   text-align: center;
//   @media (max-width: 992px) {
//     background: #f9e242;
//   }
// `;