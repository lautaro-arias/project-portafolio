import Navbar from "./modules/components/navbar";
//import ParticlesComponent from "./modules/handlers/particles";
//import 'animate.css';
//animate__animated animate__fadeIn animate__delay-900ms animate__slower
import { motion } from "framer-motion"

export default function Home() {

//<ParticlesComponent id="particles" />
  return (
    <>
        <div className=""> 
        <motion.div
      
      > 
          <Navbar/>
        </motion.div> 

        </div> 
    </>
  );
}
