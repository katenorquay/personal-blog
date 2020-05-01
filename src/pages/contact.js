import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import styles from './styles.module.scss'

const contact = ({data}) => {
  return (
    <Layout data={data}>
      <div className={styles.contactForm}>
        <form name="contact" method="POST" data-netlify="true">
          <p>
            <label>Your Name: <input type="text" name="name" /></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email" /></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit" className={styles.btnPrimary}>Send</button>
          </p>
        </form>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default contact

