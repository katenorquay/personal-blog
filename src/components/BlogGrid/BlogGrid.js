import React from 'react'
import Link from 'gatsby-link'

import styles from './styles.module.css'

const BlogGrid = ({data}) => {
  return (
    <div className={styles.container}>
      {data.allMarkdownRemark.edges.map(({ node }) => {
        let imagePath = '../../assets/' + node.frontmatter.image
        return (
          <div key={node.id} className={styles.blog}>
            <img src={imagePath}></img>
            <h4>{node.frontmatter.title}</h4>
            <p>{node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </div>
        )
      })}
    </div>
  )
}

export default BlogGrid
