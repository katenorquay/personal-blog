import React from 'react'
import Helmet from 'react-helmet'

import Header from '../Header'
import Footer from '../Footer'
import styles from './styles.module.scss'

class Layout extends React.Component {
  render() {
    let { data, children } = this.props
    return (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <div className={styles.page}>
          {children}
        </div>
      </div>
    )
  }
}

export default Layout
