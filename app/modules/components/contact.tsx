'use client'
import React from 'react';
import ModalContact from './contact';
import FormPost from '../handlers/useFormContact';
import Footer from './footer';

const Contacto = () => {
      const { formData,handleInputChange,handleSubmit,isOk}= FormPost()

return (
<>
      <section className="text-gray-400 body-font relative w-screen bg-transparent mt-10  ">
            <div className="container px-5 py-12 mx-auto ">
                  <div className="flex flex-col text-center w-full mb-12">
                        <h1 id="contact" className="sm:text-3xl text-2xl font-medium title-font mb-4 text-cyan-600">Contactame!</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Consulta sobre cualquier duda, nuestro equipo se contactara contigo</p>
                  </div>
                  <div className="lg:w-1/2 md:w-2/3 mx-auto ">
                        <form onSubmit={handleSubmit}  method="PATCH" className="flex flex-wrap -m-2">
                                    <div className="p-2 w-1/2">
                                                <div className="relative">
                                                      <label htmlFor="name" className="leading-7 text-sm text-gray-400">Nombre</label>
                                                      <input  type="text" id="name" name="name" className="w-full bg-transparent bg-opacity-50  rounded-lg border border-gray-700  text-base outline-none text-white py-1 px-3 leading-8  "
                                                      onChange={handleInputChange} 
                                                      value={formData.name} 
                                                      maxLength={20}
                                                      minLength={3}
                                                      required 
                                                      />
                                                </div>
                                          </div>
                                    <div className="p-2 w-1/2">
                                          <div className="relative">
                                                      <label htmlFor="lastname" className="leading-7 text-sm text-gray-400">Apellido</label>
                                                      <input type="text" id="lastname" name="lastname" className="w-full  bg-transparent bg-opacity-50  rounded-lg border border-gray-700  text-base outline-none text-white py-1 px-3 leading-8  "
                                                      onChange={handleInputChange} 
                                                      value={formData.lastname} 
                                                      maxLength={20}
                                                      minLength={3}
                                                      />
                                                </div>
                                          </div>
                                          <div className="p-2 w-1/2">
                                                <div className="relative">
                                                      <label htmlFor="number" className="leading-7 text-sm text-gray-400">Telefono</label>
                                                      <input  type="number" id="phone" name="phone" className="w-full  bg-transparent bg-opacity-50  rounded-lg border border-gray-700  text-base outline-none text-white py-1 px-3 leading-8  "
                                                      onChange={handleInputChange} 
                                                      value={formData.phone} 
                                                      minLength={8}
                                                      maxLength={20}
                                                      />
                                                </div>
                                          </div>
                                          <div className="p-2 w-1/2">
                                                <div className="relative">
                                                      <label htmlFor="email" className="leading-7 text-sm text-gray-400">Gmail</label>
                                                      <input  type="email" id="email" name="email" className="w-full  bg-transparent bg-opacity-50  rounded-lg border border-gray-700  text-base outline-none text-white py-1 px-3 leading-8  "
                                                      onChange={handleInputChange} 
                                                      value={formData.email} 
                                                      minLength={15}
                                                      maxLength={50}
                                                      required 
                                                      />
                                                </div>
                                          </div>
                                          <div className="p-2 w-full">
                                                <div className="relative">
                                                      <label htmlFor="message" className="leading-7 text-sm text-gray-400">Consulta</label>
                                                      <textarea  id="message" name="message" className="w-full  text-start  bg-transparent bg-opacity-50  rounded-lg border border-gray-700 pb-10 text-base outline-none text-white py-1 px-3 leading-8  "
                                                      onChange={handleInputChange} 
                                                      value={formData.message}
                                                      minLength={30}
                                                      maxLength={400}
                                                      required>
                                                      </textarea>
                                                </div>
                                          </div>
                                    <div className="p-2 w-full">
                                          <button type="submit" className="flex mx-auto bg-cyan-600 hover:bg-cyan-500 text-white border-2 border-gray-300 py-2 px-8  rounded-lg text-lg">Enviar 
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