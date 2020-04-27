//Core Dependencies
import React from 'react'
import Link from 'gatsby-link'

//Styles
import styles from './styles.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
    <Link to="/">
      <span className="material-icons">
        home
      </span>
    </Link>
  </div>
  )
}

export default Header
