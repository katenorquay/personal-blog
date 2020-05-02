import React from 'react'
import styles from './styles.module.scss'

const IntroBanner = ({title, description, children}) => {
  return (
    <div className={styles.introBanner}>
      <div className={styles.introInner}>
        <h1>{title}</h1>
        {description ? <p>{description}</p> : null }
        {children ? children : null}
      </div>
    </div>
  )
}

export default IntroBanner
