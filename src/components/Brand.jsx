import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const Brand = () => {
  return (
    <div className='w-full flex p-5'>
        <div className='flex md:gap-5'>
            <div className='w-full'>
                <h1 className='text-xl font-bold'>Dra. Renata Pamplona</h1>
            </div>
            <div className='invisible md:visible'>
                <ul className='flex gap-5 px-5'>
                    <li>
                        <p>Início</p>
                    </li>
                    <li>
                        <p>A Profissional</p>
                    </li>
                    <li>
                        <p>Serviços</p>
                    </li>
                    <li>
                        <p>Contato</p>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
  )
}

export default Brand