import React from 'react'
import styles from "./styles.module.css"
import hlogo from "../../utils/images/hlogo.svg"

const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.textSection}>
            <div className={styles.subtext}>HOME</div>
            <div className={styles.subtext}>SERVICES</div>
            <div className={styles.subtext}>OUR FLEET</div>
        </div>

        <div className={styles.midSection}>
            <img src={hlogo} alt="img" style={{width:"100%", height:"100%", objectFit:"cover"}}/>
        </div>

        <div className={styles.textSection}>
        <div className={styles.subtext}>ABOUT US</div>
            <div className={styles.subtext}>CONTACT</div>
            <div className={styles.subtext}>BOOK NOW</div>
        </div>
    </div>
  )
}

export default Navbar