//Core Dependencies
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ProjectLink from '../components/ProjectLink'
import IntroBanner from '../components/IntroBanner'
import styles from './styles.module.scss'

import airRavenLogo from '../assets/projects/airraven/logo.jpg'
import brewBrosLogo from '../assets/projects/brewbros/logo.jpg'
import eightLogo from '../assets/projects/eight/eightSign.jpg'
import tlabWebsite from '../assets/projects/tlab/websiteOne.png'
import racketSpread from '../assets/projects/racket/spreadOne.jpg'
import campaignPostcard from '../assets/projects/campaign/postcardSideOne.jpg'


const HomePage = ({data}) => {
  return (
    <Layout data={data}>
      <div className={styles.mainBanner}>
        <div className={styles.mainInner}>
          <h1>Kate Norquay Main description, bakshh dhfjf jdjd fhh sjhf hjd</h1>
          <button className={styles.btnPrimary}>Contact Me</button>
        </div>
      </div>
      <div className={styles.projectContainer}>
        <ProjectLink
          title='Air Raven'
          link='/airraven'
          description='Branding for a Norwegian Airline.'
          image={airRavenLogo}
        />
        <ProjectLink
          title='Eight'
          link='/eight'
          description='Branding for a nap pod rental store for high achieving Wall Street Professionals.'
          image={eightLogo}
        />
        <ProjectLink
          title='Racket'
          link='/racket'
          description='Cover and article for first issue of a new music magazine.'
          image={racketSpread}
        />
        <ProjectLink
          title='Brew Bros'
          link='/brewbros'
          description='UX and UI design for a brewing company which teaches people to make their own homebrew through workshops and tours.'
          image={brewBrosLogo}
        />
        <ProjectLink
          title='Campaign'
          link='/campaign'
          description='Australian Flower Council online popup store selling personalised flower bouquets.'
          image={campaignPostcard}
        />
        <ProjectLink
          title='TLAB'
          link='/tlab'
          description='Annual report microsite to showcase the achievements of T-LAB - a groundbreaking technology company.'
          image={tlabWebsite}
        />
      </div>
    </Layout>
  )
}

export default HomePage

export const query = graphql`
  query ProjectQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`