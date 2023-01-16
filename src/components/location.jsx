import React from 'react'
import checkpattern from '../assets/checkpattern.svg'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import noise from '../assets/noise.png'

function Location() {
    const scrollRef = useRef(null)
  return (
    <motion.div  className='h-auto  '>
    <div useRef={scrollRef}  style={{ backgroundImage: `url(${noise})` }} className='bg-pewter-50'>
        <div 
        style={{backgroundImage: `url(${checkpattern})`}}
        className=' mb-4 bg-no-repeat bg-cover h-20  '>
        {/* <motion.div
          initial={{opacity: 0, y:-200}}
          whileInView={{opacity: 1 ,y:0}}
          viewport={{root: scrollRef}}
          transition={{
            duration:1,
            ease: 'easeInOut',
          }}
          className='font-hanson text-weee-400 flex justify-center h-20  sm:text-6xl text-5xl pt-3 font-bold'
          >LOCATION</motion.div> */}
        </div >
        <div className='  justify-center flex h-full  '>
          <iframe className=' h-[350px] w-screen sm:h-[500px]  grayscale ' 
          src="https://maps.google.com/maps?q=pasar%20imogiri&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
        </div>
    </div>

  </motion.div>
  )
}

export default Location