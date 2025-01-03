'use client'
//import 'animate.css';
import { Carousel } from "flowbite-react";

export default function Certificados() {

  return (
    <section
      id="certificados"
      className="md:py-12 text-gray-600 body-font animate__animated animate__fadeIn animate__delay-900ms animate__slower"
    >
      <div className="container px-5 md:pt-10 py-4 md:py-8 mx-auto">
        <div className="space-y-4">
          <h1 className="bg-gradient-to-r  text-xl  sm:text-xl-medium  pb-2 from-gray-500 via-gray-600 to-gray-700 bg-clip-text font-extrabold text-transparent " >
            Certificados
          </h1>
          <div className="text-start mb-10 max-w-sm border border-gray-600"></div>
          <div className='flex justify-center mx-auto text-center'>
            <div className="justify-center   mx-auto mt-2 grid grid-cols-1 rounded-lg w-full max-w-6xl h-[700px]  bg-gray-300 text-gray-950">
              <Carousel slideInterval={5000} pauseOnHover className='pb- '>
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
                  className="w-full h-auto px-16  object-contain "
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
        </div>
      </div>
    </section>
  );
};
