
import React from 'react'
import Layout from '../components/Layout'
import IntroBanner from '../components/IntroBanner'
import FullWidthBanner from '../components/FullWidthBanner'
import HalfWidthBanner from '../components/HalfWidthBanner'

import processOne from '../assets/projects/racket/processOne.jpg'
import processTwo from '../assets/projects/racket/processTwo.jpg'
import cover from '../assets/projects/racket/cover.jpg'
import spreadOne from '../assets/projects/racket/spreadOne.jpg'
import spreadTwo from '../assets/projects/racket/spreadTwo.jpg'

import styles from './styles.module.scss'

const RacketPage = ({data}) => (
  <Layout data={data}>
    <IntroBanner
      title='Racket'
      description='Cover and article for first issue of a
      new music magazine.'>
    </IntroBanner>
    <HalfWidthBanner>
      <img className={styles.halfWidthBanner} src={processOne}></img>
      <img className={styles.halfWidthBanner} src={processTwo}></img>
    </HalfWidthBanner>
    <FullWidthBanner source={cover}></FullWidthBanner>
    <FullWidthBanner source={spreadOne}></FullWidthBanner>
    <FullWidthBanner source={spreadTwo}></FullWidthBanner>
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