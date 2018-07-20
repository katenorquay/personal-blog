import React from 'react'
import Link from 'gatsby-link'

import styles from './styles.module.css'

const BlogGrid = ({data}) => {
  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          let slug = '/blog/' + node.frontmatter.slug
          return (
            <div key={node.id} className={styles.blog}>
              <img src={node.frontmatter.image} className={styles.blogImage}></img>
              <div className={styles.blogText}>
                <h4>{node.frontmatter.title}</h4>
                <p>{node.frontmatter.description}</p>
                <Link key={node.id} to={slug}>Read More</Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BlogGrid
