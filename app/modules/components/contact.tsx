'use client'
import React from 'react';
import useFormPost from '../handlers/useFormEmail';

const Contacto = () => {
      const { formData,handleInputChange,handleSubmit,isOk} = useFormPost()


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
                              <div className='text-start   max-w-sm border border-gray-600'></div>
                              <section className="bg-gray-100">
                                    <div className=" max-w-screen-xl  py-2  ">
                                          <div className=" text-start grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                                                <div className="lg:col-span-2 lg:py-4">
                                                      <p className="max-w-xl text-lg">
                                                      Muchas gracias por llegar hasta aqui, si necesitas una persona responsable y capaz de cumplir cada tarea no dudes en contactarme.
                                                      </p>
                                                      <div className="mt-12">
                                                                  <a className="  text-md text-gray-950 font-extrabold " id="emailLink" href={`mailto:${email}`}>{email}</a>
                                                                  <button className='tooltip tooltip-right' data-tip="Copiar">
                                                                        <svg onClick={copyText} className=" hover:text-cyan-600 ml-2 cursor-pointer w-7 h-7 tooltip  " data-tip="Copiar" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                                                              <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                                                                        </svg>
                                                                  </button>

                                                            <address className="mt-2 not-italic">Argentina,Mendoza,General Alvear </address>
                                                      </div>
                                                </div>

                                                <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                                                      <form onSubmit={handleSubmit} method='POST' className="space-y-4">
                                                            <div>
                                                                  <label className="sr-only" htmlFor="name">Nombre</label>
                                                                  <input
                                                                        className="w-full rounded-lg text-gray-950  focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 border-gray-200 p-3 text-sm"
                                                                        placeholder="Nombre"
                                                                        onChange={handleInputChange} 
                                                                        value={formData.name} 
                                                                        maxLength={20}
                                                                        minLength={3}
                                                                        type="text"
                                                                        name='name'
                                                                        id="name"
                                                                        required 

                                                                  />
                                                            </div>

                                                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                                                  <div>
                                                                        <label className="sr-only" htmlFor="email">Correo electronico</label>
                                                                        <input
                                                                              className="w-full rounded-lg text-gray-950 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 border-gray-200 p-3 text-sm"
                                                                              placeholder="Correo electronico"
                                                                              name='email'
                                                                              type="email"
                                                                              id="email"
                                                                              onChange={handleInputChange} 
                                                                              value={formData.email} 
                                                                              minLength={15}
                                                                              maxLength={50}
                                                                              required 

                                                                        />
                                                                  </div>

                                                                  <div>
                                                                        <label className="sr-only" htmlFor="phone">Telefono</label>
                                                                        <input
                                                                              className="w-full rounded-lg text-gray-950 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 border-gray-200 p-3 text-sm"
                                                                              placeholder="Telefono"
                                                                              type="tel"
                                                                              name="phone"
                                                                              id="phone"
                                                                              onChange={handleInputChange} 
                                                                              value={formData.phone} 
                                                                              minLength={8}
                                                                              maxLength={20}
                                                                              required 
                                                                        />
                                                                  </div>
                                                            </div>


                                                            <div>
                                                                  <label className="sr-only" htmlFor="message">Mensaje</label>

                                                                  <textarea
                                                                        className="w-full rounded-lg  text-gray-950 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 border-gray-200 p-3 text-sm"
                                                                        placeholder="Mensaje"
                                                                        rows={8}
                                                                        name='message'
                                                                        id="message"
                                                                        onChange={handleInputChange} 
                                                                        value={formData.message}
                                                                        minLength={30}
                                                                        maxLength={400}
                                                                        required
                                                                  ></textarea>
                                                            </div>

                                                            <div className="mt-4">
                                                                  <button
                                                                        type="submit"
                                                                        
                                                                        className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50  backdrop-blur-md lg:font-semibold isolation-auto border-gray-200 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-cyan-600 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                                                                  >
                                                                        Enviar
                                                                        <svg
                                                                              className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-400 group-hover:border-none p-2 rotate-45"
                                                                              viewBox="0 0 16 19"
                                                                              xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                              <path
                                                                                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                                                                                    className="fill-gray-800 group-hover:fill-gray-800"
                                                                              ></path>
                                                                        </svg>
                                                                  </button>
                                                            </div>
                                                      </form>
                                                </div>
                                          </div>
                                    </div>
                              </section>


                        </div>
                  </div>
            </section>

      )
}
export default Contacto;