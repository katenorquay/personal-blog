//Core Dependencies
import React, { Component } from 'react'
import { graphql } from 'gatsby'

import BlogGrid from '../components/BlogGrid'
import ReviewGrid from '../components/ReviewGrid'
import Layout from '../components/Layout'

//Styles
import styles from './styles.module.scss'

class WritingPage extends Component {
  constructor() {
    super()
    this.state = {
      page: 'blog'
    }

    this.inputRef = React.createRef()
  }

  changeHandler = (event) => {
    if (event.target.checked === true) {
      this.setState({page: 'review'})
    } else {
      this.setState({page: 'blog'})
    }
  }

  clickHandler = (pageValue, inputValue) => {
    this.setState({page: pageValue})
    this.inputRef.current.checked = inputValue
  }

  render() {
    let { data } = this.props
    let { page } = this.state
    let items = data.allMarkdownRemark.edges.filter((edge) => edge.node.frontmatter.tags === page)
    return (
      <Layout data={data}>
        <div className={styles.homePage}>
          <div className={styles.writingBanner}>
            <div className={styles.textContainer}>
              <h1>Writing</h1>
              <p>
              </p>
              <div className={styles.sliderContainer}>
                <p onClick={() => { this.clickHandler('blog', false)}}>Blog</p>
                <label className={styles.switch}>
                  <input type="checkbox" onChange={this.changeHandler} ref={this.inputRef}/>
                  <span className={styles.slider}></span>
                </label>
                <p onClick={() => { this.clickHandler('review', true)}}>Reviews</p>
              </div>
            </div>
          </div>
          {
            page === 'blog' ? <BlogGrid data={items}/> : <ReviewGrid data={items}/>
          }
        </div>
      </Layout>
    )
  }
}

export default WritingPage

export const query = graphql`
  query WritingQuery {
    site {
      siteMetadata {
        title
      }
    },
    allMarkdownRemark (
      filter: { fileAbsolutePath: {regex : "\/writing/"} },
      sort: { order: DESC, fields: [frontmatter___date]},
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            date(formatString: "DD MMMM, YYYY")
            primaryImage {
              childImageSharp {
                resize(width:600,height:900) {
                  src
                }
              }
            }
            slug
            tags
          }
          excerpt
        }
      }
    }
  }
`;
