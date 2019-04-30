//Core Dependencies
import React from 'react'
import Link from 'gatsby-link'

//Styles
import styles from './styles.module.scss'

const ReviewGrid = ({data}) => {
  return (
    <div className={styles.banner}>
      <ul className={styles.list}>
        {data.map(({ node }) => {
          if (node.excerpt !== "") {
            let slug = '/writing/' + node.frontmatter.slug
            return (
              <li key={node.id} className={styles.listItem}>
                <Link to={slug}>
                  <div className={styles.listContent}>
                    <h2>{node.frontmatter.title}</h2>
                    <p className={styles.tagLine}>Published by Art Murmurs</p>
                    <p>{node.frontmatter.date}</p>
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

export default ReviewGrid
