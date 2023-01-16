import React from 'react'
import logo from '../assets/2.png'
import { AnimatePresence, motion } from "framer-motion"
import { useEffect , useState} from 'react'
import burger from '../assets/burger.jpg'
import Marque from './marque'
import Hamburger from './hamburger'
import noise from "../assets/noise.png";


const Navbar = ({openNavbar}) => {
  const [open , setOpen] = useState(false)

  const navbar = [{
    id:1,
    items:"HOME",
  },{
    id:2,
    items:"CONTACT",
  },{
    id:3,
    items:"ABOUT",
  },{
    id:4,
    items:"LOCATION"
  }

]

  const handleOpen = (value) => {
    setOpen(value)
    openNavbar(value)
  }

  return (
  <>
  <AnimatePresence>
  <div key='navbar-container'
 
  // className=' sm:flex hidden  bg-stone-800 bg-opacity-10 backdrop-blur-md rounded drop-shadow-lg overflow-x-hidden'
     className='sm:flex hidden  bg-black p-2' >
      <div key='list' 
       style={{ backgroundImage: `url(${noise})`}} 
      className="sm:flex items-center mx-auto justify-center p-2 bg-pewter-50  w-screen rounded-full">
      {navbar.map((collection) => (
        
        <motion.a
        key={collection.id}
        initial={{y: collection.id % 2 === 0 ? '100px' : '-100px'}} 
        animate={{y: 0}}
        // whileHover={{ scale: 1.1 }}
        // ,delay: i * 0.3
        transition={{ ease: "easeOut" , duration: 0.4  ,delay: collection.id * 0.4}}  
        className='font-hanson px-4 py-2 mr-4 cursor-pointer ' >
        {collection.items}
       </motion.a>
      ))}
       
      </div>
  </div>

    <div 
    key='navbar'
    className={`sm:hidden  flex bg-black w-screen  p-2 `}>
      <div 
      style={{ backgroundImage: `url(${noise})` }}
      className='bg-pewter-50  w-screen justify-between flex rounded-xl p-2'>
      <Hamburger handleOpen={handleOpen}/>  
      <h1 className='text-black font-hanson text'>TERMINAL</h1>
      </div>
     {/* <img src={logo} key='logo' className='w-8 h-8 grayscale'></img> */}
   </div> 
  
   
  {open ?
    <motion.div 
    initial={{ opacity: 0 ,x:'-100vw'}}
    animate={{ opacity: 1 ,x: 0 }}
    transition={{ ease: "easeOut", duration: 1 }}
    exit={{ x:'-100vw', transition: {duration: 0.4}}}
    key='modal'
    className='bg-pewter-50  flex flex-col  w-full h-full  top-18 cursor-pointer '>

      {navbar.map( (collection) => (
        <motion.div
          initial={{x: -100, opacity: 0}}
          animate={{x: 0 ,opacity: 1}}
          transition={{ ease: "easeOut", duration: 1 ,delay: collection.id * 0.2}}
          key={collection.id} 
          exit={{ x:'-100vw', transition: {duration: 0.2}}}
         
          className=' border-b-2  font-hanson  text-medium   p-2 flex justify-between ' >
         <motion.p  whileHover={{x:5}} transition={{ duration: 0.3 }}  >{collection.items}</motion.p>
          <motion.svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 float-right">
            <motion.path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
          </motion.svg>
        </motion.div>
      ))} 
     <motion.div className='flex  w-full justify-between fixed bottom-16  h-10'>
      <motion.p className='bottom-0 p-2 text-black font-hanson '>TERMINAL</motion.p>
      <motion.p className='bottom-0 p-2 text-black font-syne font-extrabold'>YK</motion.p>
     </motion.div>
  </motion.div>
 : null} 
 
  </AnimatePresence>
  
  </>
  )
}

export default Navbar

