import React, { useState } from 'react'
import styles from "./styles.module.css"
import heli1 from "./heli1.svg"
import heli2 from "./heli2.svg"
import heli3 from "./heli3.svg"
import air1 from "./air1.svg"
import air2 from "./air2.svg"
import air3 from "./air3.svg"
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
            title:"Helicopters",
            images:[heli1,heli2,heli3],
            heading:"Citation III",
            para:"The most luxurious and comfortable way to fly private. Whether long-haul or short haul."
        },
        {
            id:2,
            title:"Mid-Size Jet",
            images:[air1,air2,air3]
        },
        {
            id:3,
            title:"Large Jets",
            images:[air1,air2,air3]
        },
        {
            id:2,
            title:"Turbo Props",
            images:[air1,air2,air3]
        },
    ]
    const [open,setIsOpen]=useState(-1);
    const handleOpen=(index)=>{
        if(index===open) setIsOpen(-1);
        else setIsOpen(index)
    }
    const handleSlideChange = (swiper) => {
        const slides = swiper.slides;
      
        slides.forEach((slide, index) => {
          const id = index.toString(); // Convert index to string to match the div id
          const intro = document.getElementById(id); // Select the description div
      
          if (intro) {
            if (index === swiper.activeIndex) {
              // Active slide: show the description div
              slide.style.opacity = "1"; // Active slide
            //   intro.style.display = "flex"; // Show description div
            } else {
              // Inactive slide: hide the description div
              slide.style.opacity = "0.3"; // Inactive slides
            //   intro.style.display = "none"; // Hide description div
            }
          }
        });
      };
      
  return (
    <div className=' flex flex-col gap-[0rem]'>
        {
            list.map((item,index)=>{
                return <div key={item.index} className={styles.list} >
                    <div className='flex flex-row gap-[2rem] cursor-pointer' onClick={()=>handleOpen(index)}>
                    <p className={styles.listserialno}>{(index+1).toString().padStart(2, '0')}</p>
                    <h4 className={styles.listheading}>
                        {item.title}
                    </h4>
                    </div>
                  { open===index && <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
            rotate: 0,
            stretch: -300,
            depth: 600,
            modifier: 1,
            slideShadows: false,
          }}
          loop={true}
        pagination={false}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="mySwiper"
        navigation={{
          nextEl: ".swiper-button-next1",
          prevEl: ".swiper-button-prev1",
          clickable: true,
        }}
        onSlideChange={handleSlideChange}
      >
        {
            item.images.map((image,index)=>{
                return <SwiperSlide key={item.id}>
                    <div className='flex flex-col items-center gap-[2rem]'>
                        <div className=' '>
                    <img src={image} alt="img" style={{width:"100%", height:"100%", objectFit:"cover"}}/>
                    </div>
                    <div id={`${index.toString()}`} className='flex flex-col items-center '>
                        <h4 className={styles.sliderhead}>{item.heading}</h4>
                        <p className={styles.sliderpara}>{item.para}</p>
                    </div>
                    </div>
                </SwiperSlide>
            })
        }
        <div style={{zIndex:"1000"}} className='absolute left-1/2 transform -translate-x-1/2 bottom-[8rem] flex items-center w-[40%] justify-between'>  
        <div >
        <IoArrowBackCircleOutline color="#808080" size={35} style={{ cursor: 'pointer' }} className='swiper-button-prev1' />
      </div>
      <div >
        <IoArrowForwardCircleOutline color="#808080" size={35} style={{ cursor: 'pointer' }} className='swiper-button-next1'/>
      </div>  
      </div> 
      </Swiper>}
         
                </div>
            })
        }
        
    </div>
  )
}

export default Slider