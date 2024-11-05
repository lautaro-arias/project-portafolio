import React from 'react';
import Link from 'next/link';
import 'animate.css';

const DescargaCv = () => {
  return (
    <>
      <section className=" py-12  animate__animated animate__fadeIn animate__delay-900ms animate__slower  text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-cyan-200 via-cyan-400 to-sky-300 bg-clip-text text-3xl font-extrabold text-transparent xs:text-5xl sm:text-7xl" style={{ textShadow: '2px 3px 6px rgba(255, 255, 255, 0.5)' }}>
              Lautaro Arias
            </h1>
            <h1
              className="bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 bg-clip-text text-xl lg:text-3xl font-extrabold text-transparent"
            >
              Desarrollador Front-End
            </h1>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="https://drive.google.com/file/d/1AYAA760MLcqgRnhJHNI8VheOAo_mG1Hb/view?usp=sharing" target="_blank" className="border-black  hover:bg-transparent hover:border hover:border-cyan-300 hover:text-cyan-400  flex justify-center   mt-2 text-white h-12 w-60 bg-cyan-600 border-0 py-2  focus:outline-none hover:bg-cyan-500 rounded-xl text-lg">
                Mi CV
                <svg xmlns="http://www.w3.org/2000/svg" className=" ms-2 h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default DescargaCv;
