import React from 'react'
import Layout from '../components/Layout'
import IntroBanner from '../components/IntroBanner'
import SlidingBanner from '../components/SlidingBanner'

import websiteOne from '../assets/projects/tlab/websiteOne.png'
import websiteTwo from '../assets/projects/tlab/websiteTwo.png'
import websiteThree from '../assets/projects/tlab/websiteThree.png'
import websiteFour from '../assets/projects/tlab/websiteFour.png'
import websiteFive from '../assets/projects/tlab/websiteFive.png'
import websiteSix from '../assets/projects/tlab/websiteSix.png'
import websiteSeven from '../assets/projects/tlab/websiteSeven.png'

const TLABPage = ({data}) => (
  <Layout data={data}>
    <IntroBanner
      title='TLAB'
      description='Annual report microsite to showcase
      the achievements of T-LAB - a
      groundbreaking technology company.'>
    </IntroBanner>
    <SlidingBanner>
      <img src={websiteOne }></img>
      <img src={websiteTwo}></img>
      <img src={websiteThree }></img>
      <img src={websiteFour}></img>
      <img src={websiteFive}></img>
      <img src={websiteSix}></img>
      <img src={websiteSeven}></img>
    </SlidingBanner>
  </Layout>
)

export default TLABPage

export const query = graphql`
  query TLABQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`