'use client'
import React from 'react';
import ModalContact from './contact';
import FormPost from '../handlers/useFormContact';
import Footer from './footer';

const Contacto = () => {
      const { formData,handleInputChange,handleSubmit,isOk}= FormPost()
      /// Textarea copi
      const email = "ariass00006@gmail.com";
      const copyText = () => {
          navigator.clipboard.writeText(email)
            
      };
      //
return (
<>
      <section className="text-gray-400 body-font relative w-screen bg-transparent mt-10  ">
            <div className="container px-5 py-12 pt-60 mx-auto ">
                  <div className="flex flex-col text-center w-full mb-12">
                        <h1 id="contact" className="sm:text-3xl text-5xl font-medium title-font mb-4 text-cyan-600">Contactame!</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-white text-lg">si necesitas una persona responsable y capaz de cumplir cada tarea.</p>
                              <div className='hover:backdrop-blur-3xl flex mx-auto mt-2'> 
                                    <a className=" text-white font-extrabold border-b border-cyan-300 "  id="emailLink" href={`mailto:${email}`}>{email}</a>
                                          <button className='tooltip tooltip-right' data-tip="Copiar">
                                                <svg  onClick={copyText} className=" hover:text-cyan-300 ml-2 cursor-pointer w-6 h-6 tooltip  " data-tip="Copiar" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                                                </svg>
                                          </button>
                              </div>
                        </div>
                  <div className="lg:w-1/2 md:w-2/3 mx-auto ">
                        <form onSubmit={handleSubmit}  method="PATCH" className="flex flex-wrap -m-2">
                                    <div className="p-2 w-1/2">
                                                <div className="relative">
                                                      <label htmlFor="name"className="relative block rounded-md border border-gray-600 shadow-sm focus-within:border-cyan-600 focus-within:ring-1 ">
                                                            <input
                                                                  type="text"
                                                                  id="name"
                                                                  className="peer  focus:bg-black  text-cyan-500  w-full border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                                                  placeholder="Nombre"
                                                                  name="name"
                                                                  value={formData.name}
                                                                  onChange={handleInputChange}  
                                                                  maxLength={20}
                                                                  minLength={3}
                                                                  required 
                                                            />
                                                            <span className="pointer-events-none font-semibold absolute start-2.5 top-0 -translate-y-1/2 bg-black p-0.5 text-sm text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-sm">
                                                                  Nombre
                                                            </span>
                                                      </label>
                                                </div>
                                          </div>
                                    <div className="p-2 w-1/2">
                                                <div className="relative">
                                                      <label htmlFor="Apellido"className="relative block rounded-md border border-gray-600 shadow-sm focus-within:border-cyan-600 focus-within:ring-1 ">
                                                            <input
                                                                  type="text"
                                                                  id="Apellido"
                                                                  name="lastname"
                                                                  className="rounded-md focus:bg-black  peer w-full text-cyan-500  border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                                                  placeholder="Apellido"
                                                                  onChange={handleInputChange} 
                                                                  value={formData.lastname} 
                                                                  maxLength={20}
                                                                  minLength={3}
                                                            />
                                                            <span className="pointer-events-none absolute font-semibold start-2.5 top-0 -translate-y-1/2 bg-black p-0.5 text-sm text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-sm">
                                                                  Apellido
                                                            </span>
                                                      </label>
                                                </div>
                                          </div>
                                    <div className="p-2 w-1/2">
                                                <div className="relative">
                                                      <label htmlFor="Telefono"className="relative block rounded-md border border-gray-600 shadow-sm focus-within:border-cyan-600 focus-within:ring-1 ">
                                                            <input
                                                                  type="number"
                                                                  id="Telefono"
                                                                  name="phone"
                                                                  className="rounded-md focus:bg-black peer w-full text-cyan-500  border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                                                  placeholder="Telefono"
                                                                  onChange={handleInputChange} 
                                                                  value={formData.phone} 
                                                                  minLength={8}
                                                                  maxLength={20}
                                                            />
                                                            <span className="pointer-events-none absolute font-semibold start-2.5 top-0 -translate-y-1/2 bg-black p-0.5 text-sm text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-sm">
                                                                  Telefono
                                                            </span>
                                                      </label>
                                                </div>
                                          </div>
                                    <div className="p-2 w-1/2">
                                                <div className="relative">
                                                      <label htmlFor="Email"className="relative block rounded-md border border-gray-600 shadow-sm focus-within:border-cyan-600 focus-within:ring-1 ">
                                                            <input
                                                            type="email"
                                                            id="Email"
                                                            name="email"
                                                            className="focus:bg-black  rounded-md  peer w-full text-cyan-500  border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                                            placeholder="Email"
                                                            onChange={handleInputChange} 
                                                            value={formData.email} 
                                                            minLength={15}
                                                            maxLength={50}
                                                            required 
                                                            />
                                                            <span className=" flex pointer-events-none absolute font-semibold start-2.5 top-0 -translate-y-1/2 bg-black p-0.5 text-sm text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-sm">
                                                                  Email
                                                            </span>
                                                      </label>
                                                </div>
                                          </div>
                                    <div className="p-2 w-full">
                                                <div className="relative">
                                                      <label htmlFor="Mensaje"className="relative block rounded-md border border-gray-600 shadow-sm focus-within:border-cyan-600 focus-within:ring-1 ">
                                                            <textarea  
                                                                  name="message"
                                                                  id="Mensaje" className="focus:bg-black w-full border min-h-40 max-h-80 border-black   focus-within:border-black   focus-within:ring-0 text-start  bg-transparent bg-opacity-50  rounded-lg  pb-10 text-base outline-none text-white py-1 px-3 leading-8  "
                                                                  onChange={handleInputChange} 
                                                                  value={formData.message}
                                                                  minLength={30}
                                                                  maxLength={400}
                                                                  required
                                                            />
                                                            <span className="pointer-events-none absolute font-semibold start-2.5 top-0 -translate-y-1/2 bg-black p-0.5 text-sm text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-sm">
                                                                  Mensaje
                                                            </span>
                                                      </label>
                                                </div>
                                          </div>
                                    <div className="p-2 w-full">
                                          <button type="submit" className=" w-full  text-center border border-black mx-auto bg-cyan-600 hover:bg-transparent hover:border hover:border-cyan-300 hover:text-cyan-400  text-white py-2 px-8  rounded-lg text-lg">
                                                <a className='flex  justify-center'>Enviar<svg viewBox="0 0 1024 1024" className="ms-3 h-8 w-8 icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"><path d="M633.319 722.634L429 860.298V672.034z" fill="#307cab"></path><path d="M446.662 681.407l388.442 104.557L960 163.702l-159.706 99.826L64 723.667z" fill="#2bb3ee"></path><path d="M446.662 681.407L960 163.702l-159.706 99.826L64 723.667z" fill="#ffebeb"></path></g></svg></a>
                                          </button>
                                    </div>
                              </form>
                        </div>
                  </div>
            </section>
            {isOk ? <ModalContact/> : false }

            <Footer/>
</>
)
}
export default Contacto;