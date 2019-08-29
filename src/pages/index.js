//Core Dependencies
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Link from 'gatsby-link'
import styles from './styles.module.scss'

const HomePage = ({data}) => {
  return (
    <Layout data={data}>
      <div className={styles.fullBleedBanner}></div>
      <div className={styles.projectContainer}>
        <Link to={'/eight'} className={styles.projectBlock}>
          Eight
        </Link>
        <Link to={'/racket'} className={styles.projectBlock}>
          Racket
        </Link>
        <Link to={'/brewbros'} className={styles.projectBlock}>
          Brew Bros
        </Link>
        <Link to={'/tlab'} className={styles.projectBlock}>
          T-LAB
        </Link>
        <Link to={'/campaign'} className={styles.projectBlock}>
          Campaign
        </Link>
        <Link to={'/airraven'} className={styles.projectBlock}>
          Air Raven
        </Link>
      </div>
    </Layout>
  )
}

export default HomePage

export const query = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
