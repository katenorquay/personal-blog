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
          <div className={styles.imageBlock}></div>
          <p className={styles.projectTitle}>Eight</p>
        </Link>
        <Link to={'/racket'} className={styles.projectBlock}>
          <div className={styles.imageBlock}></div>
          <p className={styles.projectTitle}>Racket</p>
        </Link>
        <Link to={'/brewbros'} className={styles.projectBlock}>
          <div className={styles.imageBlock}></div>
          <p className={styles.projectTitle}>Brew Bros</p>
        </Link>
        <Link to={'/tlab'} className={styles.projectBlock}>
          <div className={styles.imageBlock}></div>
          <p className={styles.projectTitle}>T-LAB</p>
        </Link>
        <Link to={'/campaign'} className={styles.projectBlock}>
          <div className={styles.imageBlock}></div>
          <p className={styles.projectTitle}>Campaign</p>
        </Link>
        <Link to={'/airraven'} className={styles.projectBlock}>
          <div className={styles.imageBlock}></div>
          <p className={styles.projectTitle}>Air Raven</p>
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
