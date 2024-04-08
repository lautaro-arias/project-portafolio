'use client'
import { useState } from 'react';
import Navbar from "./modules/components/navbar";
import ParticlesComponent from "./modules/handlers/particles";
import 'animate.css';

export default function Home() {
  const [time, setTime] = useState(false);

  setTimeout(() => {
    setTime(true);
  }, 2000);
//<ParticlesComponent id="particles" />
  return (
    <>
      <ParticlesComponent id="particles" />
      {time ?
        <div className="animate__animated animate__fadeIn animate__delay-900ms animate__slower"> 
          <Navbar/>
        </div> 
      : null}
        
    </>
  );
}
