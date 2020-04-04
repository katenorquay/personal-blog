
import React from 'react'
import Layout from '../components/Layout'
import IntroBanner from '../components/IntroBanner'
import FullWidthBanner from '../components/FullWidthBanner'
import HalfWidthBanner from '../components/HalfWidthBanner'
import introImage from '../assets/intro.png'

import postcardSideOne from '../assets/projects/campaign/postcardSideOne.jpg'
import postcardSideTwo from '../assets/projects/campaign/postcardSideTwo.jpg'
import frankyMagazine from '../assets/projects/campaign/frankyMagazine.jpg'

import styles from './styles.module.scss'

const CampaignPage = ({data}) => (
  <Layout data={data}>
    <IntroBanner
      title='Campaign'
      description='Australian Flower Council online popup store selling personalised flower bouquets.'>
    </IntroBanner>
    <HalfWidthBanner>
      <img className={styles.halfWidthBanner} src={postcardSideOne}></img>
      <img className={styles.halfWidthBanner} src={postcardSideTwo}></img>
    </HalfWidthBanner>
    <FullWidthBanner source={frankyMagazine}></FullWidthBanner>
    <FullWidthBanner source={introImage}></FullWidthBanner>
    <FullWidthBanner source={introImage}></FullWidthBanner>
  </Layout>
)

export default CampaignPage

export const query = graphql`
  query CampaignQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`