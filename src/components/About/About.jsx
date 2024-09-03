import React from "react";
import AboutIMG from "../../assets/about.jpg"
import { FaHeartbeat, FaEye, FaInfoCircle, FaBriefcase } from "react-icons/fa"; // Importando ícones do Font Awesome

const About = () => {
  return (
    <section className="py-20 px-6 md:px-12 text-gray-800 relative">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 md:mb-16 text-[#333] text-center">
          Sobre Nós
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Imagem */}
          <div className="md:col-span-1 flex justify-center items-center">
            <img
              src={AboutIMG} // Imagem de exemplo, substitua pela sua imagem
              alt="Banner sobre nós"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Cards Informativos */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 p-8 rounded-lg shadow-lg flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="mb-6 flex items-center justify-center">
                <FaInfoCircle className="text-[#479354] text-5xl md:text-6xl" />
              </div>
              <h3 className="text-3xl font-semibold mb-4 text-[#333]">Quem Somos</h3>
              <p className="text-lg leading-relaxed text-[#666]">
                Somos uma equipe dedicada a promover o bem-estar mental por meio de pesquisa e inovação.
              </p>
            </div>
            <div className="bg-white border border-gray-200 p-8 rounded-lg shadow-lg flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="mb-6 flex items-center justify-center">
                <FaBriefcase className="text-[#479354] text-5xl md:text-6xl" />
              </div>
              <h3 className="text-3xl font-semibold mb-4 text-[#333]">Desde 2004 no Campo</h3>
              <p className="text-lg leading-relaxed text-[#666]">
                Experiência e Confiança Mais de 20 anos de especialização em neurociência e psicometria, com uma empresa estabelecida em 2017. Seu bem-estar está em boas mãos.
              </p>
            </div>
          </div>
        </div>

        {/* Cards Missão e Visão */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Missão */}
          <div className="bg-gradient-to-r from-[#73b34f] to-[#479354] p-8 rounded-lg shadow-lg flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="mb-6 flex items-center justify-center">
              <FaHeartbeat className="text-white text-5xl md:text-6xl" />
            </div>
            <h3 className="text-3xl font-semibold mb-4 text-white">Missão</h3>
            <p className="text-lg leading-relaxed text-white">
              Nossa missão é a promoção de saúde mental e qualidade de vida, através de estudos, pesquisas e intervenções em psicologia e neurociências.
            </p>
          </div>

          {/* Visão */}
          <div className="bg-gradient-to-r from-[#73b34f] to-[#479354] p-8 rounded-lg shadow-lg flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="mb-6 flex items-center justify-center">
              <FaEye className="text-white text-5xl md:text-6xl" />
            </div>
            <h3 className="text-3xl font-semibold mb-4 text-white">Visão</h3>
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
