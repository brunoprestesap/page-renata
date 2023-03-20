import React from 'react'
import perfil from '../assets/perfil_.jpeg'

const Perfil = () => {
  return (
    <div className='px-5 py-10 md:w-full flex flex-col md:flex-row justify-center items-center'>
        <div className='md:mx-12'>
            <img
            className='object-cover w-72 h-72 rounded-full'
            src={perfil}
            alt='foto de perfil'
            />
        </div>
        <div className='my-5 md:w-2/6'>
            <h2 className='text-2xl text-center mb-8'>Prazer, Drª. <span className='font-bold text-rose-800'>Renata Pamplona</span></h2>
            <p className='text-sm leading-6 text-justify'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries, but also the leap into 
            electronic typesetting, remaining essentially unchanged. It was popularised in 
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including 
            versions of Lorem Ipsum.
            </p>
        </div>
    </div>
  )
}

export default Perfil