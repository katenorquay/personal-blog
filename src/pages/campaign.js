
import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import IntroBanner from '../components/IntroBanner'
import FullWidthBanner from '../components/FullWidthBanner'
import HalfWidthBanner from '../components/HalfWidthBanner'
import SlidingBanner from '../components/SlidingBanner'

import postcardSideOne from '../assets/projects/campaign/postcardSideOne.jpg'
import postcardSideTwo from '../assets/projects/campaign/postcardSideTwo.jpg'
import frankieMagazine from '../assets/projects/campaign/frankieMagazine.jpg'
import appScreensOne from '../assets/projects/campaign/appScreensOne.jpg'
import appScreensTwo from '../assets/projects/campaign/appScreensTwo.jpg'

import styles from './styles.module.scss'

const CampaignPage = ({data}) => (
  <Layout data={data}>
    <IntroBanner
      title='Campaign'
      description='Australian Flower Council online popup store selling personalised flower bouquets.'>
    </IntroBanner>
    <HalfWidthBanner>
      <img className={styles.halfWidthBanner} src={postcardSideOne} alt='Campaign postcard side one'></img>
      <img className={styles.halfWidthBanner} src={postcardSideTwo} alt='Campaign postcard side two'></img>
    </HalfWidthBanner>
    <FullWidthBanner source={frankieMagazine} altText='Campaign postcard inside Frankie magazine'></FullWidthBanner>
    <SlidingBanner>
      <img src={appScreensOne} alt='Campaign app screens one'></img>
      <img src={appScreensTwo} alt='Campaign app screens two'></img>
    </SlidingBanner>
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