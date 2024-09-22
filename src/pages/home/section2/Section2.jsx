import React from 'react'
import styles from "./styles.module.css"
import who from "./who.svg"
import arrow from "./arrow.svg"

const Section2 = () => { 
  return (
    <div className={`${styles.container} flex flex-col items-center gap-[7rem]`}>
        <div className='flex flex-col items-center gap-[1rem]'>
            <h4 className={styles.heading1}>Who We Are</h4>
            <h1 className={styles.heading2}>Why charter your private jet with Kaushambi Airways?</h1>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-[5rem] w-[100%]'>
            <div>
                <img src={who} alt="img" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
            </div>
            <div className='flex flex-col gap-[2rem] justify-between items-start'>
                <p className={styles.para}>{`At Kaushambi Airways, we pride ourselves on delivering unmatched performance in every aspect of our services. From the moment you step through our doors, you are met with a commitment to excellence that permeates every facet of our operation.\n\nOur state-of-the-art facilities are meticulously maintained to provide a seamless and luxurious experience, whether you’re preparing for a flight or arriving at your destination.`}</p>      
                <button className={styles.btn}><span className={styles.btntext}>Get To Know More</span> <div><img src={arrow} alt="img" style={{width:"100%",height:"100%",objectFit:"contain"}}/></div></button>        
            </div>
        </div>
    </div>
  )
}

export default Section2