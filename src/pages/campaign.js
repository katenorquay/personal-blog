//Core Dependencies
import React from 'react'

import Layout from '../components/Layout'

//Styles
import styles from './styles.module.scss'

const CampaignPage = ({data}) => (
  <Layout data={data}>
    <div className={styles.codeBanner}>
      <div className={styles.textContainer}>
        <h1>Code</h1>
      </div>
    </div>
  </Layout>
)

export default CampaignPage

export const query = graphql`
  query CampaignQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`