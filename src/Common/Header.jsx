import React from 'react'

const navlink = [

{
  title:'Home'
},

{
  title:'About Us', icon: 'ri-arrow-down-s-line'
},

{
  title:'What We Do', icon: 'ri-arrow-down-s-line'
},

{
  title:'Careers'
},

{
  title:'Major Projects'
},

{
  title:'Contact'
},

]

const Header = () => {
  return (
<section className='h-[86px] flex items-center justify-between p-2 lg:px-10 shadow-sm'>

<div className='w-[56px] h-[56px]'>
  <img src='https://doverengineering.com/wp-content/uploads/2023/12/dover-logo-big-white.webp'
  alt=""
  className='w-full h-full'
  />
</div>


<div className='hidden md:flex items-center justify-center md:gap-4 lg:gap-10 pr-5'>
<div className='flex gap-5'>
  {
    navlink.map((n,index) => (
      <div key={index} className='text-white'>
<h1>{n?.title}</h1>
<i className={`ri-${n?.icon}`}></i>
      </div>
    ))
  }

</div>

<div className='md:h-[36px] md:w-[36px] flex items-center bg-white
 justify-center rounded-sm'>
<i className="ri-linkedin-fill text-[18px]"></i>
</div>

</div>

<div className='block md:hidden rotate-180'>
<i className="ri-menu-2-line text-5xl  text-white"></i>
</div>


</section>
  )
}

export default Header