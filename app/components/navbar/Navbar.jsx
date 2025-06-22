"use client"
import React, { useState } from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import { FaBars } from "react-icons/fa6"
import { AiOutlineCost } from "react-icons/ai"
import { GoMoon, GoSun } from "react-icons/go"
import { usePathname } from 'next/navigation'


const data = [
  {id: 1, link: '/',caption: 'Home'},
  {id: 2, link: '/about',caption: 'About'},
  {id: 3, link: '/services',caption: 'Services'},
  {id: 4, link: '/portfolio',caption: 'Portfolio'},
  {id: 5, link: '/contact',caption: 'Contact'}
]



const navbar = () => {
  const [open,setOpen]=useState(false);
  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.navLogo}>Profile</Link>
        <ul className={styles.navItems}>
          {
            data.map(({id, link, caption})=> <li key={id}>
              <Link href ={link}>{caption}</Link>
            </li>)
          }

        </ul>
        <div className={styles.navBtns}>
          <button className={styles.themeBtn}> <GoMoon></GoMoon></button>
          <button className={styles.navBtn}><FaBars></FaBars></button>

         

        </div>

      </div>

    </nav>
  )
}

export default navbar