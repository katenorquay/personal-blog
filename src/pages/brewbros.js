import React from 'react'
import Layout from '../components/Layout'
import IntroBanner from '../components/IntroBanner'
import FullWidthBanner from '../components/FullWidthBanner'
import HalfWidthBanner from '../components/HalfWidthBanner'
import SlidingBanner from '../components/SlidingBanner'
import introImage from '../assets/intro.png'
import logo from '../assets/projects/brewbros/logo.jpg'
import appScreensOne from '../assets/projects/brewbros/appScreensOne.jpg'
import appScreensTwo from '../assets/projects/brewbros/appScreensTwo.jpg'

import styles from './styles.module.scss'

const BrewBrosPage = ({data}) => (
  <Layout data={data}>
    <IntroBanner
      title='Brew Bros'
      description='UX and UI design for a brewing company which teaches people to make their own homebrew through workshops and tours.'>
    </IntroBanner>
    <HalfWidthBanner>
      <h1>Description of the UX and UI</h1>
      <img className={styles.halfWidthBanner} src={logo}></img>
    </HalfWidthBanner>
    <FullWidthBanner source={introImage}></FullWidthBanner>
    <FullWidthBanner source={introImage}></FullWidthBanner>
    <FullWidthBanner source={introImage}></FullWidthBanner>
    <SlidingBanner>
      <img src={appScreensOne}></img>
      <img src={appScreensTwo}></img>
    </SlidingBanner>
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