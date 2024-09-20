import React from 'react'
import LenguajesIcons from './arrayLenguajes'

export default function jobsDescription() {

  const { jobsSvg} = LenguajesIcons()


    const ArrayJobs = [
        {   

            name: "Hospital E/A",
            tipo:"Aplicacion movil ",
            puesto: "Freelancer",
            start: "2022",
            img:"",
            svgLenguaje:jobsSvg,
            description:"Desarrollé un sistema que permite la creación y almacenamiento de información específica sobre elementos, facilitando su gestión y consulta,todos los elementos se les genera un codigo Qr por medio de el numero de serie  para su identificación  y tienen un apartado de observaciones para registrar las observaciones en formato historial .Ademas implementé filtros avanzados que permiten obtener datos específicos de manera rápida y precisa, utilizando criterios como nombre, marca, número de serie, código QR y servicio.Tambien diseñé una interfaz intuitiva para la incorporación de nuevos elementos, asegurando que la base de datos se mantenga actualizada y refleje el estado actual de cada equipo.Por ultimo integré un sistema de notificaciones que alerta sobre tareas programadas y mantenimientos preventivos, lo que permite gestionar proactivamente las actividades relacionadas con el mantenimiento.",
            link:""

        },
        {   

            name: "Develap",
            tipo:"Desarrollo web y movil ",
            puesto: "Desarrollador front-end",
            start: "2022",
            img:"",
            svgLenguaje:"",
            description:"Como desarrollador front-end , trabajé en la creación de aplicaciones web y móviles personalizadas, así como en el desarrollo de APIs. Utilicé tecnologías como TypeScript, MongoDB (base de datos NoSQL), Next.js, React y React Native para satisfacer las necesidades específicas de nuestros clientes, asegurando soluciones eficientes y de alta calidad.",
            link:"https://www.develap.com/"

        }
    ]


  return {
    ArrayJobs
  }
}
