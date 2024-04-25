import React from 'react'
import SobreMi from './sobreMi'
import ParticlesComponent from '../handlers/particles'
import Link from 'next/link';
import Pdf from './pdf';
const DescargaCv = () => {
    // Función para manejar la descarga del currículum PDF
    //http://localhost:3000/public/cv.pdf
    const handleDownload = (e:any) => {
      e.preventDefault
      // Reemplaza la URL con la ruta real de tu PDF en el servidor
      const pdfUrl = '/CURRICULUM.pdf';

      // Crea un elemento <a> oculto para iniciar la descarga
      const link = document.createElement('a');
      link.href = pdfUrl;
      // Especifica el nombre del archivo al descargar
      link.download = 'CURRICULUM.pdf'; 
      // Simula un clic en el enlace para iniciar la descarga
      document.body.appendChild(link);
      link.click();
      // Elimina el enlace después de la descarga
    };


   const handleIr = (e:any) => {
     e.preventDefault
   }
   const scrollToContact = () => {
    const contactoElement = document.getElementById('contacto');
    if (contactoElement) {
      contactoElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <>
    <ParticlesComponent id="particles"/>
      <section className="text-white body-font py-40">
              <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <div className="text-center lg:w-2/3 w-full">
                          <h1 className="title-font flex mx-auto justify-center font-extrabold  text-sm mb-4 text-white">
                              Hola 
                                  <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" role="img" className="h-6 w-6" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <radialGradient id="IconifyId17ecdb2904d178eab21438" cx="-779.868" cy="686.689" r="91.008" gradientTransform="scale(1 -1) rotate(45 506.867 1318.897)" gradientUnits="userSpaceOnUse"> <stop offset=".353" stopColor="#ddb0a2"> </stop> <stop offset=".872" stopColor="#f5cec1"> </stop> </radialGradient> <path d="M59.53 107.44c-3.95-3.17-40.63-38.84-41.04-39.23c-1.62-1.62-2.64-3.3-2.92-4.84c-.29-1.6.2-3 1.5-4.3c1.21-1.21 2.69-1.85 4.28-1.85c1.94 0 3.93.92 5.59 2.59l16.63 15.98c.29.28.67.42 1.04.42a1.494 1.494 0 0 0 1.07-2.54L19.13 46.25c-2.66-2.66-3.91-6.73-.75-9.89c1.21-1.21 2.69-1.85 4.28-1.85c1.94 0 3.93.92 5.59 2.59l27.16 26.48c.29.28.67.43 1.05.43s.77-.15 1.06-.44c.58-.58.59-1.52.01-2.11L24.91 28.02c-1.51-1.51-2.42-3.32-2.58-5.08c-.15-1.79.48-3.45 1.83-4.8c1.21-1.21 2.69-1.85 4.28-1.85c1.94 0 3.93.92 5.59 2.58L67.3 51.31c.29.28.67.43 1.05.43s.77-.15 1.06-.44c.58-.58.59-1.52.01-2.11L45.26 24.36c-1.52-1.52-2.43-3.32-2.58-5.08c-.15-1.79.48-3.45 1.83-4.8c1.21-1.21 2.69-1.85 4.28-1.85c1.94 0 3.93.92 5.59 2.59c8.86 8.7 31.99 31.45 32.77 32.29c2.97 2.05 3.57-1.05 3.72-3.06c.17-2.34-2.51-10.51-.95-17.86c2.62-9.77 10.17-8.17 10.34-8.09c4.14 1.94 3.35 4.84 1.88 10.67l-.15 1.15c-1.54 7.62 9.04 30.2 9.82 31.89c4.15 9.08 8.93 27.49-6.9 43.32c-17.35 17.35-38.83 8.46-45.38 1.91z" fill="url(#IconifyId17ecdb2904d178eab21438)"> </path> <path d="M81.79 117.18c-10.64 0-19.69-5.09-23.26-8.62c-3.21-2.62-23.47-22.18-39.97-38.19c-.67-.65-1.06-1.02-1.1-1.07c-1.87-1.87-3.03-3.82-3.36-5.66c-.38-2.09.27-3.98 1.91-5.63c1.5-1.5 3.34-2.29 5.34-2.29c2.35 0 4.71 1.08 6.65 3.03l16.61 15.96l-26.56-27.42c-3.06-3.06-4.6-8.13-.73-11.99c1.5-1.5 3.34-2.29 5.34-2.29c2.35 0 4.71 1.08 6.65 3.03L56.45 62.5L23.84 29.07c-1.74-1.74-2.81-3.87-3-5.99c-.19-2.26.59-4.33 2.26-6c1.5-1.5 3.34-2.29 5.34-2.29c2.34 0 4.7 1.07 6.65 3.02l33.26 32.43l-24.16-24.83c-1.75-1.75-2.82-3.88-3-6c-.19-2.25.59-4.32 2.26-5.99c1.5-1.5 3.34-2.29 5.34-2.29c2.35 0 4.71 1.08 6.65 3.03l7.21 7.07c12.85 12.6 23.59 23.15 24.74 24.33c.56.45 1.29.62 1.6.47c.2-.1.42-.56.38-1.53c-.06-1.7-.3-3.81-.55-6.04c-.5-4.48-1.02-9.12-.37-12.18c1.42-5.31 4.21-7.56 6.29-8.53c2.86-1.32 5.63-.86 6.16-.61c5.2 2.44 4.17 6.52 2.75 12.18l-.03.14l-.16 1.17c-1.04 5.12 4.3 19.27 9.64 30.8l.08.16c3.57 7.8 10 27.81-7.2 45.01c-7.91 7.89-16.47 10.58-24.19 10.58zM21.35 58.72c-1.18 0-2.3.49-3.22 1.41c-.95.95-1.28 1.87-1.08 2.97c.22 1.21 1.11 2.65 2.5 4.05c.01.01.41.4 1.1 1.06c23.42 22.73 37.56 36.24 39.82 38.06l.12.11c5.52 5.52 26.03 15.32 43.26-1.91c15.87-15.87 9.9-34.4 6.59-41.64l-.07-.15c-3.44-7.42-11.26-25.42-9.87-32.6l.23-1.5c1.54-6.12 1.63-7.4-.98-8.66c-.77-.14-6.29-.81-8.4 7.06c-.53 2.51-.02 7.1.43 11.15c.26 2.29.5 4.46.56 6.27c.1 2.85-1.25 3.94-2.07 4.34c-1.67.81-3.66.12-4.9-.92l-.13-.12c-.61-.66-15.12-14.89-24.72-24.31L53.3 16.3c-2.46-2.47-5.63-2.88-7.76-.75c-1.04 1.04-1.51 2.26-1.4 3.61c.12 1.41.88 2.88 2.15 4.15L70.5 48.14a3.012 3.012 0 0 1-.02 4.22c-1.11 1.11-3.07 1.13-4.21.03L32.98 19.94c-2.46-2.46-5.64-2.87-7.76-.74c-1.04 1.04-1.51 2.26-1.4 3.61c.13 1.41.89 2.89 2.15 4.14L58.6 60.41c1.15 1.16 1.14 3.06-.02 4.22c-1.11 1.11-3.07 1.13-4.21.03L27.2 38.17c-2.46-2.48-5.64-2.88-7.76-.75c-2.59 2.59-1.21 5.8.75 7.77l26.57 27.44a2.988 2.988 0 0 1-.03 4.2c-1.12 1.12-3.06 1.13-4.2.04L25.9 60.89c-1.4-1.41-3.01-2.17-4.55-2.17z" fill="#b57a69"> </path> <path d="M84.76 46.54c-5.49 11.21-4.78 26.9 3.46 39.49c.93 1.7 2.52.87 1.71-.88c-9.95-21.29.48-36.63.48-36.63l-5.65-1.98z" fill="#b57a69"> </path> <g> <path d="M63.17 4.5c3.02-.79 6.24-.72 9.37.01c3.11.75 6.22 2.33 8.53 4.91c2.26 2.56 3.65 5.67 4.12 8.93c.44 3.23.03 6.56-1.5 9.32c-.18-3.1-.72-5.95-1.63-8.58c-.47-1.31-1.02-2.56-1.69-3.74c-.66-1.17-1.44-2.33-2.27-3.28c-1.69-1.95-3.98-3.47-6.55-4.65c-2.58-1.22-5.39-2.12-8.38-2.92z" fill="#b0bec5"> </path> <path d="M64 13.98c1.67-1.06 3.76-1.28 5.73-.93c1.99.35 3.89 1.34 5.39 2.71c1.49 1.39 2.55 3.14 3.21 4.96c.32.91.48 1.87.63 2.8c.05.96.05 1.92-.1 2.88c-.69-.73-1.23-1.46-1.74-2.17c-.59-.67-1.05-1.38-1.58-2.03c-1.04-1.29-2.05-2.46-3.14-3.5c-1.12-1.01-2.3-1.9-3.67-2.67c-1.36-.79-2.89-1.45-4.73-2.05z" fill="#90a4ae"> </path> </g> <g> <path d="M6.83 77.34c1.41 2.76 2.88 5.32 4.59 7.58c1.7 2.26 3.65 4.18 5.92 5.43c1.1.61 2.41 1.14 3.69 1.54c1.29.41 2.63.69 4.01.88c2.76.34 5.66.28 8.73-.19c-2.38 2.07-5.56 3.17-8.8 3.41c-3.28.22-6.61-.49-9.59-2.17c-3-1.71-5.2-4.43-6.58-7.32c-1.38-2.91-2.12-6.04-1.97-9.16z" fill="#b0bec5"> </path> <path d="M16.28 76.17c.97 1.68 1.93 3.03 2.98 4.21c1.04 1.18 2.16 2.15 3.38 3.03c1.24.85 2.6 1.6 4.08 2.35c.74.38 1.53.68 2.31 1.12c.81.35 1.63.72 2.49 1.25c-.91.34-1.84.54-2.79.69c-.94.04-1.91.09-2.87-.04c-1.92-.26-3.84-.93-5.52-2.1c-1.65-1.19-3.02-2.84-3.77-4.71c-.76-1.86-.98-3.94-.29-5.8z" fill="#90a4ae"> </path> </g> </g></svg>
                              , soy 
                              </h1>
                          <h1 className="bg-gradient-to-r from-green-300 via-cyan-500 to-purple-500 bg-clip-text text-5xl font-extrabold text-transparent sm:text-5xl">Lautaro Arias</h1>
                          <p className=" text-xl mb-4 mt-4 leading-relaxed">Desarrollador Front-end,apasionado por el aprendizaje.</p>
                              <div className="flex justify-center mt-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" className='hover:shadow-xl hover:shadow-white cursor-pointer   bg-white border rounded-full ms-4' width="27" height="27" viewBox="0 0 256 249" preserveAspectRatio="xMinYMin meet"><g fill="#161614"><path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0"/><path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398"/></g></svg>
                                  <svg xmlns="http://www.w3.org/2000/svg" className='hover:shadow-xl hover:shadow-cyan-300 cursor-pointer ms-4 rounded-full' width="27" height="27" viewBox="7.025 7.025 497.951 497.95"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="-974.482" y1="1306.773" x2="-622.378" y2="1658.877" gradientTransform="translate(1054.43 -1226.825)"><stop offset="0" stopColor="#2489be"/><stop offset="1" stopColor="#0575b3"/></linearGradient><path d="M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z" fill="url(#a)"/></svg>
                                  <svg height="27" width="27" xmlns="http://www.w3.org/2000/svg" className='ms-4 hover:shadow-xl hover:shadow-red-600 cursor-pointer rounded-md bg-transparent p-0' viewBox="0 49.4 512 399.4200000000001"><g fill="none" ><g ><path d="M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z" fill="#4285f4"/><path d="M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z" fill="#34a853"/><path d="M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z" fill="#fbbc04"/></g><path d="M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z" fill="#ea4335"/><path d="M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z" fill="#c5221f" /></g></svg>
                              </div>
                            <div className=" flex flex-wrap justify-center text-center mx-auto mt-6">
                                <Link href="/Micv"  target = "_blank"  className="border-black  hover:bg-transparent hover:border hover:border-cyan-300 hover:text-cyan-400  flex justify-center ml-4  mt-2 text-white h-12 w-60 bg-cyan-600 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-500 rounded text-lg">
                                    Descargar CV  
                                    <svg xmlns="http://www.w3.org/2000/svg" className=" ms-2 h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>
                                </Link>
                                <a href="/public/CURRICULUM.pdf" >descargar soy un a </a>
                                <button onClick={handleDownload} >Descargar Currículum</button>
                              <a href="#0" onClick={scrollToContact} className="ml-4 flex justify-center  mt-2 h-12 text-black w-60 bg-gray-100 border py-2 px-6 focus:outline-none  hover:text-white hover:border-cyan-50 hover:bg-transparent rounded text-lg">
                                  Contactame
                                  <svg viewBox="0 0 48 48"   className=" ms-2 h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#69e6ff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <path d="M44 24V9H24H4V24V39H24" stroke="#41a1b4" strokeWidth="4" ></path> <path d="M44 34L30 34" stroke="#41a1b4" strokeWidth="4" ></path> <path d="M39 29L44 34L39 39" stroke="#41a1b4" strokeWidth="4" ></path> <path d="M4 9L24 24L44 9" stroke="#41a1b4" strokeWidth="4" ></path> </g></svg>
                              </a>
                          </div>
                    </div>
              </div>
        </section>
    <SobreMi/>
   </>
  )
}

export default DescargaCv