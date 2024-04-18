import Image from 'next/image'
import React from 'react'
import Contacto from './contact'
import ArrayProjects from '../utils/arrayProjects'

const Proyects = () => {
  const { dataProjects } = ArrayProjects()
  return (
    <>
       {/* <div className="flex mx-auto justify-center mb-26">
            <h1 className= 'text-3xl text-cyan-600 border-b border-white px-8 py-3'>Proyectos principales</h1>
          </div>
      {dataProjects.map((item, index) => ( 
        <section key={index} className='py-12  '>
        <div className={` py-4 max-w-6xl  mb-26 rounded-lg ${item.bg} backdrop-blur-3xl   border border-zinc-600 hover:border hover:border-cyan-700 font-medium  container mx-auto flex md:flex-row flex-col items-center`}>
              <div  className=" lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                      <Image
                        className="cursor-pointer backdrop-blur-sm w-full h-full"
                        width={525}
                        height={0}
                        alt="hero"
                        src={item.img}
                      />
              </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                  <h1 className="backdrop-blur-sm  title-font sm:text-2xl text-2xl pb-8 font-medium text-cyan-400">{item.title} 
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"  className="hover:stroke-cyan-700 cursor-pointer bg-transparent ms-4 inline-flex  w-9 h-7 "  stroke="#66d8f5"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7281 3.88396C17.1624 2.44407 19.2604 2.41383 20.4219 3.57981C21.5856 4.74798 21.5542 6.85922 20.1189 8.30009L17.6951 10.7333C17.4028 11.0268 17.4037 11.5017 17.6971 11.794C17.9906 12.0863 18.4655 12.0854 18.7578 11.7919L21.1816 9.35869C23.0929 7.43998 23.3329 4.37665 21.4846 2.5212C19.6342 0.663551 16.5776 0.905664 14.6653 2.82536L9.81768 7.69182C7.90639 9.61053 7.66643 12.6739 9.5147 14.5293C9.80702 14.8228 10.2819 14.8237 10.5754 14.5314C10.8688 14.2391 10.8697 13.7642 10.5774 13.4707C9.41376 12.3026 9.4451 10.1913 10.8804 8.75042L15.7281 3.88396Z" fill="#ffffff"></path> <path opacity="0.5" d="M14.4846 9.4707C14.1923 9.17724 13.7174 9.17632 13.4239 9.46864C13.1305 9.76097 13.1296 10.2358 13.4219 10.5293C14.5856 11.6975 14.5542 13.8087 13.1189 15.2496L8.27129 20.1161C6.83696 21.556 4.73889 21.5862 3.57742 20.4202C2.41376 19.2521 2.4451 17.1408 3.8804 15.6999L6.30424 13.2666C6.59657 12.9732 6.59565 12.4983 6.30219 12.206C6.00873 11.9137 5.53386 11.9146 5.24153 12.208L2.81769 14.6413C0.906387 16.56 0.666428 19.6234 2.5147 21.4788C4.36518 23.3365 7.42173 23.0944 9.334 21.1747L14.1816 16.3082C16.0929 14.3895 16.3329 11.3262 14.4846 9.4707Z" fill="#ffffff"></path> </g></svg>
                      </h1>
                <p className="text-white mb-8 me-2 leading-relaxed">{item.description}</p>
                  <div className="flex justify-center">
                      <button className=" inline-flex  border-0  focus:outline-none  rounded text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="bg-white border w-8 h-8  hover:border-cyan-300 rounded-full "   viewBox="0 0 256 249" preserveAspectRatio="xMinYMin meet"><g fill="#161614"><path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0"/><path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398"/></g></svg>
                        </button>
                  </div>
            </div>
        </div>
      </section>
      ))}
       {/* dataProjects.map((item, index) => ( 
      <section key={index}>
      <div  className="pb-4 border-b border-gray-600">
        <h3 className="text-xl font-semibold leading-6 text-gray-800">Latest Entries</h3>
      </div>
    
      <div className="relative mx-auto max-w-7xl">
        <div className="grid max-w-lg gap-8 mx-auto mt-12 lg:grid-cols-2 lg:max-w-none">
          <div className="flex flex-col mb-12 overflow-hidden cursor-pointer">
            <a href="/blog-post">
              <div className="flex-shrink-0">
              <Image
                        className="cursor-pointer backdrop-blur-sm w-full h-full"
                        width={525}
                        height={0}
                        alt="hero"
                        src={item.img}
                      />
              </div>
            </a>
            
          </div>
    
          
        </div>

      </div>
    </section>
       ))*/}
      <section>
      <div className="flex mx-auto justify-center mb-26">
            <h1 className= 'text-3xl text-cyan-600 border-b border-white px-8 py-3'>Proyectos principales</h1>
          </div>

  <div className="relative mx-auto max-w-7xl">
    <div className="grid max-w-lg gap-8 mx-auto mt-12 lg:grid-cols-2 lg:max-w-none">
      <div className="flex flex-col mb-12 overflow-hidden cursor-pointer">
        <a href="/blog-post">
          <div className="flex-shrink-0">
          <Image   className="object-cover w-full h-48 rounded-lg" src="/assets/proyect1.png" width={525}height={0} alt=""/>
          </div>
        </a>
        <div className="flex flex-col justify-between flex-1">
          <a href="/blog-post"></a>
          <div className="flex-1">
            <a href="/blog-post">
              <div className="flex pt-6 space-x-1 text-sm text-gray-500">
                <time dateTime="2020-03-10"> Mar 10, 2020 </time>
                <span aria-hidden="true"> · </span>
                <span> 4 min read </span>
              </div>
            </a>
            <a href="#" className="block mt-2 space-y-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tighter text-neutral-600">Typography on app.</h3>
              <p className="text-lg font-normal text-gray-500">Filling text so you can see how it looks like with text. Did I said text?</p>
              <div className="flex items-center mt-6">
                <div>
                <Image className="inline-block rounded-full h-9 w-9" src="/assets/proyect1.png" width={525}
                        height={0} alt=""/>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700 group-hover:text-neutral-600">Jazz Torp</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="flex flex-col mb-12 overflow-hidden cursor-pointer">
          <a href="/blog-post">
            <div className="flex-shrink-0">
            <Image   className="object-cover w-full h-48 rounded-lg" src="/assets/proyect1.png" width={525}height={0} alt=""/>
            </div>
          </a>
          <div className="flex flex-col justify-between flex-1">
            <a href="/blog-post"></a>
            <div className="flex-1">
              <a href="/blog-post">
                <div className="flex pt-6 space-x-1 text-sm text-gray-500">
                  <time dateTime="2020-03-10"> Mar 10, 2020 </time>
                  <span aria-hidden="true"> · </span>
                  <span> 4 min read </span>
                </div>
              </a>
              <a href="#" className="block mt-2 space-y-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tighter text-neutral-600">Typography on app.</h3>
                <p className="text-lg font-normal text-gray-500">Filling text so you can see how it looks like with text. Did I said text?</p>

                <div className="flex items-center mt-6">
                  <div>
                  <Image className="inline-block rounded-full h-9 w-9" src="/assets/proyect1.png" width={525}
                        height={0} alt=""/>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700 group-hover:text-neutral-600">Robert Zox</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col mb-12 overflow-hidden cursor-pointer">
          <a href="/blog-post">
            <div className="flex-shrink-0">
            <Image   className="object-cover w-full h-48 rounded-lg" src="/assets/proyect1.png" width={525}height={0} alt=""/>
            </div>
          </a>
          <div className="flex flex-col justify-between flex-1">
            <a href="/blog-post"></a>
            <div className="flex-1">
              <a href="/blog-post">
                <div className="flex pt-6 space-x-1 text-sm text-gray-500">
                  <time dateTime="2020-03-10"> Mar 10, 2020 </time>
                  <span aria-hidden="true"> · </span>
                  <span> 4 min read </span>
                </div>
              </a>
              <a href="#" className="block mt-2 space-y-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tighter text-neutral-600">Typography on app.</h3>
                <p className="text-lg font-normal text-gray-500">Filling text so you can see how it looks like with text. Did I said text?</p>

                <div className="flex items-center mt-6">
                  <div>
                    <Image className="inline-block rounded-full h-9 w-9" src="/assets/proyect1.png" width={525}
                        height={0} alt=""/>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700 group-hover:text-neutral-600">Thomas Narrow</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      

  <Contacto/>
</>
  )
}
export default Proyects;