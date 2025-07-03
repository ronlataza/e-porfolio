import React from 'react'
import styles from './services.module.css'
import SectionHeader from '../components/section-header/SectionHeader'
import Footer from '../components/footer/Footer';

const ServiceItem = ({ title, company, date, description }) => (
  <div className={styles.serviceItem}>
    <div className={styles.iconLine}>
      <div className={styles.icon}></div>
      <div className={styles.line}></div>
    </div>
    <div className={styles.content}>
      <h3>{title}</h3>
      {company && <p className={styles.company}>{company}</p>}
      <p className={styles.date}>{date}</p>
      <p className={styles.description}>{description}</p>
    </div>
  </div>
);

const CertificationCard = ({ title, date, description }) => (
  <div className={styles.certCard}>
    <h3>{title}</h3>
    <p className={styles.date}>{date}</p>
    <p className={styles.description}>{description}</p>
  </div>
);



const page = () => {
  return (
    <>
    <section>
      <SectionHeader title="Qualifications" subtitle="My Professional Experience/s and Certifications"></SectionHeader>

     <div className={styles.servicesPage}>
        <h2 className={styles.subheading}>Work Experience</h2>
        <div className={styles.timeline}>
          <ServiceItem
            title="Internship"
            company="Antasis Inc."
            date="January 2025 - May 2025"
            description={`During my internship at Antasis Inc, I assisted the IT department with various technical tasks. These included inventorying hardware and software, formatting and setting up computers, installing applications and antivirus software, and troubleshooting PC and network issues. I also worked on network documentation, updated floor plans with assigned IP addresses, arranged and tagged cables, and configured system settings like BitLocker and sleep timers. Additionally, I supported the team in remote troubleshooting, file transfers, and basic photo and ID editing.`}
          />
        </div>

        <h2 className={styles.subheading}>Certifications</h2>
        <div className={styles.certificationsGrid}>
          <CertificationCard
            title="Creative Web Design NC II"
            date="February 2022 - August 2022"
            description="Built projects using HTML, CSS, Flexbox, and Grid to create responsive websites."
          />
          <CertificationCard
            title="PROGRAMMING (JAVA) NC III"
            date="September 2023 - November 2023"
            description="Performed object-oriented analysis and design in Java technology and created Java applications using OOP concepts."
          />
          <CertificationCard
            title="COMPUTER SYSTEM SERVICING NC II"
            date="October 2024 - December 2024"
            description="Installed and configured computer systems, set up servers and networks, and maintained and repaired systems and networks."
          />
        </div>
      </div>



    </section>
    <Footer></Footer>
    </>

  )
}

export default page