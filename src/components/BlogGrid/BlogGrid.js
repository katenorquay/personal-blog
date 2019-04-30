//Core Dependencies
import React from 'react'
import Link from 'gatsby-link'

//Styles
import styles from './styles.module.scss'

const BlogGrid = ({data}) => {
  return (
    <div className={styles.banner}>
      <div className={styles.introText}>
        <h2>Welcome to my blog about happiness!</h2>
        <p>
          This blog is a record of my journey from depression to whole hearted living.
        </p>
        <p>
          For most of my adult life I have struggled with feeling not good enough, unworthy and unloveable.
          Eventually, I came to the realisation that there was no achievement that could make these feelings go away, and that the change had to come from within.
        </p>
        <p>
          I decided that I was going to try everything I could to create peace and self love, and along the way, learn to be kinder, more energentic and more accepting.
          This blog is ideas i've collected, ways of thinking and habits that work for me, and things that inspire me.
        </p>
      </div>
      <ul className={styles.list}>
        {data.map(({ node }) => {
          if (node.excerpt !== "") {
            let slug = '/writing/' + node.frontmatter.slug
            return (
              <li key={node.id} className={styles.listItem}>
                <Link to={slug}>
                  <div className={styles.listContent}>
                    {
                      node.frontmatter.primaryImage ?
                        <img src={node.frontmatter.primaryImage.childImageSharp.resize.src} alt={node.frontmatter.title}></img>
                      : null
                    }
                    <p>{node.frontmatter.description}</p>
                  </div>
                </Link>
              </li>
            )
          }
        })}
      </ul>
    </div>
  )
}

export default BlogGrid
