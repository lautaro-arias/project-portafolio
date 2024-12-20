'use client'
import React from 'react';
import arrayLinks from '../utils/arrayLinks';

const Contacto = () => {
      const { links } = arrayLinks()

      /// funcion copi
      const email = "lautarog.arias2001@gmail.com";
      const copyText = () => {
            navigator.clipboard.writeText(email)
      };
      //
      return (
            <section id="contacto" className="text-gray-400 body-font relative w-screen bg-transparent mt-10  ">
                  <div className="container px-5  py-8 mx-auto ">
                        <div className="flex flex-col text-center w-full mb-12">
                              <h1 className="text-start bg-gradient-to-r   text-xl  sm:text-xl-medium  pb-2 from-gray-500 via-gray-600 to-gray-700 bg-clip-text font-extrabold text-transparent " style={{ textShadow: '2px 3px 4px rgba(255, 255, 255, 0.5)' }}>
                                    Contactame
                              </h1>
                              <div className='text-start mb-5  max-w-sm border border-gray-600'></div>
                              <p className='lg:w-2/3 text-start leading-relaxed text-gray-950 text-lg l'>Muchas gracias por llegar hasta aqui,
                                    si necesitas una persona responsable y capaz de cumplir cada tarea no dudes en contactarme.
                              </p>
                              <div className="flex justify-start mt-6">
                                    {links.map((item, index) => (
                                          <div className="flex me-2" key={index}>
                                                {item}
                                          </div>

                                    ))}
                              </div>
                              <div className=' flex text-start mt-8'>
                                    <a className="  text-lg text-gray-950 font-extrabold " id="emailLink" href={`mailto:${email}`}>{email}</a>
                                    <button className='tooltip tooltip-right' data-tip="Copiar">
                                          <svg onClick={copyText} className=" hover:text-cyan-300 ml-2 cursor-pointer w-7 h-7 tooltip  " data-tip="Copiar" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                                          </svg>
                                    </button>
                              </div>
                        </div>
                  </div>
            </section>

      )
}
export default Contacto;