//Core Dependencies
import React from 'react'

import bannerImage from '../assets/graphic_design_2.png'

//Styles
import styles from './styles.module.scss'

const GraphicDesignPage = ({data}) => {
  return (
    <div className={styles.homePage}>
      <img className={styles.bannerImage} src={bannerImage}></img>
      <div className={styles.infoBanner}>
        <h1>Welcome to my blog about happiness!</h1>
      </div>
    </div>
  )
}

export default GraphicDesignPage
