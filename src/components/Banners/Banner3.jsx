import React from "react";
import BannerImg from "../../assets/banner-bg.jpg"
import { FadeLeft } from "../../utility/animation";
import {motion} from "framer-motion"
const bgStyle={
  backgroundImage: `url(${BannerImg})`,
  backgroundPosition: "center",
  backgroundSize:"cover",
  backgroundRepeat:"no-repeat",
  height: "100%",
  width:"90%"
}
const Banner3 = (props) => {
  return <section className="">
    <div style={bgStyle} className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl">
      <div > 
      </div>
    <div className="flex flex-col justify-center">
      <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
        <motion.h1 
        variants={FadeLeft(0.5)}
        initial="hidden"
        animate="visible"
        viewport={{once:true}}
        style={props.Off?{color:"black"}:{color:"black"}}
        className="text-3xl lg:text-6xl font-bold uppercase">Brand Info</motion.h1>
        <motion.p 
          variants={FadeLeft(0.7)}
          initial="hidden"
          animate="visible"
          viewport={{once:true}}
          style={props.Off?{color:"black"}:{color:"black"}}
          className="font-semibold md:font-normal "
        > Where quality meets freshness. We handpick
           the finest fruits, delivering nature's best to your doorstep.
            Taste the difference with every bite!</motion.p>
       
      </div>
      <motion.div
                  variants={FadeLeft(0.9)}
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

export default Banner3;
