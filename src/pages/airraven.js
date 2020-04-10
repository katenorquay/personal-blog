import React from 'react'
import Layout from '../components/Layout'
import IntroBanner from '../components/IntroBanner'
import FullWidthBanner from '../components/FullWidthBanner'
import introImage from '../assets/intro.png'
import logo from '../assets/projects/airraven/logo.jpg'
import website from '../assets/projects/airraven/website.jpg'

const AirRavenPage = ({data}) => (
  <Layout data={data}>
    <IntroBanner
      title='Air Raven'
      description='Branding for a Norwegian Airline.'>
    </IntroBanner>
    <FullWidthBanner source={logo}></FullWidthBanner>
    <FullWidthBanner source={introImage}></FullWidthBanner>
    <FullWidthBanner source={introImage}></FullWidthBanner>
    <FullWidthBanner source={introImage}></FullWidthBanner>
    <FullWidthBanner source={website}></FullWidthBanner>
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