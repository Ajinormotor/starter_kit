import React from 'react'
import { achievementData } from '../../Constants/data/achievement'

const Achievements = () => {
  return (
 <section className='flex flex-col md:flex-row justify-center gap-8
  md:gap-13 min-h-[300px] py-15 p-5'>

    <div className='flex justify-center md:justify-start'>
        <h1 className='text-[#013440] text-2xl md:text-[33px] md:leading-[42px] lg:text-5xl lg:leading-[57px] 
         font-semibold md:w-[243px] lg:w-[303px] gap-2'>Our  
     <span className='text-[#F05323] pl-1'>Major Achievements</span></h1>
    </div>

{/* medium screen upward */}
    <div className=' hidden md:flex flex-col gap-5'>
      {
         achievementData.map((a) => (
            <div key={a.id}
            className='flex gap-3 items-center  bg-[#013440] rounded-[20px] 
            min-h-[293px] md:w-[383px] lg:w-[763px] w-full px-4 relative'>
               <h1 className='text-white max-w-[506px] w-full
               text-xl md:leading-[40px]'>{a.title}</h1>
         
               <img src={a.image} alt=''
         className='max-w-full lg:h-[289px]  absolute right-0'  />
               
      
            </div>
         )) 
      }
    </div>


    {/* smaller screen */}

    <div className='flex flex-col gap-7 md:hidden'>
      {
         achievementData.map((a) => (
            <div key={a.id}  
            className='flex gap-3 items-center  bg-[#013440] rounded-[20px] w-full h-[318px]
            p-2'
            style={{ backgroundImage: a.image}}>
               <h1 className='text-base leading-[33px] text-white'>{a.title}</h1>

               </div>

         ))
      }

    </div>

 </section>
  )
}

export default Achievements