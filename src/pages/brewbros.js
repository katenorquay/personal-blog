import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import IntroBanner from '../components/IntroBanner'
import HalfWidthBanner from '../components/HalfWidthBanner'
import SlidingBanner from '../components/SlidingBanner'

import logo from '../assets/projects/brewbros/logo.jpg'
import appScreensOne from '../assets/projects/brewbros/appScreensOne.jpg'
import appScreensTwo from '../assets/projects/brewbros/appScreensTwo.jpg'
import cardsorting from '../assets/projects/brewbros/cardsorting.jpg'
import wireframes from '../assets/projects/brewbros/wireframes.jpg'

import styles from './styles.module.scss'

const BrewBrosPage = ({data}) => (
  <Layout data={data}>
    <IntroBanner
      title='Brew Bros'
      description='UX and UI design for mobile app booking system'>
    </IntroBanner>
    <HalfWidthBanner>
      <div className={styles.halfWidthBanner}>
        <div>
          <h2>Project Description</h2>
          <p>
            Our brief was to design the UX and UI for a brewing company, with the goal of increasing signups for tours and workshops.
          </p>
          <p>
            I started by creating a persona to help me to understand my users needs, behaviours and goals.
            My persona, Simon’s primary goal was to learn how to make his first homebrew in as few steps as possible.
            By designing an interface that encourages first time brewers to signup for a workshop I could meet both the business and my users goals.
          </p>
          <p>
            Next I did a card sorting exercise from the perspective of my user.
            Card sorting is used to group bits of functionality that make sense together to get a better idea of how to organise the app.
          </p>
          <p>
            Thirdly I created wireframes. These allow the functionality and layout to be refined separately from the branding, making the design faster to iterate on.
          </p>
        </div>
      </div>
      <div className={styles.halfWidthBanner}>
        <img src={logo} alt='Brew bros logo'></img>
      </div>
    </HalfWidthBanner>
    <HalfWidthBanner>
    <div className={styles.halfWidthBanner}>
      <img src={cardsorting} alt='Card sorting exercise'></img>
    </div>
    <div className={styles.halfWidthBanner}>
      <img src={wireframes} alt='Wireframes'></img>
    </div>
    </HalfWidthBanner>
    <SlidingBanner>
      <img src={appScreensOne} alt='Brew Bros app screens one'></img>
      <img src={appScreensTwo} alt='Brew Bros app screens two'></img>
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