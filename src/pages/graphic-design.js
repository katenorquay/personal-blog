//Core Dependencies
import React from 'react'

import Layout from '../components/Layout'

//Styles
import styles from './styles.module.scss'

const GraphicDesignPage = ({data}) => {
  return (
    <Layout data={data}>
      <div className={styles.designBanner}>
        <div className={styles.textContainer}>
          <h1>Design</h1>
        </div>
      </div>
    </Layout>
  )
}

export default GraphicDesignPage

export const query = graphql`
  query DesignQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
