//Core Dependencies
import React from 'react'

import Layout from '../components/Layout'
import CodeGrid from '../components/CodeGrid'

//Styles
import styles from './styles.module.scss'

const CodePage = ({data}) => (
  <Layout data={data}>
    <div className={styles.codeBanner}>
      <div className={styles.textContainer}>
        <h1>Code</h1>
      </div>
    </div>
    <CodeGrid data={data}/>
  </Layout>
)

export default CodePage

export const query = graphql`
  query CodeQuery {
    site {
      siteMetadata {
        title
      }
    },
    allMarkdownRemark (
      filter: { fileAbsolutePath: {regex : "\/code/"} }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            slug
            primaryImage {
              childImageSharp {
                resize(width:600,height:900) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
