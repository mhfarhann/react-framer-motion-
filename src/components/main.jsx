import React from 'react'
import { AnimatePresence, motion } from "framer-motion"
import foto from '../assets/6.png'
import burger from '../assets/burger.jpg'
import Navbar from './navbar'
import Marque from './marque'
import Content from './content'
import Footer from './footer'
import { useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Location from './location'

function Main() {
const [open , setOpen] = useState()

  const openNavbar = (value) => {
    setOpen(value)
  }

  const imageVariant = {
    hidden: { opacity: 0},
    visible: { 
    opacity: 1 ,
    transition:{
      duration: 3,
      ease: 'easeInOut',
      type: "spring",
      stiffness: 100}
  },
    exit:{ opacity: 0 },
    
  }

  return (
  <>
  <AnimatePresence>
  <div className='h-screen bg-black '  key='container'>
   <Navbar openNavbar={openNavbar} />

   {!open && <motion.div 
     variants={imageVariant}
     initial={'hidden'}
     viewport={{once:false, amount:1}}
     animate={'visible'}
    key='image' className='h-2/3  bg-center bg-no-repeat bg-cover overflow-hidden font-hanson font-extrabold sm:text-6xl text-4xl italic text-weee-500 p-2'
    style={{backgroundImage: `url(${foto})`}}> 
    <Typewriter words={['PURSUIT ➔']} loop={false}/>
    <br/>
    <Typewriter words={['OF HAPPINESS']}/>
    </motion.div>}

    <Marque open={open}/>
    <Content/>
    {/* <Location/> */}
    <Footer/>
  </div>
  
  </AnimatePresence>
  
  </>
  )
}

export default Main