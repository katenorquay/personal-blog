import React from 'react'
import { Slide } from 'react-slideshow-image';
import styles from './styles.module.scss'

const properties = {
  duration: 7500,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true
}

const SlidingBanner = ({children}) => {
  return (
    <div className={styles.slideContainer}>
      <Slide {...properties}>
        { children.map((child, index) => {
          return (
            <div key={`slide_${index}`} className={styles.slide}>
              {child}
            </div>
          )
        })}
      </Slide>
  </div>
  )
}

export default SlidingBanner
