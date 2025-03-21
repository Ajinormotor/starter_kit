/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Header from '../../Common/Header'
import Slider from 'react-slick'

import {motion}  from  'framer-motion'
import { containerVariants, itemVariants } from '../../Animations/Framer'

const Hero = () => {
  

  const settings = {
    dots: false,
    loop: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,

  };

  // Dynamically change the background class


  return (
    <section className={`h-screen md:h-[100vh] w-full overflow-hidden transition-all duration-500 
    relative `}>

      <div className="absolute top-0 w-full z-10">
        <Header />
      </div>

      <Slider {...settings}>
        <div className="">
          <HeroOne />
        </div>

        <div className="">
          <HeroTwo />
        </div>

        <div className="">
          <HeroThree />
        </div>
      </Slider>

    </section>
  );
};

export default Hero;


// Hero One Component
const HeroOne =  () => {

  return (
    <section className='h-screen md:h-[100vh] w-full bg'>



<div className='w-full flex items-center justify-center h-full pt-[100px] '>


<motion.div
  initial="initial"
  whileInView="enter"
  exit="exit"
variants={containerVariants}
className='flex flex-col items-center justify-center text-center gap-5 w-full md:max-w-[800px] h-full pb-10'>
  <motion.h1
  variants={itemVariants} className='md:text-5xl text-3xl text-white proza font-semibold md:leading-[70px]'>Driving Excellence in the delivery of <span className='bg-orange-700 rounded-md px-2'>Exceptional </span>
   value in the Oil & Gas Industry</motion.h1>

     <motion.p
       variants={itemVariants}
     className='text-[#F8FCFC] text-xl'>At Dover Engineering Limited we leverage the power of integrated engineering technology, teamwork, adaptability, integrity, safety and environment to unlock 
      innovative and efficient solutions through strategic engineering approaches.</motion.p>

      <motion.button
        variants={itemVariants}
        className='border border-[#F8FCFC] bg-transparent text-[#F8FCFC] px-4 py-2 md:w-[256px] md:h-[54px]'>
        Learn More About Us
      </motion.button>

</motion.div>

</div>

</section>
  )

}


// HeroTwo Component
const HeroTwo =  () => {

  return (
    <section className='h-screen md:h-[100vh] w-full bgTwo'>



<div className='w-full flex items-center justify-center h-full pt-[100px]'>

<motion.div
  initial="initial"
  whileInView="enter"
  exit="exit"
variants={containerVariants}
viewport={{ once: false, amount: 0.2 }}

className='flex flex-col items-center justify-center text-center gap-5 w-full md:max-w-[800px] h-full pb-10'>
  <motion.h1
  variants={itemVariants} className='md:text-5xl text-3xl text-white proza font-semibold md:leading-[70px]'>Driving Excellence in the delivery of <span className='bg-orange-700 rounded-md px-2'>Exceptional </span>
   value in the Oil & Gas Industry</motion.h1>

     <motion.p
       variants={itemVariants}
     className='text-[#F8FCFC] text-xl'>At Dover Engineering Limited we leverage the power of integrated engineering technology, teamwork, adaptability, integrity, safety and environment to unlock 
      innovative and efficient solutions through strategic engineering approaches.</motion.p>

      <motion.button
        variants={itemVariants}
        className='border border-[#F8FCFC] bg-transparent text-[#F8FCFC] px-4 py-2 md:w-[256px] md:h-[54px]'>
        Learn More About Us
      </motion.button>

</motion.div>

</div>

</section>
  )

}

//HeroThree Componenet
const HeroThree =  () => {

  return (
    <section className='h-screen md:h-[100vh] w-full bgThree'>



<div className='w-full flex items-center justify-center h-full pt-[100px]'>


<motion.div
  initial="initial"
  whileInView="enter"
  exit="exit"
variants={containerVariants}
viewport={{ once: false, amount: 0.2 }}

className='flex flex-col items-center justify-center text-center gap-5 w-full md:max-w-[800px] h-full pb-10'>
  <motion.h1
  variants={itemVariants} className='md:text-5xl text-3xl text-white proza font-semibold md:leading-[70px]'>Driving Excellence in the delivery of <span className='bg-orange-700 rounded-md px-2'>Exceptional </span>
   value in the Oil & Gas Industry</motion.h1>

     <motion.p
       variants={itemVariants}
     className='text-[#F8FCFC] text-xl'>At Dover Engineering Limited we leverage the power of integrated engineering technology, teamwork, adaptability, integrity, safety and environment to unlock 
      innovative and efficient solutions through strategic engineering approaches.</motion.p>

      <motion.button
        variants={itemVariants}
        className='border border-[#F8FCFC] bg-transparent text-[#F8FCFC] px-4 py-2 md:w-[256px] md:h-[54px]'>
        Learn More About Us
      </motion.button>

</motion.div>

</div>

</section>
  )

}