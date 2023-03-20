import React from 'react'
import perfil from '../assets/perfil_.jpeg'

const Perfil = () => {
  return (
    <div className='p-5 flex flex-col justify-center items-center'>
        <div>
            <img
            className='object-cover w-72 h-72 rounded-full'
            src={perfil}
            alt='foto de perfil'
            ></img>
        </div>
        <div className='my-5'>
            <h2 className='text-2xl text-centerS'>Prazer, Drª. <span className='font-bold text-rose-800'>Renata Pamplona</span></h2>
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