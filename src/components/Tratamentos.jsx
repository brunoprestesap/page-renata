import React from 'react'
import implante from '../assets/implante.jpg'
import ortodontia from '../assets/ortodontia.jpg'
import protese from '../assets/protese.jpg'
import faceta from '../assets/faceta.jpg'
import clinica from '../assets/clinica.webp'
import restauracao from '../assets/restauracao.webp'

const Tratamentos = () => {
  return (
    <div>
        <div className='p-5'>

            <h2 className='text-4xl text-center font-bold text-[#AA8068]'>
                Tratamentos
            </h2>
            <h2 className='text-2xl font-bold text-center text-[#AA8068]/80 my-2'>
                Tudo o que você precisa num só lugar
            </h2>
            <h2 className='text-sm text-center text-[#AA8068]'>
                Não deixe o medo do dentista impedir você de cuidar da sua saúde bucal - oferecemos tratamentos sem dor
            </h2>

        </div>

        <div className='p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div className='flex flex-col items-center justify-center'>
                <img
                src={implante}
                alt='implante dentário'
                className='object-cover w-full h-full rounded-lg hover:translate-y-2 duration-500' />
                <h2 className='text-center my-3 text-xl text-[#AA8068]'>Implante dentário</h2>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <img
                src={ortodontia}
                alt='ortodontia'
                className='object-cover w-full rounded-lg hover:translate-y-2 duration-500' />
                <h2 className='text-center my-3 text-xl text-[#AA8068]'>Ortodontia</h2>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <img
                src={protese}
                alt='prótese dental'
                className='object-cover w-full rounded-lg hover:translate-y-2 duration-500' />
                <h2 className='text-center my-3 text-xl text-[#AA8068]'>Prótese Dental</h2>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <img
                src={faceta}
                alt='lentes e facetas'
                className='object-cover w-full rounded-lg hover:translate-y-2 duration-500' />
                <h2 className='text-center my-3 text-xl text-[#AA8068]'>Lentes e facetas</h2>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <img
                src={clinica}
                alt='clinica geral'
                className='object-cover w-full rounded-lg hover:translate-y-2 duration-500' />
                <h2 className='text-center my-3 text-xl text-[#AA8068]'>Clínica Geral</h2>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <img
                src={restauracao}
                alt='restauração'
                className='object-cover w-full rounded-lg hover:translate-y-2 duration-500' />
                <h2 className='text-center my-3 text-xl text-[#AA8068]'>Restauração</h2>
            </div>
        </div>
    </div>
  )
}

export default Tratamentos