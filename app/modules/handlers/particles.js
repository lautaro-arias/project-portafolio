'use client'
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useMemo } from "react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

const ParticlesComponent = (props) => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      //await loadBasic(engine);
    })
  const options = useMemo(
    () => ({
      particles: {
        color: {
          value: "#16D4E7",
        },
        links: {
          color: "#FFFFFF",
          distance: 170,
          enable: true,
          opacity: 0.6,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 0.4,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 65,
        },
        opacity: {
          value: 1,
          random: true,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 0.8, max:1.1 },
        },
        
      },
      detectRetina: true,

    }),
    [],
  );


  return <Particles id={props.id}   options={options} />; 
};

export default ParticlesComponent;