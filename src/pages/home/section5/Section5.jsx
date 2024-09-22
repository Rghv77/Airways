import React from 'react'
import styles from "./styles.module.css"
import Slider from './slider/Slider'

const Section5 = () => {
    return (
        <div className='  gap-[7rem]'>
            <div className='flex flex-col items-center gap-[1rem]'>
                <h4 className={styles.heading1}>Locations</h4>
                <h1 className={styles.heading2}>Top Private Jet Destinations</h1>
            </div>
            <div className='w-[100%] bg-green-500'>
                <Slider/>
            </div>
        </div>
      )
}

export default Section5