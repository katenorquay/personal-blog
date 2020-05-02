import React from 'react'
import styles from './styles.module.scss'

const HalfWidthBanner = ({children}) => {
  return (
    <div className={styles.flexContainer}>
      {children}
    </div>
  )
}

export default HalfWidthBanner
