import MasVendidos from '@/components/MasVendidos'
import React from 'react'
import Concepto from '@/components/Concepto'
import Team from '@/components/Team'
import { HeroBanner } from '@/components/Banner'
import Caracteristicas from '@/components/Caracteristicas'

const page = () => {
  return (
    <div>
      <HeroBanner />
      <Concepto />
      <Caracteristicas />
      <MasVendidos />
      <Team />
      {/* <UnderConstruction /> */}
    </div>
  )
}

export default page
