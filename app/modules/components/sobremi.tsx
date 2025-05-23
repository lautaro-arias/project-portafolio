'use client'
import React from 'react';
import 'animate.css';

const Sobremi = () => {
    return (
        <div  className="flex flex-col animate__animated animate__fadeIn animate__delay-1s animate__slower bg-gray-950 mx-auto w-full md:w-[90%] max-w-[1500px]  p-2 mb-16  rounded-xl hover:shadow-md border-2 border-gray-700">
            <div className="relative flex text-center">
                <div className="flex pl-3.5 pt-3">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="-ml-0.5 mr-1.5 h-3 w-3 text-red-600">
                        <circle r="12" cy="12" cx="12"></circle>
                    </svg>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="-ml-0.75 mr-1.5 h-3 w-3 text-yellow-300">
                        <circle r="12" cy="12" cx="12"></circle>
                    </svg>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="-ml-0.75 mr-1.5 h-3 w-3 text-lime-500">
                        <circle r="12" cy="12" cx="12"></circle>
                    </svg>
                </div>
                <span className="absolute inset-x-0 top-2 text-xs font-semibold text-white">SobreMi.tsx</span>
            </div>
            <div className="mt-5 space-y-1.5 px-5 pb-10">
                <p className="mt-4 text-lg font-normal tracking-wide text-gray-400">
                    <span className="text-lime-500">export</span> <span className="text-lime-500">default</span> <span className="text-white font-bold">function</span> <span className="text-sky-500">sobreMi</span> <span className="text-white">{'( )'}</span>    <span className="text-white">{'{'}</span>
                </p>
                <p className="ml-3 me-80 md:me-0 text-lg font-normal tracking-wide text-sky-500">
                    <span className="text-lime-500 me-1">return</span><span className="text-white">{'('}</span>
                </p>
                <p className="ml-3 me-80 md:me-0 text-lg font-normal tracking-wide text-sky-500">
                    <span className="text-slate-500">&lt;</span><span className="">section</span><span className="text-slate-500">&gt;</span><span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10"></span>
                </p>
                <p className="ml-8 me-80 md:me-0 text-lg font-normal leading-4 tracking-wide text-sky-500">
                    <span className="text-slate-500">&lt;</span><span className="">p</span><span className="text-slate-500">&gt;</span>
                </p>
                <p className="ml-12 indent-8 whitespace-normal  text-lg tracking-wide font-semibold text-white md:h-full max-h-[30vh] overflow-y-auto">
                    Inicié en el mundo de la programación hace unos años,abarcando desde las bases de la informática hasta el desarrollo de software, creando interfaces intuitivas y eficientes. Mi aprendizaje ha sido autodidacta, basado en la búsqueda de información, respuestas a mis preguntas y proyectos personales, donde he mejorado mis habilidades mediante la práctica y error. A pesar de no haber pasado por instituciones educativas formales, he dedicado tiempo y esfuerzo a construir proyectos desde cero, enfrentándome a desafíos y refinando constantemente mis habilidades.
                </p>
                <p className="ml-8 me-80 md:me-0 text-lg font-normal tracking-wide text-sky-500">
                    <span className="text-slate-500">&lt;/</span><span className="">p</span><span className="text-slate-500">&gt;</span>
                </p>
                <p className="ml-3 me-80 md:me-0 text-lg font-normal tracking-wide text-sky-500">
                    <span className="text-slate-500">&lt;/</span><span className="">section</span><span className="text-slate-500">&gt;</span>
                </p>
                <span className="text-white me-80 md:me-0" >{')'}</span><br />
                <span className="text-white me-80 md:me-0">{'}'}</span>
            </div>
        </div>
    )
}
export default Sobremi;