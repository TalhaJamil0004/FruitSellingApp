import React from "react";
import BannerImg from "../../assets/fruit-plate2.png" 
import { motion } from "framer-motion";
import { FadeUp } from "../../utility/animation";
const Banner2 = () => {
  return <section className="">
    <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-24">
 
    <div className="flex flex-col justify-center">
      <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
        <motion.h1 
        variants={FadeUp(0.5)}
        initial="hidden"
        animate="visible"
        viewport={{once:true}}
        className="text-3xl lg:text-6xl font-bold uppercase">Our Aim</motion.h1>
        <motion.p 
          variants={FadeUp(0.7)}
          initial="hidden"
          animate="visible"
          viewport={{once:true}}
        > "Fresh Fruit Selling App" offers a convenient way to buy
         a wide variety of fresh fruits directly from local farms. </motion.p>
        <motion.p   variants={FadeUp(0.9)}
        initial="hidden"
        animate="visible"
        viewport={{once:true}}> Enjoy quick delivery, seasonal deals, and the best quality produce right to your doorstep.
         Shop easily, stay healthy, and support local farmers with every purchase!</motion.p>
      </div>
      <motion.div
                  variants={FadeUp(1.1)}
                  initial="hidden"
                  animate="visible"
                 className='flex justify-center md:justify-start my-5' >
                    <button className='primary-btn'>
                       Learn More</button>
                 </motion.div>
    </div>
    <div className="flex justify-center items-center">
      <motion.img src={BannerImg} alt=""
      initial={{opacity:0 , x:200, rotate:75}}
      whileInView={{opacity:1, x:0, rotate:0}}
      transition={{ delay:0.2 , duration:1 }}
      viewport={{once:true}}
      className="w-[300px] md:max-w-[400px] h-full object-cover drop-shadow"></motion.img>
    </div>
    </div>
  </section>;
};

export default Banner2;
