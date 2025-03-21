import React from 'react'
import { serviceData } from '../../Constants/data/service'
import Slider from 'react-slick'

const Service = () => {

  const settings = {
    dots: false,
    loop: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay:true,
    autoplaySpeed:2000,
    swipeToSlide:true,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplaySpeed: 2000
        }
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
                autoplaySpeed: 2000
        }
      },
      {
        breakpoint: 450, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
                autoplaySpeed: 2000
        }
      },
    ]
  };

  return (
    <section className='w-full p-5 md:p-0  overflow-hidden'>


        <div className='max-w-full  space-x-3 flex py-3'>
        <Slider  className='flex gap-3 w-full'  {...settings}>
            {
                         serviceData.map((s) => (                      
                              <div key={s.id}
                className='lg:w-[427px] lg:h-[550px] p-4 shadow-lg flex flex-col gap-6 rounded-[15px]'>
                                  <div className=''>
                                      <img src={s.image}  alt=''
                                      className='md:max-w-[377px] md:h-[270px] h-fuul rounded-lg'  />
                                  </div>
              
                                  <h1 className='text-[#013440] md:text-[22px] py-1 font-bold'>{s.title}</h1>
                                  <p className='text-[#013440] text-sm py-1 leading-[30px]'>{s.description}</p>

                                  <h1 className='text-[#013440] text-base font-bold'>Learn more</h1>
              
                                  </div>
                                 
                          ))
            }
             </Slider>
            </div>
              


    </section>
  )
}

export default Service