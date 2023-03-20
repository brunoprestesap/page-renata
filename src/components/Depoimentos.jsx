import React from "react";

const Depoimentos = () => {
  const testimonials = [
    {
      id: 1,
      name: "Cristina Cavalcante",
      text: "Recebi a indicação de uma amiga e agora tenho orgulho de poder indicar também. A Dra Camila é uma excelente profissional, sempre atenciosa e cautelosa no atendimento e na indicação de tratamento. Só gratidão no meu coração ❤",
    },
    {
      id: 2,
      name: "Gabriel Yared",
      text: "Atendimento excelente da recepção à consulta. A Dra. Camila Neiva acolhe, escuta e orienta com muita humanidade e preocupação com o paciente, o que infelizmente não vemos em muitos profissionais da área. Recomendo o atendimento e já estou animado para o meu retorno!",
    },
    {
      id: 3,
      name: "Laura Cardoso",
      text: "Um lugar que tem um atendimento diferenciado, acolhedor e profissionais excelentes que tem o olhar humanizado pelos pacientes.",
    },
    {
      id: 4,
      name: "Bruno Prestes",
      text: "Atendimento de excelência. Uma ótima profissional. Recomendo.",
    },
    {
      id: 5,
      name: "Giuliana Martins",
      text: "A Dra Camila é uma profissional sem igual, um atendimento humanizado incrível, fora o espaço de atendimento que é super aconchegante, recomendo sem medo!",
    },
    {
      id: 6,
      name: "Ronaldo dos Santos",
      text: "Muito boa a consulta, bem explicativa e me deixou seguro.",
    },
    {
      id: 7,
      name: "Artur Lagoia",
      text: "O atendimento profissional foi excelente, acompanhado de uma ótima estrutura, o que me deu total confiança para continuar o meu tratamento e recomendar para outras pessoas o consultório Dra. Camila Neiva.",
    },
    {
      id: 8,
      name: "Suellen Trindade",
      text: "Excelente profissional! Escuta sensível, postura acolhedora que faz toda a diferença para quem está em sofrimento psíquico.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0)

  function prevSlide() {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  function nextSlide() {
    const isLastSlide = currentIndex === testimonials.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  function goToSlide(slideIndex) {
    setCurrentIndex(slideIndex)
  }

  return (
    <div className="p-5">
      <div>
        <h2 className="font-bold text-3xl text-pink-800 text-left">
          O que as pessoas dizem sobre nós
        </h2>
      </div>

      <div></div>
    </div>
  );
};

export default Depoimentos;
