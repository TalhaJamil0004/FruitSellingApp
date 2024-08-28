import React from "react";
import BannerImg from "../../assets/fruits-splash.png" 
import { motion } from "framer-motion";
import { FadeUp } from "../../utility/animation";
const Banner = (props) => {
  return <section className={props.Off?"bg-secondary/30":"bg-secondary/10"}>
    <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
      <div className="flex justify-center items-center">
      <motion.img src={BannerImg} alt=""
      initial={{opacity:0 , scale:0.5}}
      animate={{opacity:1, scale:1}}
      transition={{type:"spring" ,stiffness:100, delay:0.2 , duration:3 }}
      className="w-[300px] md:max-w-[400px] h-full object-cover drop-shadow"></motion.img>
    </div>
    <div className="flex flex-col justify-center">
      <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
        <motion.h1 
        variants={FadeUp(0.5)}
        initial="hidden"
        animate="visible"
        viewport={{once:true}}
        className="text-3xl lg:text-6xl font-bold uppercase">Brand Info</motion.h1>
        <motion.p 
          variants={FadeUp(0.7)}
          initial="hidden"
          animate="visible"
          viewport={{once:true}}
        > Where quality meets freshness. We handpick
           the finest fruits, delivering nature's best to your doorstep.
            Taste the difference with every bite!</motion.p>
        <motion.p   variants={FadeUp(0.9)}
        initial="hidden"
        animate="visible"
        viewport={{once:true}}> every bite is a burst of nature's goodness.
           Handpicked fruits delivered fresh, right to your doorstep</motion.p>
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
    </div>
  </section>;
};

export default Banner;
