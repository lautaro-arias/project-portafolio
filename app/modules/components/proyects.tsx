'use client'
import Link from 'next/link';
import ArrayProjects from '../utils/arrayProjects';

const Proyects = () => {
  const { dataProjects } = ArrayProjects()

  return (
    <>
      <section id='proyectos' className=" text-gray-600 body-font ">
        <div className="container px-5 pt-10 py-6 mx-auto">
          <h1 className="pt-8 bg-gradient-to-r backdrop-blur-2xl  text-xl  sm:text-xl-medium  pb-2 from-gray-500 via-gray-600 to-gray-6700 bg-clip-text font-extrabold text-transparent " style={{ textShadow: '2px 3px 4px rgba(255, 255, 255, 0.5)' }}>
            Algunos de mis  proyectos
          </h1>
          <div className='text-start mb-10  max-w-sm border border-gray-600'></div>
          <div className="flex flex-wrap -m-4">
            {dataProjects.map((item) => (
              <div key={item.id} className=" p-4 md:w-2/4 xl:w-1/3 group ">
                <div className="h-full border-2 border-gray-200 scrollCard bg-gray-950  hover:border-white hover:border-2 border-opacity-60 rounded-lg overflow-hidden">
                  <div className="flex-shrink-0 relative   overflow-hidden">
                    <div className={`inline-flex items-center ${item.hover} text-white md:mb-2 lg:mb-0`} >
                      <Link href={item.links} target='_blank'>
                        <img className=" cursor-pointer object-cover w-full h-full transition-transform duration-300 transform scale-100 hover:scale-110" src={item.img} width={960} height={720} alt="" />
                      </Link>
                    </div>
                  </div>
                  <div className="p-6 bg-gray-950">
                    <h1 className=" text-xl text-gray-300 group-hover:font-bold mb-3">{item.title}</h1>
                    <div className={`title-font ${item.inpiret === '' ? 'hidden' : ''} text-sm font-medium text-gray-200 mb-3`}>
                      <a className='bg-gray-900 rounded-lg px-3 py-1 hover:text-sky-600' href={item.inpiret} target='_blank'>Inspirado click</a>
                    </div>
                    <div className="flex items-center flex-wrap cursor-pointer text-lg ">
                      <span className="text-gray-400  inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
                        {item.svg}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
export default Proyects;