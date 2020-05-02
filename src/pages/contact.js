import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import styles from './styles.module.scss'

const contact = ({data}) => {
  return (
    <Layout data={data}>
      <div className={styles.contactFormContainer}>
        <form name="contact" method="POST" data-netlify="true">
          <div className={styles.formRow}>
            <label htmlFor='name'>Your Name:</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.formRow}>
            <label htmlFor='email'>Your Email:</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.formRow}>
            <label htmlFor='message'>Message:</label>
            <textarea name="message"></textarea>
          </div>
          <button type="submit" className={styles.btnSecondary}>Send</button>
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

