//Core Dependencies
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ProjectLink from '../components/ProjectLink'
import Link from 'gatsby-link'
import styles from './styles.module.scss'


const HomePage = ({data}) => {
  return (
    <Layout data={data}>
      <div className={styles.introBanner}>
        Kate Norquay Main description, bakshh dhfjf jdjd
      </div>
      <div className={styles.projectContainer}>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return <ProjectLink title={node.frontmatter.title} link={node.frontmatter.slug} image={node.frontmatter.primaryImage}/>
        })}
      </div>
    </Layout>
  )
}

export default HomePage

export const query = graphql`
  query ProjectQuery {
    site {
      siteMetadata {
        title
      }
    },
    allMarkdownRemark (
      filter: { fileAbsolutePath: {regex : "\/projects/"} }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            slug
            primaryImage {
              childImageSharp {
                resize(width:1000,height:500) {
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