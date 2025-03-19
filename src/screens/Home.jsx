import React, { useState } from 'react'
import HomeIndex from '../Components/home'
import Meta from '../Common/Meta'
import SmoothScroll from '../Constants/utility/SmoothScroll'
import SideHeader from '../Common/SideHeader'

const Home = () => {
const [menu , setMenu]  = useState(false)

  return (
<>

<Meta  />
<SmoothScroll>
    <SideHeader  menu={menu}   setMenu={setMenu} />

<HomeIndex  />
</SmoothScroll>

</>
  )
}

export default Home