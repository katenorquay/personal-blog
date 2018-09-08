//Core Dependencies
import React from 'react'
import Link from 'gatsby-link'

//Styles
import styles from './styles.module.scss'

const BlogGrid = ({data}) => {
  return (
    <div className={styles.banner}>
      <ul className={styles.container}>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          if (node.excerpt !== "") {
            let slug = '/blog/' + node.frontmatter.slug
            return (
              <li key={node.id} className={styles.blog}>
                <div className={styles.blogContent}>
                  <img src={node.frontmatter.image} className={styles.blogImage}></img>
                  <div className={styles.blogText}>
                    <h4>{node.frontmatter.title}</h4>
                    <p>{node.frontmatter.description}</p>
                    <Link to={slug}>Read More</Link>
                  </div>
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
