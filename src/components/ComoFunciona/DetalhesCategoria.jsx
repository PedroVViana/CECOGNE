import React, { useState, useEffect } from 'react';
import Psicoterapia from '../../data/Psicoterapia';
import NeurocienciaClinica from '../../data/NeurocienciaClinica';
import Supervisao from '../../data/Supervisao';
import Palestras from '../../data/Palestras';

const DetalhesCategoria = ({ categoria }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setIsExpanded(false);
  }, [categoria]);

  let ConteudoCategoria;

  switch (categoria) {
    case 'psicoterapia':
      ConteudoCategoria = Psicoterapia;
      break;
    case 'neurociencia_clinica':
      ConteudoCategoria = NeurocienciaClinica;
      break;
    case 'supervisao':
      ConteudoCategoria = Supervisao;
      break;
    case 'palestras':
      ConteudoCategoria = Palestras;
      break;
    default:
      ConteudoCategoria = () => <div>Selecione uma categoria</div>;
  }

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className="bg-transparent relative text-gray-800 p-8 transition-all duration-300"
      style={{
        maxHeight: isExpanded ? '100%' : '400px',
        overflow: isExpanded ? 'visible' : 'hidden',
        transition: 'max-height 0.3s ease-in-out',
      }}
    >
      <ConteudoCategoria /> {/* Exibe o conteúdo detalhado da categoria */}

      <div
        className="absolute blurGB bottom-0 left-0 w-full h-[20%] pt-1 pb-5 flex justify-center items-center transition-all duration-300"
        style={{
          bottom: isExpanded ? '-60px' : '0',
          background: isExpanded ? 'transparent' : '#fafcfede',
          height: isExpanded ? 'auto' : '20%',
        }}
      >
        <button
          onClick={toggleExpand}
          className="bg-[#479354] text-white py-2 px-4 rounded-lg shadow-lg hover:bg-[#73b34f] transition-all duration-300 hover:scale-105"
        >
          {isExpanded ? 'Ver Menos' : 'Ver Mais'}
        </button>
      </div>
    </div>
  );
};

export default DetalhesCategoria;
