import React from 'react';

const ArtigosCientificos = () => {
  const artigos = [
    {
      imgSrc: 'https://via.placeholder.com/600x400',
      title: 'Eficácia da Terapia Cognitivo Comportamental no Tratamento da Ansiedade',
      description:
        'Este artigo explora os benefícios comprovados da Terapia Cognitivo Comportamental (TCC) no tratamento de transtornos de ansiedade. Baseado em estudos recentes, o texto destaca como técnicas de reestruturação cognitiva podem auxiliar na redução dos sintomas e melhorar a qualidade de vida dos pacientes.',
    },
    {
      imgSrc: 'https://via.placeholder.com/600x400',
      title: 'Neurofeedback: Uma Abordagem Inovadora no Controle do Estresse',
      description:
        'O Neurofeedback tem se mostrado uma ferramenta poderosa no manejo do estresse e da ansiedade. Este artigo discute como essa técnica não invasiva pode ajudar a regular as funções cerebrais, promovendo maior autocontrole e bem-estar emocional.',
    },
    {
      imgSrc: 'https://via.placeholder.com/600x400',
      title: 'Terapia de Esquema: Integrando Emoções e Cognições no Tratamento de Transtornos de Personalidade',
      description:
        'Este artigo investiga como a Terapia de Esquema combina elementos da TCC com intervenções de outras abordagens terapêuticas para tratar transtornos de personalidade. Os resultados indicam uma melhora significativa na gestão de emoções e na modificação de padrões de comportamento.',
    },
  ];

  return (
    <section className=" py-12 px-6 md:px-12 lg:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        Artigos Científicos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artigos.map((artigo, index) => (
          <div
            key={index}
            className="bg-white p-4 md:p-6 rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={artigo.imgSrc}
              alt={`Artigo ${index + 1}`}
              className="w-full h-48 md:h-56 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
              {artigo.title}
            </h3>
            <p className="text-sm md:text-base text-gray-700 mb-4">
              {artigo.description}
            </p>
            <a
              href="#"
              className="inline-block bg-[#479354] text-white py-1.5 px-3 md:py-2 md:px-4 rounded-lg hover:bg-[#3d8048] transition-colors duration-300 text-xs md:text-sm"
            >
              Leia Mais
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArtigosCientificos;
