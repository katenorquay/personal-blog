import React from 'react'
import Layout from '../components/Layout'
import IntroBanner from '../components/IntroBanner'
import FullWidthBanner from '../components/FullWidthBanner'
import HalfWidthBanner from '../components/HalfWidthBanner'
import introImage from '../assets/intro.png'

const AirRavenPage = ({data}) => (
  <Layout data={data}>
    <IntroBanner
      title='Air Raven'
      description='Branding for a Norwegian Airline.'>
    </IntroBanner>
    <FullWidthBanner source={introImage}></FullWidthBanner>
    <FullWidthBanner source={introImage}></FullWidthBanner>
    <FullWidthBanner source={introImage}></FullWidthBanner>
    <HalfWidthBanner source={introImage} source2={introImage}></HalfWidthBanner>
    <FullWidthBanner source={introImage}></FullWidthBanner>
  </Layout>
)

export default AirRavenPage

export const query = graphql`
  query AirRavenQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`