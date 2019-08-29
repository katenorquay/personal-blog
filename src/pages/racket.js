//Core Dependencies
import React from 'react'

import Layout from '../components/Layout'

//Styles
import styles from './styles.module.scss'

const RacketPage = ({data}) => (
  <Layout data={data}>


<ul className={styles.projectList}>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <li key={node.id} className={styles.listItem}>
              <img className={styles.projectImage} src={node.frontmatter.imageOne.childImageSharp.resize.src}></img>
              <img className={styles.projectImage} src={node.frontmatter.imageTwo.childImageSharp.resize.src}></img>
              <img className={styles.projectImage} src={node.frontmatter.imageThree.childImageSharp.resize.src}></img>
              <img className={styles.projectImage} src={node.frontmatter.imageFour.childImageSharp.resize.src}></img>
              <img className={styles.projectImage} src={node.frontmatter.imageFive.childImageSharp.resize.src}></img>
            </li>
          )
        })}
      </ul>
  </Layout>
)

export default RacketPage

export const query = graphql`
  query RacketQuery {
    site {
      siteMetadata {
        title
      }
    },
    allMarkdownRemark (
      filter: { fileAbsolutePath: {regex : "\/racket/"} }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            slug
            imageOne { childImageSharp { resize(width:1000,height:650) { src } } },
            imageTwo { childImageSharp { resize(width:1000,height:650) { src } } },
            imageThree { childImageSharp { resize(width:1000,height:650) { src } } },
            imageFour { childImageSharp { resize(width:1000,height:650) { src } } },
            imageFive { childImageSharp { resize(width:1000,height:650) { src } } }
          }
        }
      }
    }
  }
`


// <img src={node.frontmatter.primaryImage.childImageSharp.resize.src}></img>
// <img src={racket2}></img>
// <img src={racket3}></img>
// <img src={racket4}></img>
// <img src={racket5}></img>