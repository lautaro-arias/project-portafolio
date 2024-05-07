import React from 'react'
import Lenguajes from './lenguajes'
import Image from 'next/image'
//import "../globals.css";


const SobreMi = () => {
  
  return (
    <> 
      <section className=" text-white body-font py-30">
        <div className="container px-5 py-10 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto text-center">
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="min-w-96 min-h-md w-full h-full flex flex-wrap">
                <div className="relative w-full">
                  <Image alt="gallery" width={1220} height={560} className=" object-cover object-center sm:w-full" src="/assets/h.png" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center py-20">
                    </div>
                  </div>
                </div>
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