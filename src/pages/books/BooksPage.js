//Core Dependencies
import React from 'react'
import Link from 'gatsby-link'

import BookGrid from '../../components/BookGrid'

//Styles
import styles from './styles.module.scss'

const BooksPage = ({data}) => (
  <div className={styles.page}>
    <h1>Books</h1>
    <BookGrid data={data}/>
  </div>
)

export default BooksPage

export const query = graphql`
  query BookQuery {
    allReviewsJson {
      edges {
        node {
          title
          author
          description
          link
        }
      }
    }
  }
`;
