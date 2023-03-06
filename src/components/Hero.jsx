import React from 'react'
import hero from '../assets/topo.jpg'

const Hero = () => {
  return (
    <div id="hero">
      <img
        id='inverter'
        className="w-full h-screen object-cover"
        src={hero}
        alt="hero top"
      ></img>

      <div className="w-full h-screen absolute top-0 left-0 md:bottom-4 bg-white/50">
        {/* <div className="invisible md:visible absolute top-0 right-0 max-w-[700px] w-52 lg:w-72 m-auto h-full">
          <CardExperience />
        </div> */}
        <div className='absolute top-0 left-0 pt-5 pl-5 border-b-2 border-[#AA8068]'>
            <h1 className='text-2xl text-[#AA8068] font-bold'>Dra. Renata Pamplona</h1>
        </div>

        <div id="sobre" className="flex absolute bottom-3 md:bottom-12 left-5 md:left-16 max-w-[350px] md:max-w-prose">
          <div className="backdrop-opacity-10 rounded-2xl bg-[#EED3C6]/50 p-5 bg-opacity-60 shadow-2xl shadow-stone-500/50">
            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl text-[#AA8068]">Transforme seu sorriso com tratamentos odontológicos personalizados</h2>

            <hr className="w-full lg:w-full border mt-3 border-white/50" />

            <div className="my-5">
              
              <h2 className="text-lg md:text-xl text-[#AA8068]">
                Cuide da sua saúde bucal e melhore sua qualidade de vida - agende uma consulta hoje mesmo"
              </h2>
            </div>

            <div className="w-full">
              <a
                href="https://wa.me/5596991551081"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-[#F7F7F7] rounded-xl w-full py-5 px-8 text-center hover:border hover:border-stone-100 hover:shadow-xl">
                  <h2 className="text-[#AA8068] uppercase font-bold">
                    Agende sua consulta
                  </h2>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero