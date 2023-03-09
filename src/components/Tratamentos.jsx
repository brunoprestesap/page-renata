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
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:bg-[#7D513A]/70 hover:text-white transition duration-300 ease-in shadow-lg shadow-gray-400">
            <img
              className="lg:h-72 md:h-48 w-full object-cover object-center"
              src={implante}
              alt="implante"
            />

            <div className="p-5">
              <h2 className="text-xl font-medium text-slate-900 mb-1">
                Implante dentário
              </h2>
              <p className="leading-relaxed text-base">
                Não perca mais tempo sofrendo com problemas dentários. Agende
                agora mesmo uma consulta para avaliação e descubra como o
                implante dentário pode mudar a sua vida para melhor.
              </p>
              <div className="py-2">
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Implante dentário unitário/multiplo</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Prótese dentária sobre implante</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Exerto ósseo</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Cirurgia de levantamento de seio maxilar</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Tratamento de gengivite e periodontite</p>
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
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:bg-[#7D513A]/70 hover:text-white transition duration-300 ease-in shadow-lg shadow-gray-400">
            <img
              className="lg:h-72 md:h-48 w-full object-cover object-center"
              src={ortodontia}
              alt="ortodontia"
            />

            <div className="p-5">
              <h2 className="text-xl font-medium text-slate-900 mb-1">
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
                  <p className="text-sm my-1">Aparelhos ortodônticos fixos</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Aparelhos ortodônticos móveis</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Alinhadores transparentes</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Aparelhos ortopédicos</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Tratamentos acelerados</p>
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
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:bg-[#7D513A]/70 hover:text-white transition duration-300 ease-in shadow-lg shadow-gray-400">
            <img
              className="lg:h-72 md:h-48 w-full object-cover object-center"
              src={protese}
              alt="protese dental"
            />

            <div className="p-5">
              <h2 className="text-xl font-medium text-slate-900 mb-1">
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
                  <p className="text-sm my-1">Próteses fixas</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Próteses removíveis</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Overdentures</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Coroas</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Pontes fixas</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Implantes dentários</p>
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
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:bg-[#7D513A]/70 hover:text-white transition duration-300 ease-in shadow-lg shadow-gray-400">
            <img
              className="lg:h-72 md:h-48 w-full object-cover object-center"
              src={faceta}
              alt="Faceta"
            />

            <div className="p-5">
              <h2 className="text-xl font-medium text-slate-900 mb-1">
                Lentes e Facetas
              </h2>
              <p className="leading-relaxed">
                Transforme seu sorriso em minutos! Tenha dentes perfeitos com nossas lentes e facetas de alta qualidade. 
                Agende sua consulta agora mesmo!
              </p>
              <div className="py-2">
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Lentes de contato dental</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Facetas dentárias</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Clareamento dental</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Alinhamento dentário</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Restaurações estéticas</p>
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
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:bg-[#7D513A]/70 hover:text-white transition duration-300 ease-in shadow-lg shadow-gray-400">
            <img
              className="lg:h-72 md:h-48 w-full object-cover object-center"
              src={clinica}
              alt="Clínica Geral"
            />

            <div className="p-5">
              <h2 className="text-xl font-medium text-slate-900 mb-1">
                Clínica Geral
              </h2>
              <p className="leading-relaxed">
                Tenha um sorriso saudável e radiante! Agende já sua consulta para cuidar da sua saúde bucal.
                Oferecemos tratamentos personalizados e equipe especializada.
              </p>
              <div className="py-2">
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Limpeza dental</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Obturações</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Extrações dentárias</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Tratamento de canal</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Tratamento periodontal</p>
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
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:bg-[#7D513A]/70 hover:text-white transition duration-300 ease-in shadow-lg shadow-gray-400">
            <img
              className="lg:h-72 md:h-48 w-full object-cover object-center"
              src={restauracao}
              alt="Restauração"
            />

            <div className="p-5">
              <h2 className="text-xl font-medium text-slate-900 mb-1">
                Restauração
              </h2>
              <p className="leading-relaxed">
                Recupere seu sorriso com nossos serviços de restauração! Dentes quebrados ou com cáries? Nós temos a solução perfeita para você!
              </p>
              <div className="py-2">
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Restaurações com resina composta</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Coroas dentárias</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Implantes dentários</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Facetas de porcelana</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Onlays e inlays</p>
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

        {/* 
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
