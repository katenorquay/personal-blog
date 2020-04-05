import React from 'react'
import Layout from '../components/Layout'
import IntroBanner from '../components/IntroBanner'
import FullWidthBanner from '../components/FullWidthBanner'
import HalfWidthBanner from '../components/HalfWidthBanner'
import introImage from '../assets/intro.png'
import logo from '../assets/projects/airraven/logo.jpg'
import mobile from '../assets/projects/airraven/mobile.jpg'
import website from '../assets/projects/airraven/website.jpg'

import styles from './styles.module.scss'

const AirRavenPage = ({data}) => (
  <Layout data={data}>
    <IntroBanner
      title='Air Raven'
      description='Branding for a Norwegian Airline.'>
    </IntroBanner>
    <FullWidthBanner source={logo}></FullWidthBanner>
    <FullWidthBanner source={introImage}></FullWidthBanner>
    <FullWidthBanner source={introImage}></FullWidthBanner>
    <HalfWidthBanner>
      <img className={styles.halfWidthBanner} src={introImage}></img>
      <img className={styles.halfWidthBanner} src={introImage}></img>
    </HalfWidthBanner>
    {/* <HalfWidthBanner>
      <img className={styles.threeQuarterWidthBanner} src={website}></img>
      <img className={styles.oneQuarterWidthBanner} src={mobile}></img>
    </HalfWidthBanner> */}
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