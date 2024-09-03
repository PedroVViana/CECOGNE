import React from 'react';

const CTASection = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-400 via-green-500 to-teal-500 py-24 px-6 md:px-12 lg:px-20 text-center text-white overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 bg-opacity-40 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent blur-2xl"></div>
      <div className="absolute inset-0 bg-opacity-20 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent blur-3xl"></div>

      {/* Partículas e formas decorativas */}
      <div className="absolute top-5 left-1/4 w-32 h-32 bg-white rounded-full opacity-10 blur-3xl animate-pulseSlow"></div>
      <div className="absolute bottom-5 right-1/4 w-16 h-16 bg-white rounded-full opacity-10 blur-2xl animate-pulseSlow"></div>
      <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-white rounded-full opacity-5 blur-3xl animate-spinSlow"></div>

      {/* Conteúdo Principal */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-8 drop-shadow-2xl animate-fadeIn">Agende sua consulta hoje mesmo</h2>
        <p className="text-lg md:text-2xl mb-10 max-w-2xl mx-auto animate-fadeInDelay">
          Tem alguma dúvida? Quer saber mais sobre nossos serviços? Fale conosco!
        </p>
        <a
          href="#contato"
          className="inline-block bg-white text-green-600 hover:text-white border-2 border-green-600 hover:bg-green-700 transition duration-300 ease-in-out font-bold text-lg py-4 px-10 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110 hover:-translate-y-2 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-50"
        >
          Fale Conosco
        </a>
      </div>
    </section>
  );
};

export default CTASection;
