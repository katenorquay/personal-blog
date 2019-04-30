//Core Dependencies
import React from 'react'

//Styles
import styles from './styles.module.scss'

const CodeGrid = ({data}) => {
  return (
    <div className={styles.banner}>
      <div className={styles.introText}>
        <p>
          I started learning to code two and a half years ago at a programming Bootcamp in Wellington, Enspiral Dev Academy.
        </p>
        <p>
          Up until this point in my life I'd always thought of myself as pretty smart, as I'd never struggled at school.
          That all changed on the first day of bootcamp. Everyday I would struggle, and go home feeling like my head was about to pop.
          I found that my naturally creative brain loved the challenge of thinking logically. 
          There is no feeling quite like solving a really difficult problem.
          I knew I had found one of my passions.
        </p>
        <p>
          Over the last few years I have worked on many projects, predominantly using Javascript and React. You can see examples of them below.
        </p>
      </div>
      <ul className={styles.list}>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <li key={node.id} className={styles.listItem}>
              <a href={node.frontmatter.slug}>
                <div className={styles.listContent}>
                  <h2>{node.frontmatter.title}</h2>
                  <p>{node.frontmatter.description}</p>
                  <img src={node.frontmatter.primaryImage.childImageSharp.resize.src} alt={node.frontmatter.title}></img>
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