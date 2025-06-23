
import styles from './header.module.css'
import React from 'react'

const Header = () => {
  return (
    <header className={`container ${styles.header}`}>
        <div className={styles.headerLeft}></div>
        <div className={styles.headerRight}></div>

    </header>
  )
}

export default Header