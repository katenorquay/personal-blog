
import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import IntroBanner from '../components/IntroBanner'
import FullWidthBanner from '../components/FullWidthBanner'
import HalfWidthBanner from '../components/HalfWidthBanner'

import processOne from '../assets/projects/racket/processOne.jpg'
import processTwo from '../assets/projects/racket/processTwo.jpg'
import coverSpread from '../assets/projects/racket/coverSpread.jpg'
import spreadOne from '../assets/projects/racket/spreadOne.jpg'
import spreadTwo from '../assets/projects/racket/spreadTwo.png'
import spreadThree from '../assets/projects/racket/spreadThree.png'

import styles from './styles.module.scss'

const RacketPage = ({data}) => (
  <Layout data={data}>
    <IntroBanner
      title='Racket'
      description='Cover and article for first issue of a
      new music magazine.'>
    </IntroBanner>
    <HalfWidthBanner>
    <div className={styles.halfWidthBanner}>
    <img src={processOne} alt='collaging for racket magazine'></img>
    </div>
    <div className={styles.halfWidthBanner}>
      <img src={processTwo} alt='collaging for racket magazine'></img>
    </div>
    </HalfWidthBanner>
    <FullWidthBanner source={coverSpread} altText='Magazine cover'></FullWidthBanner>
    <FullWidthBanner source={spreadOne} altText='Magazine spread one'></FullWidthBanner>
    <HalfWidthBanner>
    <div className={styles.halfWidthBanner}>
      <img src={spreadTwo} alt='Magazine spread two'></img>
    </div>
    <div className={styles.halfWidthBanner}>
      <img src={spreadThree} alt='Magazine spread three'></img>
    </div>
    </HalfWidthBanner>
  </Layout>
)

export default RacketPage

export const query = graphql`
  query RacketQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`