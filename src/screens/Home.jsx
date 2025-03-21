import React, { useState } from 'react'
import HomeIndex from '../Components/home'
import Meta from '../Common/Meta'
import SmoothScroll from '../Constants/utility/SmoothScroll'
import SideHeader from '../Common/SideHeader'

const Home = () => {
const [menu , setMenu]  = useState(false)

  return (
<div className='max-w-full flex flex-col overflow-hidden items-center justify-center'>

<Meta  />
<SmoothScroll>
    <SideHeader  menu={menu}   setMenu={setMenu} />

<HomeIndex  />
</SmoothScroll>

</div>
  )
}

export default Home