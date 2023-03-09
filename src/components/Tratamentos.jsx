import React from "react";
import implante from "../assets/implante.jpg";
import ortodontia from "../assets/ortodontia.jpg";
import protese from "../assets/protese.jpg";
import faceta from "../assets/faceta.jpg";
import clinica from "../assets/clinica.webp";
import restauracao from "../assets/restauracao.webp";
import bucomaxilo from "../assets/bucomaxilofacial.jpeg";
import laserterapia from "../assets/laserterapia.jpg";
import odonto from "../assets/odontopediatria.jpg";

import { FaCheck } from "react-icons/fa";

const Tratamentos = () => {
  return (
    <div>
      <div className="p-5">
        <h2 className="text-4xl text-center font-bold text-[#7D513A]">
          Tratamentos
        </h2>
        <h2 className="text-2xl font-bold text-center text-[#7D513A]/80 my-2">
          Tudo o que você precisa, num só lugar!
        </h2>
        <h2 className="text-sm text-center text-[#7D513A]">
          Não deixe que o medo do dentista impeça você de cuidar da sua saúde
          bucal - Oferecemos tratamentos sem dor
        </h2>
      </div>

      <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="w-full">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:bg-[#7D513A]/70 hover:text-white transition duration-300 ease-in">
            <img
              className="lg:h-72 md:h-48 w-full object-cover object-center"
              src={implante}
              alt="implante"
            />

            <div className="p-5">
              <h2 className="text-base font-medium text-slate-900 mb-1">
                Implante dentário
              </h2>
              <p className="leading-relaxed">
                Não perca mais tempo sofrendo com problemas dentários. Agende
                agora mesmo uma consulta para avaliação e descubra como o
                implante dentário pode mudar a sua vida para melhor.
              </p>
              <div className="py-2">
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p>Implante dentário unitário/multiplo</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p>Prótese dentária sobre implante</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p>Exerto ósseo</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p>Cirurgia de levantamento de seio maxilar</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p>Tratamento de gengivite e periodontite</p>
                </div>
              </div>
            </div>
            <div className="px-5 pb-5">
              <button className="border-2 border-white bg-sky-800 p-3 rounded-lg">
                <p className="text-white">Agende sua consulta</p>
              </button>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:bg-[#7D513A]/70 hover:text-white transition duration-300 ease-in">
            <img
              className="lg:h-72 md:h-48 w-full object-cover object-center"
              src={ortodontia}
              alt="ortodontia"
            />

            <div className="p-5">
              <h2 className="text-base font-medium text-slate-900 mb-1">
                Ortodontia
              </h2>
              <p className="leading-relaxed">
                Não deixe que dentes tortos ou problemas de mordida afetem a sua
                confiança. Agende agora mesmo uma consulta para avaliação
                ortodôntica!
              </p>
              <div className="py-2">
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p>Aparelhos ortodônticos fixos</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p>Aparelhos ortodônticos móveis</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p>Alinhadores transparentes</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p>Aparelhos ortopédicos</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p>Tratamentos acelerados</p>
                </div>
              </div>
            </div>
            <div className="px-5 pb-5">
              <button className="border-2 border-white bg-sky-800 p-3 rounded-lg">
                <p className="text-white">Agende sua consulta</p>
              </button>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:bg-[#7D513A]/70 hover:text-white transition duration-300 ease-in">
            <img
              className="lg:h-72 md:h-48 w-full object-cover object-center"
              src={protese}
              alt="protese dental"
            />

            <div className="p-5">
              <h2 className="text-base font-medium text-slate-900 mb-1">
                Prótese Dental
              </h2>
              <p className="leading-relaxed">
                Sorrisos são a expressão da nossa alegria e felicidade. 
                E quando um dente falha, pode ser difícil sorrir com confiança. 
                Mas a prótese dentária pode devolver a você o sorriso que tanto deseja.
                Agende uma consulta agora mesmo para avaliação.
              </p>
              <div className="py-2">
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p>Próteses fixas</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p>Próteses removíveis</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p>Overdentures</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p>Coroas</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p>Pontes fixas</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p>Implantes dentários</p>
                </div>
              </div>
            </div>
            <div className="px-5 pb-5">
              <button className="border-2 border-white bg-sky-800 p-3 rounded-lg">
                <p className="text-white">Agende sua consulta</p>
              </button>
            </div>
          </div>
        </div>

        {/* <div className='flex flex-col items-center justify-center'>
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
            </div> */}
      </div>
    </div>
  );
};

export default Tratamentos;
