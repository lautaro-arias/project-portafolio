import React from 'react'
import DescargaCv from './descargaCv'
import Sobremi from './sobremi'
import Jobs from './jobs'
import Lenguajes from './lenguajes'
import Proyects from './proyects'
import Contacto from './contact'
import PartiOrigi from './partiOrigi'
export default function ComponentMain() {
  return (
    <div>
      <DescargaCv />
      <Sobremi />
      <Jobs />
      <Lenguajes />
      <Proyects />
      <Contacto />
      <PartiOrigi tagId="particles"  />
    </div>
  )
}
