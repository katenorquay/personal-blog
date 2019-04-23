//Core Dependencies
import React, {Component} from 'react'

import BlogGrid from '../components/BlogGrid'

import bannerImage from '../assets/writing.png'

//Styles
import styles from './styles.module.scss'

class WritingPage extends Component {
  constructor() {
    super()
    this.state = {
      page: 'blog'
    }
  }

  changeHandler = (event) => {
    if (event.target.checked === true) {
      this.setState({page: 'review'})
    } else {
      this.setState({page: 'blog'})
    }
  }

  render() {
    let { data } = this.props
    let { page } = this.state
    let items = data.allMarkdownRemark.edges.filter((edge) => edge.node.frontmatter.tags === page)
    console.log(items)
    return (
      <div className={styles.homePage}>
        <div className={styles.infoBanner}>
          <div className={styles.textContainer}>
            <h1>Writing</h1>
            <p>
              My name's Kate. I'm a software engineer with a passion for reading, hot chips and colourful clothes and personal development.
              Since I was 21 I've been struggling with depression.
            </p>
            <div className={styles.sliderContainer}>
              <p>Blog</p>
              <label className={styles.switch}>
                <input type="checkbox" onChange={this.changeHandler}/>
                <span className={styles.slider}></span>
              </label>
              <p>Reviews</p>
            </div>
          </div>
        </div>
        <BlogGrid data={items}/>
      </div>
    )
  }
}

export default WritingPage

export const query = graphql`
  query WritingQuery {
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
