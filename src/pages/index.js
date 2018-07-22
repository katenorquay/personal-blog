//Core Dependencies
import React from 'react'
import Link from 'gatsby-link'

import BlogGrid from '../components/BlogGrid'

import bannerImage from '../assets/happy-cropped.png'

//Styles
import styles from './index.styles.module.scss'

const HomePage = ({data}) => {
  return (
    <div className={styles.page}>
      <img className={styles.bannerImage} src={bannerImage}></img>
      <div className={styles.infoBanner}>
        <h1>A blog about happiness</h1>
        <p>
          Here's a couple of sentences about what the blog is about.
          The secret behind the people that know how to lose weight and those that struggle to lose weight is knowledge.
          It has nothing to do with secret pills or crazy workouts.
          In this 3 day challenge, you'll learn why your body loves to store fat, how you can turn it into a fat burning machine, and how to maintain the lifestyle through awesome meals.
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
            image
            slug
          }
          excerpt
        }
      }
    }
  }
`;
