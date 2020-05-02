import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import styles from './styles.module.scss'

const success = ({data}) => {
  return (
    <Layout data={data}>
      <div className={styles.contactFormContainer}>
        <h2>Thanks for your message!</h2>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query SuccessQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default success

