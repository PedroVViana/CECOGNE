import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import hero from '../../assets/hero.png'
import styles from './hero.module.css'

const Hero = () => {
  return (
    <section id="home" className="relative h-screen z-0 py-4 flex flex-col lg:flex-row items-center gap-5 px-6 lg:px-12 lg:py-24">
      {/* Sobreposição para contraste */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-transparent to-gray-50 opacity-30"></div>
      
      {/* Conteúdo centralizado */}
      <div className="relative flex flex-col lg:flex-row items-center justify-center gap-1 max-w-6xl mx-auto z-10">
        {/* Texto e botão */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-8 lg:order-1"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight text-shadow">
            Encontre o equilíbrio emocional com apoio profissional
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 text-shadow">
            Psicóloga especializada em terapia cognitivo-comportamental, dedicada a ajudá-lo a alcançar o bem-estar duradouro.
          </p>
          <a href="https://wa.me/SeuNumeroDeWhatsApp" // Substitua "SeuNumeroDeWhatsApp" pelo seu número real
            className="inline-flex items-center bg-green-600 text-white text-sm font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-green-700 hover:scale-105 transition duration-300">
                <FaWhatsapp className="mr-2" />Fale Conosco pelo WhatsApp
            </a>
        </motion.div>
        
        {/* Imagem de Hero à direita */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex-1 max-w-lg lg:max-w-xl mt-12 lg:mt-0 transform scale-95 lg:order-2"
        >
          <img src={hero} alt="Imagem de Hero" className={styles.hero} />
        </motion.div>
      </div>

      {/* Ajustes para mobile */}
      <style jsx>{`
        @media (max-width: 768px) {
          .relative {
            flex-direction: column-reverse;
          }
          .flex-1 {
            margin-top: -6%; /* Ajuste da sobreposição */
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
