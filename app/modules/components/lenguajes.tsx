import React from 'react';
import LenguajesIcons from '../utils/arrayLenguajes';
import 'animate.css';

const Lenguajes = () => {
  const { svgs } = LenguajesIcons()
  return (
    <>
      <section className="scrollCard body-font animate__animated animate__fadeIn animate__delay-900ms animate__slower ">
        <div className="container px-5  pt-10 md:pt-2  lg:pb-20 mx-auto text-start ">
          <h1 className="text-start text-xl  sm:text-5xl-medium title-font pb-2 text-cyan-600  ">Conocimientos</h1>
          <div className='text-start mb-10  max-w-sm border border-white'></div>
          <div className="  text-start mx-auto  w-full  grid grid-cols-2 xs:grid-cols-3 gap-8  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-10 ">
            {svgs.map((item, index) => (
              <div key={index} className="sm:ml-12 xl:ml-0  hover:w-22 mx-auto  bg-black  w-10 h-10  flex  items-center justify-center rounded-full ">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
export default Lenguajes;