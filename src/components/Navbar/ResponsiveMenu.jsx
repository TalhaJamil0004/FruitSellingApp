import React from 'react'
import {motion, AnimatePresence} from "framer-motion"
const Responsivemenu =({open}) => {
  return (
    <div>
      <AnimatePresence mode='wait'>
        {
            open && (
                <motion.div 
                initial={{opacity:0,y:-100}}
                animate={{opacity:1, y:0}}
                exit={{opacity:0 , y:-100}}
                transition={{duration:0.3}}
                className='absolute top-10 left-0  w-full h-screen z-20'>
                    <div className='bg-primary text-white font-semibold py-10 m-6 rounded-3xl'>
                        <ul className=' flex flex-col items-center gap-8'>
                            <li>Home</li>
                            <li>Products</li>
                            <li>About</li>
                            <li>Shop</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </motion.div>
               
            )
        }
        
      </AnimatePresence>
    </div>
  )
} 

export default Responsivemenu
