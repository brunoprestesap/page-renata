import React from 'react'
import implante from '../assets/implante.jpg'
import ortodontia from '../assets/ortodontia.jpg'
import protese from '../assets/protese.jpg'
import faceta from '../assets/faceta.jpg'
import clinica from '../assets/clinica.webp'
import restauracao from '../assets/restauracao.webp'
import bucomaxilo from '../assets/bucomaxilofacial.jpeg'
import laserterapia from '../assets/laserterapia.jpg'
import odonto from '../assets/odontopediatria.jpg'

const Tratamentos = () => {
  return (
    <div>
        <div className='p-5'>

            <h2 className='text-4xl text-center font-bold text-[#7D513A]'>
                Tratamentos
            </h2>
            <h2 className='text-2xl font-bold text-center text-[#7D513A]/80 my-2'>
                Tudo o que você precisa, num só lugar!
            </h2>
            <h2 className='text-sm text-center text-[#7D513A]'>
                Não deixe que o medo do dentista impeça você de cuidar da sua saúde bucal - Oferecemos tratamentos sem dor
            </h2>

        </div>

        <div className='p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div className='flex flex-col items-center justify-center bg-[#F3DDD2] rounded-xl p-5'>
                <img
                src={implante}
                alt='implante dentário'
                className='object-cover w-5/6 rounded-xl hover:translate-y-2 duration-500 shadow-lg shadow-slate-800/50' />
                <h2 className='text-center text-xl mt-5 text-[#7D513A]'>Implante dentário</h2>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <img
                src={ortodontia}
                alt='ortodontia'
                className='object-cover w-full rounded-lg hover:translate-y-2 duration-500' />
                <h2 className='text-center my-3 text-xl text-[#7D513A]'>Ortodontia</h2>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <img
                src={protese}
                alt='prótese dental'
                className='object-cover w-full rounded-lg hover:translate-y-2 duration-500' />
                <h2 className='text-center my-3 text-xl text-[#7D513A]'>Prótese Dental</h2>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <img
                src={faceta}
                alt='lentes e facetas'
                className='object-cover w-full rounded-lg hover:translate-y-2 duration-500' />
                <h2 className='text-center my-3 text-xl text-[#7D513A]'>Lentes e facetas</h2>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <img
                src={clinica}
                alt='clinica geral'
                className='object-cover w-full rounded-lg hover:translate-y-2 duration-500' />
                <h2 className='text-center my-3 text-xl text-[#7D513A]'>Clínica Geral</h2>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <img
                src={restauracao}
                alt='restauração'
                className='object-cover w-full rounded-lg hover:translate-y-2 duration-500' />
                <h2 className='text-center my-3 text-xl text-[#7D513A]'>Restauração</h2>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <img
                src={bucomaxilo}
                alt='Bucomaxilofacial'
                className='object-cover w-full rounded-lg hover:translate-y-2 duration-500' />
                <h2 className='text-center my-3 text-xl text-[#7D513A]'>Bucomaxilofacial</h2>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <img
                src={laserterapia}
                alt='Laserterapia'
                className='object-cover w-full rounded-lg hover:translate-y-2 duration-500' />
                <h2 className='text-center my-3 text-xl text-[#7D513A]'>Laserterapia</h2>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <img
                src={odonto}
                alt='Odontopediatria'
                className='object-cover w-full rounded-lg hover:translate-y-2 duration-500' />
                <h2 className='text-center my-3 text-xl text-[#AA8068]'>Odontopediatria</h2>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <img
                src={odonto}
                alt='PNE'
                className='object-cover w-full rounded-lg hover:translate-y-2 duration-500' />
                <h2 className='text-center my-3 text-xl text-[#AA8068]'>Pacientes com Necessidades Especiais</h2>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <img
                src={odonto}
                alt='Geriatria'
                className='object-cover w-full rounded-lg hover:translate-y-2 duration-500' />
                <h2 className='text-center my-3 text-xl text-[#AA8068]'>Geriatria</h2>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <img
                src={odonto}
                alt='HOF'
                className='object-cover w-full rounded-lg hover:translate-y-2 duration-500' />
                <h2 className='text-center my-3 text-xl text-[#AA8068]'>Harmonização Orofacial</h2>
            </div>
        </div>
    </div>
  )
}

export default Tratamentos