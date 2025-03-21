import React from 'react'
import Hero from './Hero'
import Achievements from './Achievements'
import Clients from './Clients'
import Footer from '../../Common/Footer'
import Socail from './Socail'
import Service from './Service'

const HomeIndex = () => {
  return (
<div className=' md:max-w-[1280px] w-full flex flex-col items-center justify-center oveflow-x-hidden'>
<Hero  />
<Achievements  />
<Clients />
<Service  />
<Socail  />
<Footer />
</div>
  )
}

export default HomeIndex