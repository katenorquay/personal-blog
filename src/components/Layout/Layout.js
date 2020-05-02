import React from 'react'
import Helmet from 'react-helmet'

import Header from '../Header'
import Footer from '../Footer'

class Layout extends React.Component {
  render() {
    let { data, children } = this.props
    return (
      <div>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          {children}
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Layout
