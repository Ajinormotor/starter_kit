
import ReactLenis from '@studio-freight/react-lenis'
import React from 'react'

const SmoothScroll = ({children}) => {
  return (
 <ReactLenis
 options={{
    duration: 3,
    easing: (t) => Math.min(1, 1.001 - Math.pow(3, -10 * t)),
  smoothWheel: true,
    smoothTouch: true,
    wheelMultiplier: 1,
    touchMultiplier: 1, //
    direction: "vertical", 
  }}
  root
 >
    {children}
 </ReactLenis>
  )
}

export default SmoothScroll
