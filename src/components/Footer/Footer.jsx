import React from "react";
import { FaFacebook, FaInstagram, FaTwitter ,FaTwitch , FaLeaf} from "react-icons/fa";
import { motion } from "framer-motion";
import { FadeRight } from "../../utility/animation";
const Footer = (props) => {
  return < motion.div 
  variants={FadeRight(0.4)}
  initial="hidden"
  whileInView="visible"
  viewport={{once:true}}
 
  className={props.Off?"container bg-primary/30 mt-4 h-28 flex flex-col justify-center":"container bg-primary/10 mt-4 h-28 flex flex-col justify-center"}>
   <div className="flex justify-between">
        
        <div className="text-2xl flex items-center gap-2 font-bold uppercase">
          <p className="text-primary">Fruit</p>
          <p className="text-secondary">Store</p>
          <FaLeaf className="text-green-500" />
        </div>
        

        <div className="text-3xl flex gap-8">
          <FaFacebook/>
          <FaTwitch/>
          <FaTwitter/>
          <FaInstagram/>
        </div>
   </div>
  </motion.div>
  
}

export default Footer;
