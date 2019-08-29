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
      <img className={styles.introBanner} src={intro}></img>
      <div className={styles.projectContainer}>
        <Link to={'/eight'} className={styles.projectBlockEight}>
          Eight
        </Link>
        <Link to={'/racket'} className={styles.projectBlockRacket}>
          Racket
        </Link>
        <Link to={'/campaign'} className={styles.projectBlockCampaign}>
          Campaign
        </Link>
        <Link to={'/airraven'} className={styles.projectBlockAirRaven}>
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
