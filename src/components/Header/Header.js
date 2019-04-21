//Core Dependencies
import React from 'react'
import Link from 'gatsby-link'

//Styles
import styles from './styles.module.scss'

import HomeIcon from '../../assets/house.png'
import GraphicDesignIcon from '../../assets/paint-icon.png'
import WritingIcon from '../../assets/writing-icon.png'
import MarketingIcon from '../../assets/brain-icon.png'

const Header = ({ siteTitle }) => (
  <div className={styles.header}>
    <Link to="/">
      <img className={styles.navIcon} src={HomeIcon}></img>
    </Link>
    <div className={styles.navButtons}>
      <Link className={styles.navButton} to="/graphic-design/">
        <img className={styles.navIcon} src={GraphicDesignIcon}></img>
      </Link>
      <Link className={styles.navButton} to="/writing/">
        <img className={styles.navIcon} src={WritingIcon}></img>
      </Link>
      <Link className={styles.navButton} to="/marketing/">
        <img className={styles.navIcon} src={MarketingIcon}></img>
      </Link>
    </div>
  </div>
)

export default Header
