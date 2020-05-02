import React from 'react'
import Link from 'gatsby-link'
import styles from './styles.module.scss'

const ProjectLink = ({ link, title, description, image, altText }) => (
  <Link to={link} className={styles.projectBlock}>
    <img className={styles.coverPhoto} src={image} alt={altText}></img>
    <div className={styles.projectText}>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </div>
    <div className={styles.projectLine}></div>
  </Link>
)

export default ProjectLink
