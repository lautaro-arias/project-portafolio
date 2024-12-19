'use client'
import 'animate.css';
import ArrayCertificados from '../utils/arrayCertificados';
import { Carousel } from "flowbite-react";

export default function Certificados() {
  const { arrayCertificados } = ArrayCertificados()

  return (
    <section
      id="certificados"
      className="md:py-12 text-gray-600 body-font animate__animated animate__fadeIn animate__delay-900ms animate__slower"
    >
      <div className="container px-5 md:pt-10 py-4 md:py-8 mx-auto">
        <div className="space-y-4">
          <details className="group [&_summary::-webkit-details-marker]:hidden" open>
            <summary className="backdrop-blur-2xl flex border cursor-pointer items-center justify-between gap-1.5 rounded-lg  p-4 ">
              <h1 className="bg-gradient-to-r backdrop-blur-2xl bg-gray-950 text-xl  sm:text-xl-medium  pb-2 from-gray-100 via-gray-200 to-gray-200 bg-clip-text font-extrabold text-transparent " >
                Certificados
              </h1>
              <div className="text-start mb-10 max-w-sm border border-white"></div>
              <svg
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <div className='flex justify-center mx-auto text-center'>
              <div className="justify-center  md:py-18 mx-auto mt-2 grid grid-cols-1  w-full max-w-6xl h-[700px]  backdrop-blur-lg text-gray-950">
                <Carousel slideInterval={5000} pauseOnHover>
                  <img
                    className="w-full h-auto px-16 py-4  object-contain "
                    src="https://i.postimg.cc/gkdmQ9rV/Captura-de-pantalla-2024-12-02-17-26-32.png"
                    alt="Certificado 1"
                  />
                  <img
                    className="w-full h-auto px-16 py-4 object-contain"
                    src="https://i.postimg.cc/m2wBGdF0/Captura-de-pantalla-2024-12-02-17-25-38.png"
                    alt="Certificado 2"
                  />
                  <img
                    className="w-full h-auto px-16 py-4 object-contain "
                    src="https://i.postimg.cc/D0QF06p4/Captura-de-pantalla-2024-12-02-17-27-02.png"
                    alt="Certificado 3"
                  />
                  <img
                    className="w-full h-auto px-16 py-4 object-contain "
                    src="https://i.postimg.cc/ry5qfyyy/9-EI5-GSGSX8-page-0001.jpg"
                    alt="Certificado 4"
                  />
                  <img
                    className="w-full h-auto px-16 py-4 object-contain "
                    src="https://i.postimg.cc/d3cwJp6K/html-css-javascript.jpg"
                    alt="Certificado 5"
                  />
                  <img
                    className="w-full h-auto px-16 py-4 object-contain "
                    src="https://i.postimg.cc/qR3pV48L/typescript.jpg"
                    alt="Certificado 6"
                  />
                </Carousel>
              </div>
            </div>
          </details>
        </div>
      </div>
    </section>




  );
};





/* 

<section id='certificados' className=" text-gray-600 body-font animate__animated animate__fadeIn animate__delay-900ms animate__slower">
                <div className="container px-5 pt-10 py-6 mx-auto">
                    <div className="space-y-4">
                        <details className="group [&_summary::-webkit-details-marker]:hidden" open>
                            <summary
                                className="flex border cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-transparent p-4 text-cyan-600"
                            >
                                <h1 className="text-start text-xl  sm:text-5xl-medium title-font pb-2 text-cyan-600  ">Certificados</h1>
                                <div className='text-start mb-10  max-w-sm border border-white'></div>
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

                            <div className="flex flex-wrap py-4 -m-4">
                                {arrayCertificados.map((item) => (
                                    <div key={item.name} className="scrollCard p-4 md:w-1/3">
                                        <div className="h-full border-2 border-gray-600 hover:border-gray-300 border-opacity-60 rounded-lg overflow-hidden">
                                            <div className="flex-shrink-0 relative   overflow-hidden">
                                                <a href="" target='_blank' className={`inline-flex items-center  text-white md:mb-2 lg:mb-0`} download>
                                                    <img className=" cursor-pointer object-cover w-full h-full transition-transform duration-300 transform scale-100 hover:scale-110" src={item.img} width={960} height={720} alt="" />
                                                </a>
                                            </div>
                                            <div className="p-6">
                                                <h1 className="title-font text-xl font-medium text-cyan-300 mb-3">{item.name}</h1>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </details>
                    </div>
                </div>
            </section>

 */