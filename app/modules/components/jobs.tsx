import React from 'react'
import jobsDescription from '../utils/arrayJobs'

export default function Jobs() {
    const { ArrayJobs } = jobsDescription()
    return (
        <>
            <section className="scrollCard body-font animate__animated animate__fadeIn animate__delay-900ms animate__slower ">
                <div className="container px-5  pt-1 lg:pb-20 mx-auto text-start ">
                    <h1 className="text-start text-xl  sm:text-5xl-medium title-font pb-2 text-cyan-600 ">Trabajos</h1>
                    <div className='text-start mb-8  max-w-sm border border-white'></div>
                    <div className="flex flex-wrap h-full -m-4">
                        {ArrayJobs.map((item, jobs) => (
                            <div key={jobs} className=" w-full h-full lg:hover:scale-105 transition-all duration-300 lg:w-1/3">
                                <div className=" h-full w-full px-6 md:px-14 pb-10 relative py-4 rounded-lg overflow-hidden text-center ">
                                    <details className=" border rounded-lg   group [&_summary::-webkit-details-marker]:hidden transition duration-300" open>
                                        <summary
                                            className="flex cursor-pointer border border-white items-center justify-between gap-1.5 rounded-b-sm rounded-t-md bg-cyan-600  p-4 text-white"
                                        >
                                            <h1 className="text-lg">{item.name}</h1>

                                            <svg
                                                className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </summary>
                                        <div className='p-4 pt-4 container  animate__animated animate__fadeIn animate__delay-900ms animate__slower' >
                                            {item.tipo &&
                                                <h5 className="font-medium text-md mb-2 text-cyan-600 rounded-lg p-1  bg-white inline-block">
                                                    {item.tipo}
                                                </h5>
                                            }
                                            <h5 className="font-semibold text-cyan-600">{item.puesto}</h5>
                                            <p className="mt-4 px-4 mb-6 text-md font-semibold leading-relaxed text-white max-h-[15vh] overflow-y-auto">
                                                {item.description}
                                            </p>
                                            {item.svgLenguaje &&
                                                <span className="text-gray-400 rounded-xl bg-gray-50 ml-4 inline-flex items-center   leading-none text-sm pr-3 py-1">
                                                    {item.svgLenguaje}
                                                </span>
                                            }
                                            {item.link && (
                                                <a href={item.link} target='_blank' className=" text-white bg-cyan-600 border border-white rounded-2xl inline-flex ml-4 leading-none text-sm p-6 py-2">
                                                    ir
                                                </a>
                                            )}
                                        </div>
                                    </details>
                                </div>
                            </div>
                        ))}
                    </div>



                </div>
            </section>
        </>
    )
}
