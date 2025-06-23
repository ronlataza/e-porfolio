
import styles from './header.module.css'
import React from 'react'

const Header = () => {
  return (
    <header className={`container ${styles.header}`}>
        <div className={styles.headerLeft}>
            <h1>Get your Business online right away</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur atque itaque et quia.
            </p>
            <div className={styles.headerCta}>
                <Link href = "/portfolio" className='btn'>Projects</Link>
                <Link href = "/portfolio" className='btn'>Projects</Link>
            </div>
        </div>
        <div className={styles.headerRight}></div>

    </header>
  )
}

export default Header