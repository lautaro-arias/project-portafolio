import React from 'react'
import Lenguajes from './lenguajes'
import Image from 'next/image'

const SobreMi = () => {
  
  return (
    <> 
      <section  className=" text-white body-font py-30">
          <div className="container px-5 py-24 mx-auto flex flex-col ">
              <div className="lg:w-4/6 mx-auto text-center ">
                  <div className="flex flex-col sm:flex-row mt-10">
                       {/* <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                            <div className="avatar">
                                <div className="w-56 h-56 rounded-full flex flex-wrap ring mt-10 ring-cyan-600 ring-offset-black ring-offset-4">
                                  <Image alt="team" width={460} height={460} className=" bg-gray-800 rounded-full object-cover object-center sm:mb-0 mb-4" src="/assets/lautaro.jpg" />
                                </div>
                            </div>
                            <div className="backdrop-blur-3xl mt-2 flex flex-col items-center text-center justify-center">
                                <h2 className="font-medium title-font mt-4 text-white text-lg">Lautaro Arias</h2>
                                <div className="w-12 h-1  bg-cyan-600 rounded mt-2 mb-4"></div>
                            </div>
  </div>*/}
                          <div className=" w-full h-full flex flex-wrap  md:w-xl md:h-2xl p-32 mx-auto relative">
                            <Image alt="gallery"  width={1256} height={592} className="py-10 w-full max-w-full h-auto object-cover object-center block absolute inset-0" src="/assets/h.png"/>
                              <div className="text-center py-20 relative  w-full "></div>
                        </div>
                  </div>
              </div>
          </div>
    </section>
    <Lenguajes/>
  </>
  )
}

export default SobreMi