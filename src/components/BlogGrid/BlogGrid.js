//Core Dependencies
import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image"

//Styles
import styles from './styles.module.scss'

const BlogGrid = ({data}) => {
  return (
    <div className={styles.banner}>
      <ul className={styles.list}>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          if (node.excerpt !== "") {
            let slug = '/blog/' + node.frontmatter.slug
            return (
              <li key={node.id} className={styles.listItem}>
                <Link to={slug}>
                  <div className={styles.listContent}>
                    {
                      node.frontmatter.primaryImage ?
                        <img src={node.frontmatter.primaryImage.childImageSharp.resize.src}></img>
                      : null
                    }
                    <p>{node.frontmatter.description}</p>
                  </div>
                </Link>
              </li>
            )
          }
        })}
      </ul>
    </div>
  )
}

export default BlogGrid
