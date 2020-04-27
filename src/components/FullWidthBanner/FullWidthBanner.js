import React from 'react'
import styles from './styles.module.scss'

const FullWidthBanner = ({source, altText}) => {
  return (
    <div className={styles.fullWidthBanner}>
      <img src={source} alt={altText}></img>
    </div>
  )
}

export default FullWidthBanner
