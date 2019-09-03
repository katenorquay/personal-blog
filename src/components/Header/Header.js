//Core Dependencies
import React from 'react'
import Link from 'gatsby-link'

//Styles
import styles from './styles.module.scss'

import HomeIcon from '../../assets/home-icon.png'
import GraphicDesignIcon from '../../assets/paint-icon.png'
import WritingIcon from '../../assets/writing-icon.png'
// import CodeIcon from '../../assets/brain-icon.png'

const Header = () => {
  return (
    <div className={styles.header}>
    <Link to="/">Menu</Link>
  </div>
  )
}

export default Header
