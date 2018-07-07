import React from 'react'
import Link from 'gatsby-link'

import styles from './styles.module.css'

const BlogGrid = ({data}) => {
  console.log(data)
  return (
    <div className={styles.container}>
      {data.allMarkdownRemark.edges.map(({ node }) => {
        let slug = '/blog/' + node.frontmatter.slug
        return (
          <div key={node.id} className={styles.blog}>
            <Link to={slug}>
              <img src={node.frontmatter.image}></img>
              <h4>{node.frontmatter.title}</h4>
              <p>{node.frontmatter.date}</p>
              <p>{node.frontmatter.description}</p>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default BlogGrid
