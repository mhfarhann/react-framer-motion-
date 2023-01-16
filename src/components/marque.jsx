import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import noise from "../assets/noise.png";
import Arrowup from "../assets/arrowup";

const Marque = ({ open }) => {

  const variants = {
    hidden: {
       opacity: 0,
       y: 100 
    },
    visible: {
       opacity: 1,
       y: 0,
       transition:{
        duration: 1,
        ease: "easeInOut",
      },
      exit:{ 
        opacity: 0
       } 
    }
  }
  
  return (
    <AnimatePresence>
      {!open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          <Marquee
            key="marquee"
            gradient={false}
            style={{ backgroundImage: `url(${noise})` }}
            className="font-hanson sm:text-4xl border-t-[1px] border-black border-solid text-2xl sm:h-16 h-14 font-extrabold overflow-hidden bg-black tracking-wide "
          >
             <motion.p
              variants={variants}
              initial='hidden'
              animate='visible'
              className="mr-6 text-pewter-50 inline-flex white-space-nowrap items-center "
              key="word"
            >
              EXPERIENCE
              <p className="rotate-90   sm:ml-10 sm:mr-10  ml-6  ">
              <Arrowup/>
              </p>
            </motion.p>
            <motion.p
              variants={variants}
              initial='hidden'
              animate='visible'
              className="mr-6 text-pewter-50 inline-flex white-space-nowrap items-center "
              key="word"
            >
              EXPERIENCE
              <p className="rotate-90   sm:ml-10 sm:mr-10  ml-6  ">
              <Arrowup/>
              </p>
            </motion.p>
            <motion.p
              variants={variants}
              initial='hidden'
              animate='visible'
              className="mr-6 text-pewter-50 inline-flex white-space-nowrap items-center "
              key="word"
            >
              EXPERIENCE
              <p className="rotate-90   sm:ml-10 sm:mr-10  ml-6  ">
              <Arrowup/>
              </p>
            </motion.p>
            <motion.p
              variants={variants}
              initial='hidden'
              animate='visible'
              className="mr-6 text-pewter-50 inline-flex white-space-nowrap items-center "
              key="word"
            >
              EXPERIENCE
              <p className="rotate-90   sm:ml-10 sm:mr-10  ml-6  ">
              <Arrowup/>
              </p>
            </motion.p>
            <motion.p
              variants={variants}
              initial='hidden'
              animate='visible'
              className="mr-6 text-pewter-50 inline-flex white-space-nowrap items-center "
              key="word"
            >
              EXPERIENCE
              <p className="rotate-90   sm:ml-10 sm:mr-10  ml-6  ">
              <Arrowup/>
              </p>
            </motion.p>
            <motion.p
              variants={variants}
              initial='hidden'
              animate='visible'
              className="mr-6 text-pewter-50 inline-flex white-space-nowrap items-center "
              key="word"
            >
              EXPERIENCE
              <p className="rotate-90   sm:ml-10 sm:mr-10  ml-6  ">
              <Arrowup/>
              </p>
            </motion.p>
            <motion.p
              variants={variants}
              initial='hidden'
              animate='visible'
              className="mr-6 text-pewter-50 inline-flex white-space-nowrap items-center "
              key="word"
            >
              EXPERIENCE
              <p className="rotate-90   sm:ml-10 sm:mr-10  ml-6  ">
              <Arrowup/>
              </p>
            </motion.p>
            
          </Marquee>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Marque;
