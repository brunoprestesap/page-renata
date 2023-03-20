import React from 'react'
import Depoimentos from '../components/Depoimentos'
import Hero from '../components/Hero'
import Perfil from '../components/Perfil'
import Tratamentos from '../components/Tratamentos'

const HomePage = () => {
  return (
    <div>
        <Hero />
        <Tratamentos />
        <Perfil />
        <Depoimentos />
    </div>
  )
}

export default HomePage