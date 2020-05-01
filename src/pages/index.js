//Core Dependencies
import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import ProjectLink from '../components/ProjectLink'
import styles from './styles.module.scss'

import airRavenCover from '../assets/projects/airraven/cover.png'
import eightCover from '../assets/projects/eight/cover.png'
import brewBrosCover from '../assets/projects/brewbros/cover.png'
import campaignCover from '../assets/projects/campaign/cover.png'
import tlabCover from '../assets/projects/tlab/cover.png'
import racketCover from '../assets/projects/racket/cover.png'

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
          image={airRavenCover}
        />
        <ProjectLink
          title='Eight'
          link='/eight'
          description='Branding for a nap pod rental store for high achieving Wall Street Professionals.'
          image={eightCover}
        />
        <ProjectLink
          title='Racket'
          link='/racket'
          description='Cover and article for first issue of a new music magazine.'
          image={racketCover}
        />
        <ProjectLink
          title='Campaign'
          link='/campaign'
          description='Australian Flower Council online popup store selling personalised flower bouquets.'
          image={campaignCover}
        />
        <ProjectLink
          title='Brew Bros'
          link='/brewbros'
          description='UX and UI design for mobile app booking system.'
          image={brewBrosCover}
        />
        <ProjectLink
          title='TLAB'
          link='/tlab'
          description='Annual report microsite showcasing T-LAB - a groundbreaking technology company.'
          image={tlabCover}
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