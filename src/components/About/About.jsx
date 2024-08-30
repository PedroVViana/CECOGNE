import React from "react";
import { FaHeartbeat, FaEye } from "react-icons/fa"; // Importando ícones do Font Awesome

const About = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-white text-gray-800 relative">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 md:mb-16 text-[#333]">
          Sobre Nós
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
          {/* Missão */}
          <div className="bg-gradient-to-r from-[#59c8f0] to-[#45b5d8] p-8 rounded-lg shadow-lg flex-1 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="mb-6 flex items-center justify-center">
              <FaHeartbeat className="text-white text-5xl md:text-6xl" />
            </div>
            <h3 className="text-3xl font-semibold mb-4 text-white">
              Missão
            </h3>
            <p className="text-lg leading-relaxed text-white">
              Nossa missão é a promoção de saúde mental e qualidade de vida, através de estudos, pesquisas e intervenções em psicologia e neurociências.
            </p>
          </div>
          {/* Visão */}
          <div className="bg-gradient-to-r from-[#59c8f0] to-[#45b5d8] p-8 rounded-lg shadow-lg flex-1 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="mb-6 flex items-center justify-center">
              <FaEye className="text-white text-5xl md:text-6xl" />
            </div>
            <h3 className="text-3xl font-semibold mb-4 text-white">
              Visão
            </h3>
            <p className="text-lg leading-relaxed text-white">
              Buscar ser referência na qualidade no atendimento e promoção de saúde mental em PE.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
