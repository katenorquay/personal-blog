//Core Dependencies
import React from 'react'

//Styles
import styles from './styles.module.scss'

const Tags = ({tags}) => {
  return (
    <div className={styles.tags}>
      {
        tags.map(function(tag) {
          return (<p className={styles.tagText}>{tag}</p>)
        })
      }
    </div>
  )
}

export default Tags
