import Image from 'next/image'
import Contacto from './contact'
import ArrayProjects from '../utils/arrayProjects'
import LenguajesIcons from '../utils/arrayLenguajes'

const Proyects = () => {
  const { dataProjects } = ArrayProjects()
  const { svgs } = LenguajesIcons()


 
  return (
    <>
       <section>
            <div className="flex mx-auto justify-center mb-26 ">
                <h1 className= 'text-3xl text-cyan-600 border-b border-white px-8 py-3'>Proyectos</h1>
            </div>
    { dataProjects.map((item, index) => ( 
    
          <div key={index} className="relative mx-auto max-w-7xl pt-6 ">
              <div className={ `grid max-w-lg gap-8 mx-auto mt-12 lg:grid-cols-2 lg:max-w-none ${item.bg}`} >
                  <div className="flex flex-col mb-12 overflow-hidden cursor-pointer">
                      <div className="flex flex-col justify-between flex-1">
                          <a href="/blog-post"></a>
                          <div className="flex-1">
                                <div  className="block mt-2 space-y-6">
                                  <div className="flex items-center">
                                    <h3 className=" flex text-2xl font-semibold leading-none tracking-tighter text-cyan-400">
                                        {item.title} 
                                        </h3>
                                            {item.links}
                                        </div>
                                    <p className="text-lg font-normal text-white text-shadow w-full h-full">{item.description}</p>
                                  <div className="flex items-center mt-6">
                                    <div className="flex">
                                            {item.svg}
                                      </div>
                                  </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                  <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                      <div className="flex flex-col mb-12 overflow-hidden cursor-pointer">
                          <a href="/blog-post">
                                <div className="flex-shrink-0 relative w-full h-56 rounded-lg overflow-hidden">
                                  <Image className="rounded-md mt-4 object-cover w-full h-full transition-transform duration-300 transform scale-100 hover:scale-110" src={item.img} width={960}height={720} alt="projects"/>
                                </div>
                            </a>
                          <div className="flex flex-col justify-between flex-1">
                              <a href="/blog-post"></a>
                              {/*<div className="flex-1">
                                    <a href="#" className="block mt-2 space-y-6">
                                      <h3 className="text-2xl font-semibold leading-none tracking-tighter text-neutral-600">Typography on app.</h3>
                                      <p className="text-lg font-normal text-gray-500">Filling text so you can see how it looks like with text. Did I said text?</p>
                                    </a>
                            </div>*/}
                            </div>
                        </div>
                      <div className="flex flex-col mb-12 overflow-hidden cursor-pointer">
                          <a href="/blog-post">
                              <div className="flex-shrink-0 relative h-56 rounded-lg overflow-hidden">
                                <Image className="rounded-md mt-4  object-cover w-full h-full transition-transform duration-300 transform scale-100 hover:scale-110" src={item.img2} width={525}height={0} alt=""/>
                              </div>
                          </a>
                          <div className="flex flex-col justify-between flex-1">
                                <a href="/blog-post"></a>
                                {/*<div className="flex-1">
                                    <a href="#" className="block mt-2 space-y-6">
                                      <h3 className="text-2xl font-semibold leading-none tracking-tighter text-neutral-600">Typography on app.</h3>
                                      <p className="text-lg font-normal text-gray-500">Filling text so you can see how it looks like with text. Did I said text?</p>
                                    </a>
                            </div>*/}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    
    ))}
    </section>
      
    <Contacto/>
</>
)
}
export default Proyects;