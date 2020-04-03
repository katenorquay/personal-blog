import React from 'react'
import styles from './styles.module.scss'

const FullWidthBanner = ({source}) => {
  return (
    <div className={styles.fullWidthBanner}>
      <img src={source}></img>
    </div>
  )
}

export default FullWidthBanner
