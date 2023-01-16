import React from 'react'
import {useState} from 'react'
import { motion } from "framer-motion"

const Hamburger = ({handleOpen}) => {
    const [open, setOpen] = useState(false)
    const [animation, setAnimation] = useState('closed');

    const handleClick = () => {
    setOpen(!open)
    setAnimation('moving');
    handleOpen(!open)
    setTimeout(() => {
    setAnimation(animation === 'closed' ? 'open' : 'closed');
    }, 200);
    }

    const path01Variants = {
        open: { d: 'M3.06061 2.99999L21.0606 21' },
        closed: { d: 'M0 9.5L24 9.5' },
    }
    
    const path02Variants = {
        open: { d: 'M3.00006 21.0607L21 3.06064' },
        moving: { d: 'M0 14.5L24 14.5' },
        closed: { d: 'M0 14.5L15 14.5' },
    }

    return (
    <>
       <button onClick={handleClick}>
        <svg className='h-6 w-6  fill-white' viewBox='0 0 24 24'>
          <motion.path
            stroke='#000000'
            animate={animation}
            variants={path01Variants}
          />
          <motion.path
            stroke='#000000'
            animate={animation}
            variants={path02Variants}
          />
        </svg>
      </button>
    </>
  )
}

export default Hamburger