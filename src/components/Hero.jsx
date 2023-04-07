import React from "react";
import hero from "../assets/topo.webp";
import CardExperiencia from "./CardExperiencia";

const Hero = () => {
  return (
    <div id="hero">
      <img
        id="inverter"
        className="w-full h-screen object-cover"
        src={hero}
        alt="hero top"
      ></img>

      <div className="w-full h-screen absolute top-0 left-0 md:bottom-4 bg-white/50">
        <div className="invisible md:visible absolute top-0 right-0 max-w-[700px] w-52 lg:w-72 m-auto h-full">
          <CardExperiencia />
        </div>

        <div className="absolute top-0 left-0 w-full flex lg:justify-start  pt-16 pl-5 lg:pl-20">
          <h1 className="text-5xl md:text-6xl text-left font-bold text-[#7D513A]">
            DRA. RENATA
            <br /> PAMPLONA
          </h1>
        </div>

        <div
          id="sobre"
          className="flex absolute bottom-3 md:bottom-12 left-5 md:left-16 max-w-[350px] md:max-w-prose"
        >
          <div className="backdrop-opacity-10 rounded-2xl bg-[#EED3C6]/50 p-5 bg-opacity-60 shadow-2xl shadow-stone-500/50">
            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl text-[#7D513A]">
              Transforme seu sorriso com Tratamentos Odontológicos
              personalizados.
            </h2>

            <hr className="w-full lg:w-full border mt-3 border-white/50" />

            <div className="my-5">
              <h2 className="text-lg md:text-xl text-[#7D513A]">
                Cuide da sua saúde bucal e melhore sua qualidade de vida. Agende
                uma consulta hoje mesmo!
              </h2>
            </div>

            <div className="w-full">
              <a
                href="https://wa.me/5596991551081"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-[#F7F7F7] rounded-xl w-full py-5 px-8 text-center hover:border hover:border-stone-100 hover:shadow-xl">
                  <h2 className="text-[#7D513A] uppercase font-bold">
                    Agende sua consulta
                  </h2>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
