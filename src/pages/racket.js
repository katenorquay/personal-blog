
import React from 'react'
import Layout from '../components/Layout'
import IntroBanner from '../components/IntroBanner'
import FullWidthBanner from '../components/FullWidthBanner'
import HalfWidthBanner from '../components/HalfWidthBanner'
import introImage from '../assets/intro.png'

const RacketPage = ({data}) => (
  <Layout data={data}>
    <IntroBanner
      title='Racket'
      description='Cover and article for first issue of a
      new music magazine.'>
    </IntroBanner>
    <HalfWidthBanner source={introImage} source2={introImage}></HalfWidthBanner>
    <FullWidthBanner source={introImage}></FullWidthBanner>
    <FullWidthBanner source={introImage}></FullWidthBanner>
    <FullWidthBanner source={introImage}></FullWidthBanner>
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