//Core Dependencies
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import kate from '../assets/kate.jpg'
import styles from './styles.module.scss'


const HomePage = ({data}) => {
  return (
    <Layout data={data}>

      <div className={styles.aboutSection}>
        <div className={styles.imageContainer}>
          <img src={kate}></img>
        </div>
        <div className={styles.aboutTextContainer}>
          <h2>Hi! I'm Kate Norquay.</h2>
          <p>
            I'm a software developer living in Wellington.
            I love coffee, hot chips, Javascript and frontend development. 
          </p>
          <p>
          This year I am taking courses in Facebook Marketing and Graphic Design and am excited to learn more in these areas.
          </p>
          <p>
          I'm interested in mental health and personal development, and enjoy recording my learnings on my blog.
            I'm committed to courage, kindness and discipline and hope to inspire a sense of self love and belonging in others.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage

export const query = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
