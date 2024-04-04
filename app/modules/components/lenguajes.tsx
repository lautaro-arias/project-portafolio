import React from 'react'
import  LenguajesIcons  from '../utils/arrayLenguajes'
import Proyects from './proyects'
const Lenguajes = () => {
  const { svgs } = LenguajesIcons()
  return (
<>
    <section className="body-font">
              <div className="container px-5 py-60 mx-auto text-center ">
                  <h1 className=" text-2xl  sm:text-5xl-medium title-font pb-10 text-white">Algunas de las herraminetas con las que trabajo</h1>
                      <div className="grid grid-cols-2 gap-10 text-center lg:grid-cols-6 mt-10 ">
                          {svgs.map((item,index)=> (
                            <div key={index} className=" bg-white w-20 h-20  flex items-center justify-center rounded-full ring ring-cyan-600 ring-offset-base-100 ring-offset-2">
                              {item}
                            </div>
                          ))}
                      </div>
                </div>
        </section>
    
          <Proyects/>
</>
)
}

        export default Lenguajes