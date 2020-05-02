import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import IntroBanner from '../components/IntroBanner'
import FullWidthBanner from '../components/FullWidthBanner'
import HalfWidthBanner from '../components/HalfWidthBanner'

import eightSign from '../assets/projects/eight/eightSign.jpg'
import instagram from '../assets/projects/eight/instagram.jpg'
import poster from '../assets/projects/eight/poster.jpg'
import styletile from '../assets/projects/eight/styletile.jpg'

import styles from './styles.module.scss'

const EightPage = ({data}) => (
  <Layout data={data}>
    <IntroBanner
      title='Eight'
      description='Branding for a nap pod rental store for high achieving Wall Street Professionals.'>
    </IntroBanner>
    <HalfWidthBanner>
    <div className={styles.halfWidthBanner}>
      <h2>Eight hours sleep. <br></br> Infinite productivity.</h2>
    </div>
    <div className={styles.halfWidthBanner}>
      <img src={eightSign} alt='sign with eight logo'></img>
    </div>
    </HalfWidthBanner>
    <FullWidthBanner source={styletile} altText='eight style tile'></FullWidthBanner>
    <FullWidthBanner source={instagram} altText='eight instagram images'></FullWidthBanner>
    <FullWidthBanner source={poster} altText='eight poster series'></FullWidthBanner>
  </Layout>
)

export default EightPage

export const query = graphql`
  query EightQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`