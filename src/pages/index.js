//Core Dependencies
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Link from 'gatsby-link'
import styles from './styles.module.scss'

import intro from '../assets/intro.png'

const HomePage = ({data}) => {
  return (
    <Layout data={data}>
      <div className={styles.introBanner}>
        Kate Norquay
      </div>
      <div className={styles.sectionTitle}>Projects</div>
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
          TLAB
        </Link>
        <Link to={'/campaign'} className={styles.projectBlock}>
          Campaign
        </Link>
        <Link to={'/airraven'} className={styles.projectBlock}>
          Air Raven
        </Link>
      </div>
      <div className={styles.sectionTitle}>Get in touch</div>
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
