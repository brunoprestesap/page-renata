import React from 'react'
import perfil from '../assets/perfil_.webp'

const Perfil = () => {
  return (
    <div className='px-5 py-10 md:w-full md:h-[800px] bg-[#F3F3F3] flex flex-col md:flex-row justify-center items-center'>
        <div className='md:mx-12'>
            <img
            className='object-cover w-72 h-72 rounded-full'
            src={perfil}
            alt='foto de perfil'
            />
        </div>
        <div className='my-5 md:w-2/6'>
            <h2 className='text-2xl md:text-4xl text-center mb-8'>Satisfação, Drª. <span className='font-bold text-rose-800'>Renata Pamplona</span></h2>
            <p className='text-sm leading-6 text-justify'>
              Olá! Sou uma dentista apaixonada pela minha profissão e comprometida em oferecer aos meus pacientes 
              os melhores tratamentos dentários. Meu objetivo é proporcionar um atendimento personalizado e 
              de qualidade, sempre levando em consideração as necessidades e desejos de cada um.<br />
              Com mais de 6 anos de experiência na área, tenho habilidades em diversas áreas da odontologia, incluindo 
              tratamentos preventivos, restaurativos, cirúrgicos e estéticos; com isso ajudando a 
              obterem um sorriso saudável e bonito que lhes dê confiança e melhore sua qualidade de vida.<br />
              Entendo que muitas pessoas têm medo de ir ao dentista, mas me proponho a tornar cada visita o 
              mais confortável e relaxante possível. Minha equipe e eu trabalhamos para garantir um ambiente acolhedor 
              e amigável, onde nossos pacientes se sintam à vontade e seguros.<br />
              Estou sempre atualizando minhas habilidades e conhecimentos através de Especializações, Cursos e Eventos da área, investindo 
              em tecnologia de ponta para oferecer tratamentos ainda mais eficazes e precisos.<br />
              Se você está procurando uma dentista que preza pela saúde e o bem-estar de seus pacientes, venha me conhecer.<br />
              Terei o maior prazer de ajudá-lo a alcançar um sorriso saudável e bonito!
            </p>
        </div>
    </div>
  )
}

export default Perfil