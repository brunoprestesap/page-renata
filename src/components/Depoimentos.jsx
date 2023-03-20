import React, { useState } from "react";
import CardDepoimentos from "./CardDepoimentos";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Depoimentos = () => {
  const testimonials = [
    {
      id: 1,
      name: "Bruno Prestes",
      text: "Profissionais muito agradáveis, serviços de ótima qualidade, Macapá tem um novo conceito em Clínica Odontológica, recomendo 1000 vezes a Dra. Renata que me atendeu super bem",
    },
    {
      id: 2,
      name: "Ivane Ramos Nascimento",
      text: "Conheci a dra Renata em uma emergência emergentissima. Minha caçula estava com cárie nos dentes, e nunca tinha conhecido nenhum profissional dessa área. O atendimento foi nota 1000, com jeitinho e carinho a Dra. conseguiu a colaboração da menina e os problemas foram resolvidos....Depois dessa visita, indico a Renata para todos que conheço....",
    },
    {
      id: 3,
      name: "Franciny N",
      text: "Ótimo espaço, super limpo e climatizado, as profissionais são muito competentes e pacientes, me tratam super bem mesmo eu tendo pavor de dentista! Enfim, uma experiência humanizada na área da odontologia que é um diferencial no nosso estado, realmente muito satisfeita, venho bater o ponto todos os meses com minhas limpezas em dia! Super recomendo. ",
    },
    {
      id: 4,
      name: "Irina Ramos",
      text: "Lugar incrível, ambiente agradável, clima ótimo! Fui atendida com total atenção e paciência existentes",
    },
    {
      id: 5,
      name: "Isfrâncio",
      text: "Equipe maravilhosa. Dra Renata tem muita paciência comigo. Recomendo demais",
    },
    {
      id: 6,
      name: "Vich Moy",
      text: "Maravilhoso! Desde a recepção até o atendimento. Profissionais excelentes, deixam a gente super a vontade! Amei! ❤",
    },
    {
      id: 7,
      name: "Emmanuel Vitor Miranda",
      text: "Ambiente maravilhoso e excelência no atendimento. Com certeza irei recomendar para todos.",
    },
    {
      id: 8,
      name: "Renata Filgueiras",
      text: "Consultório climatizado, excelência no atendimento! Recomendarei para todos que estiverem precisando!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  function prevSlide() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  function nextSlide() {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  function goToSlide(slideIndex) {
    setCurrentIndex(slideIndex);
  }

  return (
    <div className="p-5 md:h-[500px] flex flex-col justify-around">
      <div>
        <h2 className="font-bold text-center text-3xl text-pink-800">
          O que as pessoas dizem sobre nós
        </h2>
      </div>

      <div className="w-full m-auto relative flex justify-center items-center">
        <div className="w-5/6 rounded-2xl bg-center bg-cover duration-500">
          <CardDepoimentos
            depText={testimonials[currentIndex].text}
            depName={testimonials[currentIndex].name}
          />
        </div>

        {/* Left Arrow */}
        <div className="absolute top-[40%] -translate-x-0 translate-y-[50%] left-0 md:left-0 lg:left-64 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={20} />
        </div>
        {/* Right Arrow */}
        <div className="absolute top-[40%] -translate-x-0 translate-y-[50%] right-0 md:right-0 lg:right-64 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={20} />
        </div>
      </div>

      <div className="flex justify-center">
        {testimonials.map((slide, slideIndex) => (
          <div
            key={slide.id}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Depoimentos;
