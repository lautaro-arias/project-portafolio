'use client'
import React from 'react'
import LenguajesIcons from '../../utils/arrayLenguajes'

export default function JobsDescription() {

  const { jobsSvg } = LenguajesIcons()


  const ArrayJobs = [
    {

      name: "Hospital E/A",
      tipo: "Aplicacion movil ",
      puesto: "Freelancer",
      start: "2022",
      img: "",
      id: 1,
      svgLenguaje: jobsSvg,
      description: (
        <>

          Diseñé y desarrollé una aplicación móvil con React Native para gestionar el
          mantenimiento de las máquinas del hospital, integrando funcionalidades clave como:
          <br />
          ● Registro, actualización y control del historial completo de vida útil de cada
          máquina, incluyendo reparaciones, servicios y revisiones.
          <br />
          ● Sistema de notificaciones para programar revisiones anuales o mensuales.
          <br />
          ● Generación de códigos QR asociados al número de serie de cada máquina,
          facilitando su identificación.
          <br />
          ● Filtros avanzados para búsquedas eficientes en el inventario de máquinas.

        </>
      ),
      link: ""

    },
    {
      name: "Develap",
      tipo: "Desarrollo web y movil ",
      puesto: "Desarrollador front-end",
      start: "2022",
      img: "",
      id: 2,
      svgLenguaje: "",
      description: (
        <>
          ● Desarrollo de Aplicaciones Web y Móviles, utilizando tecnologías como
          HTML, CSS, Angular, Astro, NextJS, React y React Native.
          <br />
          ● Colaboración en equipos multidisciplinarios, trabajando junto a
          diseñadores, desarrolladores para cumplir con los objetivos del proyecto.

        </>
      ),
      link: "https://www.develap.com/"

    }
  ]


  return {
    ArrayJobs
  }
}
