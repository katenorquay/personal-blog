//Core Dependencies
import React from 'react'

import Layout from '../components/Layout'

//Styles
import styles from './styles.module.scss'

const BrewBrosPage = ({data}) => (
  <Layout data={data}>
    <div className={styles.codeBanner}>
      <div className={styles.textContainer}>
        <h1>Code</h1>
      </div>
    </div>
  </Layout>
)

export default BrewBrosPage

export const query = graphql`
  query BrewBrosQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`