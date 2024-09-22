import React from 'react'
import Section1 from './section1/Section1'
import Section2 from './section2/Section2'
import Section3 from './section3/Section3'
import Section4 from './section4/Section4'
import Section5 from './section5/Section5'

const Home = () => {
  return (
    <div>
        <div className='w-[90%] mx-auto pt-[10rem] pb-[5rem]'>
            <Section1/>
        </div>
        <div style={{background:"linear-gradient(180deg, #000000 0%, #1E1E1E 100%)",boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
        <div className='w-[80%] mx-auto pt-[10rem] pb-[5rem]'>
            <Section2/>
        </div>
        </div>
        <div style={{background:"linear-gradient(360deg, #000000 0%, #1E1E1E 100%)"}}>
        <div className='w-[80%] mx-auto pt-[10rem] pb-[5rem]'>
            <Section3/>
        </div>
        </div>
        <div className='w-[80%] mx-auto pt-[10rem] pb-[5rem]'>
            <Section4/>
        </div>
        <div className='w-[80%] mx-auto pt-[10rem] pb-[5rem]'>
            <Section5/>
        </div>
    </div>
  )
}

export default Home



