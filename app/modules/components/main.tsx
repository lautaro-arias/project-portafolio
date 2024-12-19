import React from 'react'
import DescargaCv from './descargaCv'
import Sobremi from './sobremi'
import Jobs from './jobs/jobs'
import Lenguajes from './lenguajes'
import Proyects from './proyects'
import Contacto from './contact'
import PartiOrigi from './partiOrigi'
import InternalLinks from './nav/internalLinks'
import Nav from './nav/nav'
import Certificados from './certificados'
export default function ComponentMain() {
  return (
    <div>
      <Nav/>
      <DescargaCv />
      <Proyects />
      <Lenguajes />
      <Certificados/>
      <Jobs />
      <Contacto />
      {/*<PartiOrigi tagId="particles"  />*/}
    </div>
  )
}
