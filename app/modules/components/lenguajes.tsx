import React from 'react'
import  LenguajesIcons  from '../utils/arrayLenguajes'
import Proyects from './proyects'
import Contacto from './contact'

const Lenguajes = () => {
  const { svgs } = LenguajesIcons()
  return (
<>
    <section className="body-font  ">
              <div className="container px-5 py-60 mx-auto text-center ">
                  <h1 className=" text-3xl  sm:text-5xl-medium title-font pb-10 text-cyan-600  py-3">Algunas de las herraminetas con las que trabajo</h1>
                      <div className=" mx-auto w-96  grid grid-cols-2 xs:grid-cols-3 gap-10 text-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-10 ">
                          {svgs.map((item,index)=> (
                            <div key={index} className="m-2 hover:w-24 hover:h-24 bg-white hover:backdrop-blur-2xl w-20 h-20  flex  items-center justify-center rounded-full ring ring-cyan-600  ring-offset-2">
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