import React from 'react'
import Link from 'next/link'
import { MdDesignServices } from "react-icons/md"
import { FaCode } from "react-icons/fa"
import { FaServer } from "react-icons/fa"
import { FaLaptopCode } from "react-icons/fa6"
import styles from './services.module.css'



const Services = () => {
  return (
    <section className={styles.services}>
      <div className={`container ${styles.servicesWrapper}`}>
        <Link href ="/services" className={ `btn ${styles.service}`}>
        <span className={styles.icon}><MdDesignServices></MdDesignServices></span>
        <h6 className= {styles.title}>Ui/Ux Design</h6>
        </Link>
        <Link href ="/services" className={ `btn ${styles.service}`}>
        <span className={styles.icon}><FaCode></FaCode></span>
        <h6 className= {styles.title}>Front End</h6>
        </Link>
        <Link href ="/services" className={ `btn ${styles.service}`}>
        <span className={styles.icon}><FaServer></FaServer></span>
        <h6 className= {styles.title}>BackEnd</h6>
        </Link>
        <Link href ="/services" className={ `btn ${styles.service}`}>
        <span className={styles.icon}><FaLaptopCode></FaLaptopCode></span>
        <h6 className= {styles.title}>FullStack</h6>
        </Link>
        

      </div>
      

    </section>
  )
}

export default Services