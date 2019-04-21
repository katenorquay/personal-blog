//Core Dependencies
import React from 'react'

import BlogGrid from '../components/BlogGrid'

import bannerImage from '../assets/writing.png'

//Styles
import styles from './styles.module.scss'

const WritingPage = ({data}) => {
  return (
    <div className={styles.homePage}>
      <img className={styles.bannerImage} src={bannerImage}></img>
      <BlogGrid data={data}/>
    </div>
  )
}

export default WritingPage

export const query = graphql`
  query WritingQuery {
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
