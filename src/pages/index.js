import React from 'react'
import Link from 'gatsby-link'

import BlogGrid from '../components/BlogGrid'

import BannerImage from '../assets/happy-cropped.png'

const IndexPage = ({data}) => {
  return (
    <div
      style={{
        textAlign: 'center'
      }}
    >
      <img src={BannerImage}></img>
      <div
        style={{
          margin: '2rem 10rem'
        }}
      >
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

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
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
