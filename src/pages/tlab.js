import React from 'react'
import Layout from '../components/Layout'
import IntroBanner from '../components/IntroBanner'
import FullWidthBanner from '../components/FullWidthBanner'
import introImage from '../assets/intro.png'

const TLABPage = ({data}) => (
  <Layout data={data}>
    <IntroBanner
      title='TLAB'
      description='Annual report microsite to showcase
      the achievements of T-LAB - a
      groundbreaking technology company.'>
    </IntroBanner>
    <FullWidthBanner source={introImage}></FullWidthBanner>
    <FullWidthBanner source={introImage}></FullWidthBanner>
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