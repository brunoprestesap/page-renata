import React from "react";
import implante from "../assets/implante.jpg";
import ortodontia from "../assets/ortodontia.jpeg";
import protese from "../assets/protese.jpg";
import faceta from "../assets/faceta.jpg";
import clinica from "../assets/clinica.webp";
import restauracao from "../assets/restauracao.webp";
import bucomaxilo from "../assets/bucomaxilofacial.jpeg";
import laserterapia from "../assets/laserterapia.png";
import odonto from "../assets/odontopediatria.jpg";
import harmonizacao from "../assets/harmonizacao.jpg"

import { FaCheck } from "react-icons/fa";

const Tratamentos = () => {
  return (
    <div className="flex flex-col justify-around items-center">
      <div className="p-5 md:w-4/6">
        <h2 className="text-4xl text-center font-bold text-[#7D513A]">
          Tratamentos
        </h2>
        <h2 className="text-2xl font-bold text-center text-[#7D513A]/80 my-2">
          Tudo o que você precisa, num só lugar!
        </h2>
        <h2 className="text-sm text-center text-[#7D513A]">
          Não deixe que o medo do dentista impeça você de cuidar da sua saúde
          bucal - Oferecemos tratamentos sem dor!
        </h2>
      </div>

      <div className="md:w-4/6 p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="w-full">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:bg-[#7D513A]/70 hover:text-white transition duration-300 ease-in shadow-lg shadow-gray-400">
            <img
              className="lg:h-72 md:h-48 w-full object-cover object-center"
              src={implante}
              alt="implante"
            />

            <div className="p-5">
              <h2 className="text-base font-medium text-slate-900 mb-1">
                Implante dentário
              </h2>
              <p className="leading-relaxed text-xs">
                Não perca mais tempo sofrendo com problemas dentários. Agende
                agora mesmo uma consulta e descubra como o implante dentário
                pode mudar a sua vida para melhor.
              </p>
              <div className="py-2">
                <div className="flex items-center gap-2">
                  <FaCheck size={13} />
                  <p className="text-xs my-1">
                    Implante dentário unitário/múltiplo
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck size={13} />
                  <p className="text-xs my-1">
                    Prótese dentária sobre implante
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck size={13} />
                  <p className="text-xs my-1">Enxerto ósseo</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck size={13} />
                  <p className="text-xs my-1">
                    Cirurgia de levantamento de seio maxilar
                  </p>
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
                Sorrisos são a expressão da nossa alegria e felicidade. E quando
                um dente falha, pode ser difícil sorrir com confiança. Mas a
                prótese dentária pode devolver à você o sorriso que tanto
                deseja. Agende uma consulta agora mesmo.
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
                  <p className="text-sm my-1">Coroas</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Pontes fixas</p>
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
                Lentes e Facetas (Estética)
              </h2>
              <p className="leading-relaxed">
                Transforme seu sorriso em minutos! Tenha dentes perfeitos com
                nossas lentes e facetas de alta qualidade. Agende sua consulta
                agora mesmo!
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
                Tenha um sorriso saudável e radiante! Agende já sua consulta
                para cuidar da sua saúde bucal. Oferecemos tratamentos
                personalizados e equipe especializada.
              </p>
              <div className="py-2">
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Limpeza dental</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Restaurações</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Remoção de tártaro</p>
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
                Dentística
              </h2>
              <p className="leading-relaxed">
                Recupere seu sorriso com nossos serviços de restauração! Dentes
                quebrados ou com cáries? Nós temos a solução perfeita para você!
              </p>
              <div className="py-2">
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Restaurações complexas</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Restaurações estéticas</p>
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

        <div className="w-full">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:bg-[#7D513A]/70 hover:text-white transition duration-300 ease-in shadow-lg shadow-gray-400">
            <img
              src={bucomaxilo}
              alt="Bucomaxilofacial"
              className="object-cover w-full rounded-lg hover:translate-y-2 duration-500"
            />

            <div className="p-5">
              <h2 className="text-xl font-medium text-slate-900 mb-1">
                Bucomaxilofacial
              </h2>
              <p className="leading-relaxed">
                Recupere sua autoestima e qualidade de vida! Oferecemos
                tratamentos de bucomaxilofacial, como correção de mandíbula e
                fraturas faciais, com equipe especializada e equipamentos de
                ponta. Agende sua consulta agora mesmo.
              </p>
              <div className="py-2">
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">
                    Extração de dentes inclusos ou impactados
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">
                    Correção de deformidades faciais
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">
                    Tratamento de lesões e doenças na boca, maxilares e face
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">
                    Cirurgias ortognáticas para correção de problemas na
                    mandíbula e maxila
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Tratamento de fraturas faciais</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Biópsias e remoção de tumores</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">
                    Tratamento de distúrbios da articulação temporomandibular
                    (ATM)
                  </p>
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
              src={laserterapia}
              alt="Laserterapia"
              className="object-cover w-full rounded-lg hover:translate-y-2 duration-500"
            />

            <div className="p-5">
              <h2 className="text-xl font-medium text-slate-900 mb-1">
                Laserterapia
              </h2>
              <p className="leading-relaxed">
                Alivie a dor e o desconforto da DTM com a laserterapia!
                Tratamento não invasivo e indolor para relaxar a musculatura e
                reduzir inflamações. Agende sua sessão agora mesmo.
              </p>
              <div className="py-2">
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Redução de dores e inflamações</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Relaxamento da musculatura</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Regeneração tecidual</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Fotobiomodulação</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Previne envelhecimento precoce</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Aumento de imunidade</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Vasodilatação</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Alívio do estresse</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Combate aos radicais livres</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Remove toxínas</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Promove hemostasia</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck />
                <p className="text-sm my-1">Melhora na dor articular</p>
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
              src={odonto}
              alt="Odontopediatria"
              className="object-cover w-full rounded-lg hover:translate-y-2 duration-500"
            />

            <div className="p-5">
              <h2 className="text-xl font-medium text-slate-900 mb-1">
                Odontopediatria
              </h2>
              <p className="leading-relaxed">
                Garanta um sorriso saudável para o seu filho! Oferecemos
                serviços de odontopediatria com profissionais capacitados e
                atendimento personalizado. Marque já a consulta
              </p>
              <div className="py-2">
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Aplicação de flúor</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Tratamento de cárie dentária</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Aplicação de selante dentário</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">
                    Acompanhamento do desenvolvimento da dentição
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">
                    Orientação e prevenção em relação à higiene bucal
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Extração de dentes de leite</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">
                    Acompanhamento ortodôntico precoce
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">
                    Tratamento de traumatismos dentários
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Restaurações dentárias</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">
                    Remoção de tártaro e limpeza dentária.
                  </p>
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
                src={harmonizacao}
                alt='HOF'
                className='object-cover w-full rounded-lg hover:translate-y-2 duration-500' />

            <div className="p-5">
              <h2 className="text-xl font-medium text-slate-900 mb-1">
                HOF - Harmonização Orofacial
              </h2>
              <p className="leading-relaxed">
                Realce a beleza do seu sorriso com a Harmonização Orofacial! 
                Oferecemos procedimentos estéticos faciais personalizados, com resultados naturais e seguros. 
                Agende sua consulta e sinta-se ainda mais bonito!
              </p>
              <div className="py-2">
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">
                    Preenchimento labial
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Toxina botulínica (Botox)</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Preenchimento facial com ácido hialurônico</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">
                    Rinomodelação (procedimento estético para correção do formato do nariz)
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">
                  Bichectomia (procedimento para remoção da gordura das bochechas)
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">Lifting facial não cirúrgico</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">
                  Fios de sustentação facial (thread lift)
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck />
                  <p className="text-sm my-1">
                  Preenchimento de olheiras
                  </p>
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
                
                <h2 className='text-center my-3 text-xl text-[#AA8068]'>Harmonização Orofacial</h2>
            </div> */}
      </div>
    </div>
  );
};

export default Tratamentos;
