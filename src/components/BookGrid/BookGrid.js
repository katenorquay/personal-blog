//Core Dependencies
import React from 'react'
import Link from 'gatsby-link'

//Styles
import styles from './styles.module.scss'

const BookGrid = ({data}) => {
  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        {data.allReviewsJson.edges.map(({ node }) => {
          return (
            <div key={node.id} className={styles.blog}>
              <div className={styles.blogText}>
                <h4>{node.title}</h4>
                <h4>{node.author}</h4>
                <p>{node.description}</p>
                <Link to={node.link}>Read More</Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BookGrid
