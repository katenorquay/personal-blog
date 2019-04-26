//Core Dependencies
import React from 'react'
import Link from 'gatsby-link'

//Styles
import styles from './styles.module.scss'

import HomeIcon from '../../assets/home-icon.png'
import GraphicDesignIcon from '../../assets/paint-icon.png'
import WritingIcon from '../../assets/writing-icon.png'
import MarketingIcon from '../../assets/brain-icon.png'

const Header = (props) => {
  return (
    <div className={styles.header}>
    <Link to="/">
      <img className={styles.homeIcon} src={HomeIcon}></img>
    </Link>
    <div className={styles.navButtons}>
      <Link className={styles.navButton} activeClassName={styles.designActive} to="/graphic-design/">
        <img className={styles.navIcon} src={GraphicDesignIcon}></img>
      </Link>
      <Link className={styles.navButton} activeClassName={styles.writingActive} to="/writing/">
        <img className={styles.navIcon} src={WritingIcon}></img>
      </Link>
      <Link className={styles.navButton} activeClassName={styles.codeActive} to="/code/">
        <img className={styles.navIcon} src={MarketingIcon}></img>
      </Link>
    </div>
  </div>
  )
}

export default Header
