//Core Dependencies
import React from 'react'

import Layout from '../components/Layout'

//Styles
import styles from './styles.module.scss'

const EightPage = ({data}) => (
  <Layout data={data}>
    <div className={styles.codeBanner}>
      <div className={styles.textContainer}>
        <h1>Code</h1>
      </div>
    </div>
  </Layout>
)

export default EightPage

export const query = graphql`
  query EightQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`