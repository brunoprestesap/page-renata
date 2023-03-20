import React from 'react'
import Brand from '../components/Brand'
import Hero from '../components/Hero'
import Main from '../components/Main'
import Perfil from '../components/Perfil'
import Tratamentos from '../components/Tratamentos'

const HomePage = () => {
  return (
    <div>
        <Hero />
        <Tratamentos />
        <Perfil />
    </div>
  )
}

export default HomePage