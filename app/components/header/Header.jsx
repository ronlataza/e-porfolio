
import styles from './header.module.css'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Image1 from '../../assets/top-left.png'
import Image2 from '../../assets/top-right.png'
import Image3 from '../../assets/bottom-left.png'
import Image4 from '../../assets/bottom-right.png'

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
                <Link href = "/contact" className='btn primary'>Hire Me</Link>
            </div>
        </div>
        <div className={styles.headerRight}>
          <article classname ={styles.card1}>
            <Image src ={Image1} alt=''></Image>
          </article>
           <article classname ={styles.card2}>
            <Image src ={Image2} alt=''></Image>
          </article>
           <article classname ={styles.card3}>
            <Image src ={Image3} alt=''></Image>
          </article>
           <article classname ={styles.card4}>
            <Image src ={Image4} alt=''></Image>
          </article>
        </div>

    </header>
  )
}

export default Header