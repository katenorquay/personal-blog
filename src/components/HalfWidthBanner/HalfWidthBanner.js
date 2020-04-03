import React from 'react'
import styles from './styles.module.scss'

const HalfWidthBanner = ({source, source2}) => {
  return (
    <div className={styles.flexContainer}>
      <img className={styles.halfWidthBanner} src={source}></img>
      <img className={styles.halfWidthBanner} src={source2}></img>
    </div>
  )
}

export default HalfWidthBanner
