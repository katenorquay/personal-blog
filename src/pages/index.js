//Core Dependencies
import React from 'react'
import { graphql } from 'gatsby'

const HomePage = ({data}) => {
  return (
    <h1>Index page</h1>
  )
}

export default HomePage

export const query = graphql`
  query HomeQuery {
    allMarkdownRemark (
      filter: { fileAbsolutePath: {regex : "\/writing/"} },
      sort: { order: DESC, fields: [frontmatter___date]},
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            date(formatString: "DD MMMM, YYYY")
            primaryImage {
              childImageSharp {
                resize(width:600,height:900) {
                  src
                }
              }
            }
            slug
          }
          excerpt
        }
      }
    }
  }
`;
