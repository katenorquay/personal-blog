//Core Dependencies
import React from 'react'

//Styles
import styles from './styles.module.scss'

const CodeGrid = ({data}) => {
  return (
    <div className={styles.banner}>
      <ul className={styles.list}>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <li key={node.id} className={styles.listItem}>
              <a href={node.frontmatter.slug}>
                <div className={styles.listContent}>
                  <h2>{node.frontmatter.title}</h2>
                  <p>{node.frontmatter.description}</p>
                </div>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CodeGrid