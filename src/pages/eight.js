import React from 'react'
import Layout from '../components/Layout'
import IntroBanner from '../components/IntroBanner'
import FullWidthBanner from '../components/FullWidthBanner'
import HalfWidthBanner from '../components/HalfWidthBanner'
import introImage from '../assets/intro.png'

import eightSign from '../assets/projects/eight/eight-sign.jpg'

const EightPage = ({data}) => (
  <Layout data={data}>
    <IntroBanner
      title='Eight'
      description='Branding for a nap pod rental store for high achieving Wall Street Professionals'>
    </IntroBanner>
    <HalfWidthBanner source={introImage} source2={introImage}></HalfWidthBanner>
    <FullWidthBanner source={introImage}></FullWidthBanner>
    <HalfWidthBanner source={introImage} source2={introImage}></HalfWidthBanner>
    <FullWidthBanner source={introImage}></FullWidthBanner>
    <FullWidthBanner source={introImage}></FullWidthBanner>
  </Layout>
)

export default EightPage

export const query = graphql`
  query EightQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`