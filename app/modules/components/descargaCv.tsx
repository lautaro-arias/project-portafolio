import React from 'react';
import 'animate.css';
import Sobremi from './sobremi';

const DescargaCv = () => {
  return (
    <>
      <section  className=" animate__animated animate__fadeIn animate__delay-900ms animate__slower  text-white">
        <div id='yo' className="mx-auto max-w-screen-xl px-4  lg:flex lg:h-94 py-20 lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <div className="avatar mb-2">
              <div className="w-24 rounded-full ring ring-offset-2 ring-white">
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </div>
            </div>
            <h1 className="bg-gradient-to-r backdrop-blur-2xl from-gray-100 via-gray-400 to-gray-600 bg-clip-text text-3xl font-extrabold text-transparent xs:text-5xl sm:text-7xl" style={{ textShadow: '2px 3px 6px rgba(255, 255, 255, 0.5)' }}>
              Lautaro Arias
            </h1>
            <h1
              className="bg-gradient-to-r backdrop-blur-2xl from-gray-100 via-gray-300 to-gray-700 bg-clip-text text-xl lg:text-3xl font-extrabold text-transparent"
            >
              Desarrollador Front-End
            </h1>
          </div>
        </div>
        <Sobremi />

      </section>

    </>
  )
}
export default DescargaCv;
