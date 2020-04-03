//Core Dependencies
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ProjectLink from '../components/ProjectLink'
import Link from 'gatsby-link'
import styles from './styles.module.scss'

import intro from '../assets/intro.png'

const HomePage = ({data}) => {
  return (
    <Layout data={data}>
      <div className={styles.introBanner}>
        Kate Norquay
      </div>
      <div className={styles.sectionTitle}>Projects</div>
      <div className={styles.projectContainer}>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return <ProjectLink title={node.frontmatter.title} link={node.frontmatter.slug}/>
        })}
      </div>
      <div className={styles.sectionTitle}>Get in touch</div>
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