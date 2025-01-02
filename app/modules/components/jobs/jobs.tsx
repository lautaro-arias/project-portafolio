'use client'
import React from 'react'
import JobsDescription from './arrayJobs'

export default function Jobs() {
    const { ArrayJobs } = JobsDescription()
    return (
        <>
            <section id='trabajos' className="  mt-20 lg:mt-12 body-font animate__animated animate__fadeIn animate__delay-900ms animate__slower ">
                <div className="container px-5  pt-1 lg:pb-12 mx-auto text-start ">
                    <h1 className="pt-16 bg-gradient-to-r backdrop-blur-2xl  text-xl  sm:text-xl-medium  pb-2 from-gray-500 via-gray-600 to-gray-700 bg-clip-text font-extrabold text-transparent " style={{ textShadow: '2px 3px 4px rgba(255, 255, 255, 0.5)' }}>
                        Experiencia laboral
                    </h1>
                    <div className='text-start mb-8  max-w-sm border border-gray-600'></div>
                    <div className="flex flex-wrap h-full ">
                        {ArrayJobs.map((item) => (
                            <div key={item.id} className=" me-4 mt-4 w-full h-[300px] max-h-[50vh] lg:hover:scale-105 transition-all duration-300 lg:w-1/3 group">
                                <div className="bg-gray-950 scrollCard h-full w-full px-6 md:px-0 pb-10 relative py-4 rounded-lg overflow-hidden text-center ">
                                    <h1 className="text-lg text-white font-semibold">{item.name}</h1>
                                    <div className='bg-gray-950 p-4 pt-4 container  animate__animated animate__fadeIn animate__delay-900ms animate__slower' >
                                        {/*item.tipo &&
                                            <h5 className="font-medium text-md mb-2 text-cyan-600 rounded-lg p-1  bg-white inline-block">
                                                {item.tipo}
                                            </h5>
                                        */}
                                        <h5 className="font-semibold text-cyan-600">{item.puesto}</h5>
                                        <p className="mt-4 px-4 mb-6 text-md font-semibold leading-relaxed text-white max-h-[20vh] overflow-y-auto">
                                            {item.description}
                                        </p>
                                        {/*item.svgLenguaje &&
                                            <span className="text-gray-400 rounded-xl bg-gray-50 ml-4 inline-flex items-center   leading-none text-sm pr-3 py-1">
                                                {item.svgLenguaje}
                                            </span>
                                        */}
                                        {item.link && (
                                            <a href={item.link} target='_blank' className=" text-white bg-gray-400 group-hover:bg-cyan-600 border border-white rounded-2xl inline-flex ml-4 leading-none text-sm p-6 py-2">
                                                ir
                                            </a>
                                        )}
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
