//Core Dependencies
import React from 'react'
import Link from 'gatsby-link'

//Styles
import styles from './styles.module.scss'

const ProjectLink = ({ link, title }) => (
  <Link to={link} className={styles.projectBlock}>
    {title}
  </Link>
)

export default ProjectLink
