//Core Dependencies
import React from 'react'
import Link from 'gatsby-link'
import intro from '../../assets/intro.png'

//Styles
import styles from './styles.module.scss'

const ProjectLink = ({ link, title, image }) => (
  <Link to={link} className={styles.projectBlock}>
    <img src={intro}></img>
    <div className={styles.projectText}>
      <p className={styles.title}>{title}</p>
      <p>description description description</p>
    </div>
    <div className={styles.projectLine}></div>
  </Link>
)

export default ProjectLink
