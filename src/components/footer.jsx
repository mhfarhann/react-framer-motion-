import React from "react";
import Circletext from "../assets/circletext";
import { motion, useScroll, useTransform } from "framer-motion";
import Arrowup from "../assets/arrowup";
import noise from '../assets/noise.png'
import Marque from './marque'
import Footerbutton from "../assets/footerbutton";

const Footer = () => {

  const handleClick = () => {
    console.log("Touch")
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  const variants = {
    hidden: {
      x:0
    },
    visible: {
      backgroundColor: ["#000", "#09F",],
      transition:{
        delay:1,
        duration: 2,
      }
    }
  }

  return (
    <motion.div 
    style={{ backgroundImage: `url(${noise})` }}
    className="bg-pewter-50  sm:h-1/2  flex sm:flex-row flex-col justify-between overflow-hidden border-t-[1px] border-black border-solid">
   
  <div className="sm:w-1/2 h-full relative   border-r-[1px] border-black border-solid">
    <button
    onClick={handleClick}
    title='Scroll to Top'
    className=" hover:bg-black group m-10 rounded-full h-20 w-20 items-center flex justify-center border-4 border-black">
    <svg
    xmlns="http://www.w3.org/2000/svg" 
    stroke="#000"
    className="sm:w-10 sm:h-20 w-8 h-10 sm:m-2 group-hover:stroke-pewter-50"
    viewBox="0 0 21.73 27.515"
  >
    <g
      fill="none"
      strokeWidth="2"
      data-name="arrow up"
      transform="rotate(-90 -47.818 1810.333)"
    >
      <path
        d="M26 0L0 0"
        data-name="Linie 20"
        transform="translate(1735 1869)"
      ></path>
      <path
        d="M1751 1858.188s.316 8.58 11.313 10.843"
        data-name="Pfad 2"
      ></path>
      <path
        d="M1751 1879.844s.316-8.58 11.313-10.843"
        data-name="Pfad 3"
      ></path>
    </g>
  </svg>
    </button>

  <ul className="border-t-[1px] border-black border-solid 
     text-black font-hanson sm:absolute bottom-16 w-full flex 
       justify-between ">
        <Footerbutton text={'INSTAGRAM'}/>
        <Footerbutton text={'FACEBOOK'}/>
        <Footerbutton text={'TWITTER'}/>
       
  </ul>


      

    <div className="sm:absolute bottom-0 w-full bg-orange-400 ">
    <Marque />
   </div>

 
  </div>
  <div className="  sm:w-1/2 sm:h-screen h-[200px]   ">
    <div className="sm:h-screen flex w-full sm:flex sm:justify-center overflow-hidden bottom-0  ">
     <Circletext/>
    </div>
     
   </div>
   
    </motion.div>
  );
};

export default Footer;
