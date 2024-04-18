import React from 'react'
import Lenguajes from './lenguajes'
import Image from 'next/image'
import 'animate.css';
import ParticlesComponent from '../handlers/particles';
//  <ParticlesComponent id="particles" />
const SobreMi = () => {
  
  return (
    <> 
  
      <section  className="bg- black text-white body-font py-30 animate__animated animate__fadeIn animate__delay-900ms animate__slower">
          <div className="container px-5 py-24 mx-auto flex flex-col ">
              <div className="lg:w-4/6 mx-auto text-center ">
               {/* <h1 className="text-3xl  sm:text-5xl-medium title-font pb-4 text-cyan-600 border-b border-white px-2 py-1 ">Sobre mi</h1>*/}
                  <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                            <div className="avatar">
                                <div className="w-56 h-56 rounded-full ring ring-cyan-600 ring-offset-base-100 ring-offset-2">
                                  <Image alt="team" width={400} height={56} className=" bg-white rounded-full object-cover object-center sm:mb-0 mb-4" src="/assets/lautaro.jpg" />
                                </div>
                            </div>
                            <div className="backdrop-blur-3xl flex flex-col items-center text-center justify-center">
                                <h2 className="font-medium title-font mt-4 text-white text-lg">Lautaro Arias</h2>
                                <div className="w-12 h-1  bg-cyan-600 rounded mt-2 mb-4"></div>
                                <p className=" text-base me-4">Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.</p>
                            </div>
                        </div>
                      <div className="backdrop-blur-3xl sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l ml-10 me-6 border-cyan-500 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                        <p className="bg-black leading-relaxed text-lg mb-4 me-2">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland s scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.</p>
                          <a className="bg-black text-cyan-500 inline-flex items-center">Learn More
                              <svg fill="none" stroke="currentColor"  strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                              </svg>
                          </a>
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