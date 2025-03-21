import React from 'react'
import { clientData } from '../../Constants/data/client'
import Slider from 'react-slick'

const Clients = () => {

  var settings = {
    dots: true,
    infinite: true,
    loop: true,
    speed: 500,
    slidesToShow: 4.9,
    slidesToScroll: 1,
    autoplay: true, // ✅ Fixed
    autoplaySpeed: 2000,
    swipeToSlide: true, // ✅ Fixed
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 4, slidesToScroll: 2 } }
    ]
  };
  
  return (
    <section className='min-h-[300px] flex flex-col md:flex-row gap-15 md:gap-3 items-center justify-center
     overflow-hidden '>

    <div className='flex justify-center md:justify-start lg:ml-[100px]'>
        <h1 className='text-[#013440] text-2xl md:text-[33px] md:leading-[42px] lg:text-5xl lg:leading-[57px] 
         font-semibold md:w-[243px] lg:w-[303px] gap-2'>Our  
     <span className='text-[#F05323] pl-1'>Clients</span></h1>
    </div>

    <div className='w-[575px] md:max-w-[788px] md:w-full overflow-hidden '>
    <Slider  {...settings}>
      {
        clientData.map((c) => (
          <div key={c.id}
          className='md:mx-26 w-[70px]'>
<img src={c.image} alt=''
className='md:max-w-[109px] w-[70px] md:w-full h-[90px]'  />

            </div>
        ))
      }
       </Slider>
    </div>

 </section>
  )
}

export default Clients