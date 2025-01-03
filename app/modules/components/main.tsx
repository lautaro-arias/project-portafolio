import React from 'react'
import DescargaCv from './descargaCv'
import Jobs from './jobs/jobs'
import Lenguajes from './lenguajes'
import Proyects from './proyects'
import Contacto from '../contact/contact'
import Nav from './nav/nav'
import Certificados from './certificados'
export default function ComponentMain() {
  return (
    <section className='bg-gray-100'>
      <Nav />
      <DescargaCv />
      <Proyects />
      <Lenguajes />
      <Certificados />
      <Jobs />
      <Contacto />
    </section>
  )
}
