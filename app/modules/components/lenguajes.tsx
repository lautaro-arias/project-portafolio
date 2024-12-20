import React from 'react';
import LenguajesIcons from '../utils/arrayLenguajes';
import 'animate.css';

const Lenguajes = () => {
  const { svgs } = LenguajesIcons()
  return (
    <>
      <section id='conocimientos' className="py-8 scrollCard body-font animate__animated animate__fadeIn animate__delay-900ms animate__slower ">
        <div className="container px-5  pt-10 md:pt-2  lg:pb-20 mx-auto text-start ">
        <h1 className="pt-8 bg-gradient-to-r backdrop-blur-2xl  text-xl  sm:text-xl-medium  pb-2 from-gray-500 via-gray-600 to-gray-700 bg-clip-text font-extrabold text-transparent " style={{ textShadow: '2px 3px 4px rgba(255, 255, 255, 0.5)' }}>
          Conocimientos
            </h1>
          <div className='text-start mb-10  max-w-sm border border-gray-600'></div>
          <div className="  text-start mx-auto  w-full  grid grid-cols-2 xs:grid-cols-3 gap-8  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-10 ">
            {svgs.map((item, index) => (
              <div key={index} className="sm:ml-12 xl:ml-0  hover:w-22 mx-auto  bg-gray-100  w-10 h-10  flex  items-center justify-center rounded-full ">
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