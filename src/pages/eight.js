import React from 'react'
import Layout from '../components/Layout'
import IntroBanner from '../components/IntroBanner'
import FullWidthBanner from '../components/FullWidthBanner'
import HalfWidthBanner from '../components/HalfWidthBanner'
import introImage from '../assets/intro.png'

import eightSign from '../assets/projects/eight/eightSign.jpg'
import poster from '../assets/projects/eight/poster.jpg'

import styles from './styles.module.scss'

const EightPage = ({data}) => (
  <Layout data={data}>
    <IntroBanner
      title='Eight'
      description='Branding for a nap pod rental store for high achieving Wall Street Professionals.'>
    </IntroBanner>
    <HalfWidthBanner>
      <h1>Eight hours sleep, infinite productivity</h1>
      <img className={styles.halfWidthBanner} src={eightSign}></img>
    </HalfWidthBanner>
    <FullWidthBanner source={introImage}></FullWidthBanner>
    <HalfWidthBanner>
      <img className={styles.halfWidthBanner} src={introImage}></img>
      <img className={styles.halfWidthBanner} src={introImage}></img>
    </HalfWidthBanner>
    <FullWidthBanner source={introImage}></FullWidthBanner>
    <FullWidthBanner source={poster}></FullWidthBanner>
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