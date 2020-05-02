import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const success = ({data}) => {
  return (
    <Layout data={data}>
      <h1>Thanks!</h1>
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

