import React from 'react'
import Arrow from './arrow'

function Footerbutton(props) {

  return (
         
    <a href="#_" class="relative inline-flex items-center justify-center border-l-[1px] border-black border-solid h-20 w-full overflow-hidden transition duration-300 ease-out group">
    <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
        <Arrow stroke={"#F1F1F1"}/>
    </span>
    <span class="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">{props.text}</span>
    </a>
          
  )
}

export default Footerbutton

