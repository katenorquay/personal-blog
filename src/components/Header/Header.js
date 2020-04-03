//Core Dependencies
import React from 'react'
import Link from 'gatsby-link'

//Styles
import styles from './styles.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
    <Link to="/">Menu</Link>
  </div>
  )
}

export default Header
