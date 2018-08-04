//Core Dependencies
import React from 'react'
import Link from 'gatsby-link'

//Styles
import styles from './styles.module.scss'

import BookIcon from '../../assets/book.png'
import AboutIcon from '../../assets/smiling-girl.png'

const Header = ({ siteTitle }) => (
  <div className={styles.header}>
    <h3 style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          color: 'black',
          textDecoration: 'none',
        }}
      >
        {siteTitle}
      </Link>
    </h3>
    <div className={styles.navButtons}>
      <Link className={styles.navButton} to="/about/">
        <img className={styles.navIcon} src={AboutIcon}></img>
        <h3 className={styles.navText}>About</h3>
      </Link>
      <Link className={styles.navButton} to="/books/">
        <img className={styles.navIcon} src={BookIcon}></img>
        <h3 className={styles.navText}>Books</h3>
      </Link>
    </div>
  </div>
)

export default Header
