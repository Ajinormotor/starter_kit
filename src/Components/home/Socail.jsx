import React from 'react'
import { socialsData } from '../../Constants/data/socials'

const Socail = () => {
  return (
<section className='w-full flex flex-col items-center justify-center gap-5  min-h-[400px] py-5'>

<div className='flex justify-center items-center w-[264px] md:w-full text-center'>
        <h1 className='text-[#013440] text-2xl md:text-[33px] md:leading-[4px] lg:text-5xl lg:leading-[57px] 
         font-bold gap-2'>Our  Corporate
     <span className='text-[#F05323] pl-1'>Social Responsibilities</span></h1>
    </div>


    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full justify-items-center p-5'>
        {
            socialsData.map((s) => (
                <div key={s.id}
  className='lg:w-[370px] p-4 shadow-lg flex flex-col gap-3 rounded-[15px]'>
                    <div className=''>
                        <img src={s.image}  alt=''
                        className='md:max-w-[327px] md:h-[270px] h-fuul rounded-lg'  />
                    </div>

                    <h1 className='text-[#013440] md:text-[22px]  font-bold'>{s.title}</h1>
                    <p className='text-[#013440] text-sm leading-[30px]'>{s.description}</p>

                    </div>
            ))
        }
    </div>

</section>
  )
}

export default Socail