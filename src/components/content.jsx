import { AnimatePresence, motion,useScroll,useTransform,} from "framer-motion";
import { useRef } from "react";
import React from "react";
import burger from "../assets/10.png";
import foto from "../assets/8.png";
import checkpattern from "../assets/checkpattern.svg";
import Marquee from "react-fast-marquee";
import noise from '../assets/noise.png'

const Content = () => {
  const scrollRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], ["0%", "50%"]);

  const animateImage = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },

    exit: { opacity: 0 },
  };

  return (
    <AnimatePresence>
      <motion.div 
      style={{ backgroundImage: `url(${noise})` }}
      className="text-pewter-100 bg-pewter-50  w-screen  h-auto sm:h-2/3 flex flex-col sm:flex-row border-t-[1px] border-black border-solid ">
        <motion.div className="sm:w-3/5  mr-0  sm:border-r-[1px] border-solid border-black relative ">
          <motion.p
            variants={animateImage}
            initial={"hidden"}
            viewport={{ once: true }}
            whileInView={"visible"}
            className=" text-pewter-100 font-hanson w-full p-4 sm:text-8xl text-5xl font-bold border-b-[1px] border-solid border-black sm:whitespace-nowrap  "
          >
          TERMINAL
           
          </motion.p>

         
         <motion.p
            variants={animateImage}
            initial={"hidden"}
            viewport={{ once: true }}
            whileInView={"visible"}
            className="flex  font-hanson  sm:text-base  p-4  text-sm  ml-0 text-wee-50  sm:absolute bottom-0 sm:border-t-[1px] border-solid border-black"
          >
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC.
          </motion.p>
          {/* <motion.button
            variants={animateImage}
            initial={"hidden"}
            viewport={{ once: true }}
            whileInView={"visible"}
            className="bg-black  text-white font-hanson mt-16 p-3 rounded-full w-full whitespace-nowrap flex justify-between  "
          >
            we make shit
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 bg-white text-black rounded-full "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </motion.button> */}

         
      
        </motion.div>

        {/* <img src={foto} className='w-[320] h-[320px]'/> */}
        <div className=" sm:bg-transparent sm:w-2/5 sm:ml-4 sm:m-4 mt-0 flex justify-between sm:relative  ">
          <motion.img
            src={burger}
            className=" h-[450px]    w-full sm:w-[650px] object-cover items-center sm:p-0  sm:absolute bottom-0 "
            variants={animateImage}
            initial={"hidden"}
            viewport={{ once: true }}
            whileInView={"visible"}
            // style={{ y: isVisible ? y : 0 }}
          />
          <motion.div
            //  variants={animateImage}
            variants={animateImage}
            initial={"hidden"}
            viewport={{ once: true }}
            whileInView={"visible"}
          className=" font-hanson text-4xl text-black [writing-mode:vertical-lr]  whitespace-nowrap sm:hidden hidden md:flex items-center sm:absolute right-0">
            KINDA WEIRD
            <svg
        width="30"
        height="53"
        viewBox="0 0 30 53"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="rotate-180 w-10 h-10 mt-20"
      >
        <path
          d="M15 53V.273c-.09 10.363-5.09 15.5-15 15.5M15 .273c.09 10.318 5.09 15.454 15 15.454"
          stroke="#000921"
          stroke-width="1.5"
        ></path>
      </svg>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Content;
