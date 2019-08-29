//Core Dependencies
import React from 'react'

import Layout from '../components/Layout'

//Styles
import styles from './styles.module.scss'

import racket1 from '../../assets/racket1'
import racket2 from '../../assets/racket2'
import racket3 from '../../assets/racket3'
import racket4 from '../../assets/racket4'
import racket5 from '../../assets/racket5'



const RacketPage = ({data}) => (
  <Layout data={data}>
    <div className={styles.codeBanner}>
      <div className={styles.textContainer}>
        <img src={racket1}></img>
        <img src={racket2}></img>
        <img src={racket3}></img>
        <img src={racket4}></img>
        <img src={racket5}></img>
      </div>
    </div>
  </Layout>
)

export default RacketPage

export const query = graphql`
  query RacketQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`