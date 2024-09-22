import React from 'react'
import styles from "./styles.module.css"
import airplane1 from "../../../utils/images/airplane1.svg"
import airplane1s from "./airplane1s.svg"
const Section1 = () => {
  return (
    <div className={`${styles.container} flex flex-col gap-[3rem] items-center`}>
        <div className='flex flex-col gap-[0rem] items-center'>
            <h1 className={styles.heading}>Charter Your Private Jet Today</h1>
            <p className={styles.para}>Revolutionary and Sustainable Private Jet Charter: Pioneering Excellence in Aviation</p>
        </div>

        <div>
            <img src={airplane1} alt="img" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
            <div className='mt-[-8rem] opacity-[0.1]'>
            <img src={airplane1s} alt="img" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
            </div>
        </div>
    </div>
  )
}

export default Section1