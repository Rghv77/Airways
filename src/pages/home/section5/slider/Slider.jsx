import React, { useState } from 'react'
import styles from "./styles.module.css"
import dubai from "./dubai.svg"
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';



// import required modules
import { EffectCoverflow, Pagination,Navigation,Autoplay } from 'swiper/modules';

const Slider = () => {
    const list=[
        {
            id:1,
            image:dubai,
            title:"Dubai",
            desc:"Discover the Private Jet Destination to Dubai"
        },
        {
            id:2,
            image:dubai,
            title:"Dubai",
            desc:"Discover the Private Jet Destination to Dubai"
        },
        {
            id:3,
            image:dubai,
            title:"Dubai",
            desc:"Discover the Private Jet Destination to Dubai"
        },
        {
            id:4,
            image:dubai,
            title:"Dubai",
            desc:"Discover the Private Jet Destination to Dubai"
        },
        // {
        //     id:5,
        //     image:dubai,
        //     title:"Dubai",
        //     desc:"Discover the Private Jet Destination to Dubai"
        // },
        // {
        //     id:6,
        //     image:dubai,
        //     title:"Dubai",
        //     desc:"Discover the Private Jet Destination to Dubai"
        // },
        // {
        //     id:7,
        //     image:dubai,
        //     title:"Dubai",
        //     desc:"Discover the Private Jet Destination to Dubai"
        // },
    ]
   
    
      
  return (
    <div className='flex flex-col w-[100%]  gap-[5rem]'>
        <Swiper
        // effect={'coverflow'}
        grabCursor={true}
        centeredSlides={false}
        slidesPerView={4}
        
          loop={true}
        pagination={false}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="mySwiper"
        navigation={{
          nextEl: ".swiper-button-next2",
          prevEl: ".swiper-button-prev2",
          clickable: true,
        }}
        
      >
        {
            list.map((card,index)=>{
                return <SwiperSlide key={card.id}> <div className={styles.card} key={card.id}>
                    <div className='w-full aspect-video'>
                        <img src={dubai} alt="img" style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:"8px"}}/>
                    </div>
                    <p className={styles.title}>{card.title}</p>
                    <p className={styles.para}>{card.desc}</p>
                </div>
                </SwiperSlide>
            })
        }
      </Swiper>
      <div style={{zIndex:"1000"}} className=' bg-red-500 flex items-center gap-[5rem] justify-between'>  
        <div >
        <IoArrowBackCircleOutline color="#808080" size={35} style={{ cursor: 'pointer' }} className='swiper-button-prev2' />
      </div>
      <div >
        <IoArrowForwardCircleOutline color="#808080" size={35} style={{ cursor: 'pointer' }} className='swiper-button-next2'/>
      </div>  
      </div> 
    </div>
  )
}

export default Slider