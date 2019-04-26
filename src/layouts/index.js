import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'
import './index.css'

class Layout extends React.Component {
  constructor(props) {
   super(props);
   this.handleLoad = this.handleLoad.bind(this);
   this.bodyElem;
 }

  componentDidMount() {
    this.bodyElem = document.getElementsByTagName('body')
    this.bodyElem[0].style.visibility = 'hidden'
    window.addEventListener('load', this.handleLoad);
  }

  handleLoad() {
    this.bodyElem[0].style.visibility = 'visible'
  }

  render() {
    let {data, children} = this.props
    return (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className='page'>
          {children()}
        </div>
        <Footer></Footer>
      </div>
    )
  }
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
