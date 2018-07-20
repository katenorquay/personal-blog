import React from 'react'
import Link from 'gatsby-link'

import styles from './styles.module.css'

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
      {/* <h3 style={{ margin: 0 }}>
        <Link className={styles.link} to="/about/">About</Link>
      </h3> */}
    </div>
  </div>
)

export default Header
