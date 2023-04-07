import React from 'react'

import { FaWhatsapp } from "react-icons/fa";

const CardCTA = () => {
  return (
    <div id="cta" className="flex bg-[#F3F3F3] justify-center py-12">
      <div className="flex flex-col md:w-2/5 w-full mx-5 items-center shadow-xl shadow-gray-500/50 bg-[#7D513A]/50 backdrop-blur-sm rounded-xl py-5 px-5">

        <h2 className="text-white leading-6 text-justify mb-5">
          Na nossa clínica, acreditamos que um sorriso saudável e bonito é um dos pilares 
          para uma vida feliz e confiante. É por isso que estamos comprometidos em oferecer 
          aos nossos pacientes os melhores cuidados odontológicos possíveis. Nós nos esforçamos 
          para criar um ambiente acolhedor e amigável para que você possa se sentir confortável 
          em sua visita.
        </h2>

        <h2 className="text-white leading-6 text-justify">
          Nossos dentistas altamente qualificados possuem anos de experiência em todas as áreas da 
          odontologia, incluindo odontologia preventiva, restaurativa e estética. Desde limpezas de 
          rotina até procedimentos mais complexos, temos o conhecimento e as habilidades para garantir
          que você obtenha o tratamento certo para as suas necessidades.
        </h2>

        <button
          className="p-3 md:p-5 w-80 my-5 text-white rounded-2xl transform duration-500 hover:-translate-y-1 bg-[#7D513A]/90 hover:bg-[#003E53]"
        >
          <a
                href="https://wa.me/5596991551081"
                target="_blank"
                rel="noreferrer"
              >
            <div className="flex justify-center items-center gap-3 md:gap-5">
              <FaWhatsapp size={30} />
              <h2 className="text-sm md:text-xl">Agende sua consulta</h2>
            </div>
          </a>
        </button>
      </div>
    </div>
  )
}

export default CardCTA