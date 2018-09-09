//Core Dependencies
import React from 'react'
import Link from 'gatsby-link'

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
                <div className={styles.listContent}>
                  <h2>{node.frontmatter.title}</h2>
                  <p>{node.frontmatter.description}</p>
                  <Link to={slug}>Read More</Link>
                </div>
              </li>
            )
          }
        })}
      </ul>
    </div>
  )
}

export default BlogGrid
