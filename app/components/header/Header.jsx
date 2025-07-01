
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
            <h1>Ron Ryan Lataza</h1>
            <h3>Aspiring Developer</h3>
            <p>
                Learning the craft of web development with a mindset focused on growth, creativity, and improvement.
            </p>
            <div className={styles.headerCta}>
                <Link href = "/portfolio" className='btn'>Projects</Link>
                <Link href = "/contact" className='btn primary'>Hire Me</Link>
            </div>
        </div>
        <div className={styles.headerRight}>
          <article className ={styles.photos1}>
            <Image src ={Image1} alt=''></Image>
          </article>
           <article className ={styles.photos2}>
            <Image src ={Image2} alt=''></Image>
          </article>
           <article className ={styles.photos3}>
            <Image src ={Image3} alt=''></Image>
          </article>
           <article className ={styles.photos4}>
            <Image src ={Image4} alt=''></Image>
          </article>
        </div>

    </header>
  )
}

export default Header