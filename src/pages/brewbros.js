import React from 'react'
import Layout from '../components/Layout'
import IntroBanner from '../components/IntroBanner'
import FullWidthBanner from '../components/FullWidthBanner'
import HalfWidthBanner from '../components/HalfWidthBanner'
import introImage from '../assets/intro.png'

const BrewBrosPage = ({data}) => (
  <Layout data={data}>
    <IntroBanner
      title='Brew Bros'
      description='UX and UI design for a brewing company which teaches people to make their own homebrew through workshops and tours.'>
    </IntroBanner>
    <HalfWidthBanner source={introImage} source2={introImage}></HalfWidthBanner>
    <FullWidthBanner source={introImage}></FullWidthBanner>
    <FullWidthBanner source={introImage}></FullWidthBanner>
    <FullWidthBanner source={introImage}></FullWidthBanner>
    <FullWidthBanner source={introImage}></FullWidthBanner>
  </Layout>
)

export default BrewBrosPage

export const query = graphql`
  query BrewBrosQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`