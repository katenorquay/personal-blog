import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import IntroBanner from '../components/IntroBanner'
import FullWidthBanner from '../components/FullWidthBanner'
import logo from '../assets/projects/airraven/logo.jpg'
import website from '../assets/projects/airraven/website.jpg'
import plane from '../assets/projects/airraven/plane.png'
import instagram from '../assets/projects/airraven/instagram.jpg'
import poster from '../assets/projects/airraven/poster.png'

const AirRavenPage = ({data}) => (
  <Layout data={data}>
    <IntroBanner
      title='Air Raven'
      description='Branding for a Norwegian Airline.'>
    </IntroBanner>
    <FullWidthBanner source={logo} altText='Air Raven logo'></FullWidthBanner>
    <FullWidthBanner source={poster} altText='Air Raven poster in bus shelter'></FullWidthBanner>
    <FullWidthBanner source={plane} altText='Air Raven plane'></FullWidthBanner>
    <FullWidthBanner source={instagram} altText='Air Raven instagram'></FullWidthBanner>
    <FullWidthBanner source={website} altText='Air Raven website'></FullWidthBanner>
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