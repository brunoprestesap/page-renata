import React from 'react'
import CardCTA from '../components/CardCTA'
import Contatos from '../components/Contatos'
import Depoimentos from '../components/Depoimentos'
import Footer from '../components/Footer'
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
        <CardCTA />
        <Contatos />
        <Footer />
    </div>
  )
}

export default HomePage