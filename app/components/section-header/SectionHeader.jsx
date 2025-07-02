import React from 'react'
import styles from './section-header.module.css'
const SectionHeader = ({title,subtitle}) => {
  return (
    <header className={ styles.sectionHeader}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
    </header>
  )
}

export default SectionHeader