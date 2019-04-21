//Core Dependencies
import React from 'react'

//Styles
import styles from './styles.module.scss'

const SearchBar = ({data}) => {
  return (
    <div className={styles.searchBarContainer}>
      <button>Reviews</button>
      <button>Technical</button>
      <button>Mental Health</button>
    </div>
  )
}

export default SearchBar
