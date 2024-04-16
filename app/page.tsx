import Navbar from "./modules/components/navbar";
import { motion } from "framer-motion"
import React from "react";
export default function Home() {
//<ParticlesComponent id="particles" />
/* <motion.div
          animate={{ opacity: 1 }}
          variants={{
            hidden: { opacity: 0,y:75 }, 
            visible: { opacity: 1 ,y:0},
          }}
        /> */
  return (
    <>
        <div className=""> 
         
          <Navbar/>
         

        </div> 
    </>
  );
}
