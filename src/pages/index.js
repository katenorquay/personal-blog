//Core Dependencies
import React from 'react'
import Link from 'gatsby-link'

import BlogGrid from '../components/BlogGrid'

import bannerImage from '../assets/happy-cropped.png'

//Styles
import styles from './styles.module.scss'

const HomePage = ({data}) => {
  return (
    <div className={styles.homePage}>
      <img className={styles.bannerImage} src={bannerImage}></img>
      <div className={styles.infoBanner}>
        <h1>Welcome to my blog about happiness!</h1>
        <p>
          My name's Kate. I'm a software engineer with a passion for reading, hot chips and colourful clothes and personal development.
          Since I was 21 I've been struggling with depression. Not cripplingly so, but enough that I felt like I was just getting through the days, rather than really experiencing my life.
          This year I got sick of it.
          I decided that I was going to try everything I could to make myself happier, and along the way, learn to be kinder, more energentic and more accepting.
          This blog is my record of that journey, ideas i've collected, ways of thinking and habits that work for me, and things that inspire me.
        </p>
      </div>
      <BlogGrid data={data}/>
    </div>
  )
}

export default HomePage

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark (
      filter: { fileAbsolutePath: {regex : "\/blog/"} },
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
            image {
              childImageSharp {
                resize(width:600,height:900) {
                  src
                }
              }
            }
            slug
          }
          excerpt
        }
      }
    }
  }
`;
