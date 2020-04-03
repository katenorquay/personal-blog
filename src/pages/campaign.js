
import React from 'react'
import Layout from '../components/Layout'
import IntroBanner from '../components/IntroBanner'
import FullWidthBanner from '../components/FullWidthBanner'
import introImage from '../assets/intro.png'

const CampaignPage = ({data}) => (
  <Layout data={data}>
    <IntroBanner
      title='Campaign'
      description='Australian Flower Council online popup store selling personalised flower bouquets.'>
    </IntroBanner>
    <FullWidthBanner source={introImage}></FullWidthBanner>
    <FullWidthBanner source={introImage}></FullWidthBanner>
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