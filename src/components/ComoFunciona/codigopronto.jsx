import React, { useState } from 'react';

const NeurocienciaClinica = () => {
  // Estado para controlar a categoria selecionada
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('NEUROMETRIA');

  // Função para definir a categoria selecionada
  const handleCategoriaClick = (categoria) => {
    setCategoriaSelecionada(categoria);
  };

  return (
    <div className="z-0 text-gray-800">
    {/* Botões para selecionar categorias */}
    <div className="flex flex-wrap space-x-0 space-y-4 md:space-x-4 md:space-y-0 mb-6">
      <button
        onClick={() => handleCategoriaClick('NEUROMETRIA')}
        className={`w-full md:w-auto border border-gray-200 py-2 px-4 rounded-lg shadow-md ${categoriaSelecionada === 'NEUROMETRIA' ? 'bg-[#479354] text-white' : 'bg-white'} transition-all duration-300 hover:scale-105`}
      >
        NEUROMETRIA FUNCIONAL
      </button>
      <button
        onClick={() => handleCategoriaClick('NEUROFEEDBACK')}
        className={`w-full md:w-auto border border-gray-200 py-2 px-4 rounded-lg shadow-md ${categoriaSelecionada === 'NEUROFEEDBACK' ? 'bg-[#479354] text-white' : 'bg-white'} transition-all duration-300 hover:scale-105`}
      >
        NEUROFEEDBACK
      </button>
      <button
        onClick={() => handleCategoriaClick('EEG')}
        className={`w-full md:w-auto border border-gray-200 py-2 px-4 rounded-lg shadow-md ${categoriaSelecionada === 'EEG' ? 'bg-[#479354] text-white' : 'bg-white'} transition-all duration-300 hover:scale-105`}
      >
        EEG - ELETROENCEFALOGRAFIA E NEUROFEEDBACK
      </button>
    </div>

      {/* Conteúdo baseado na categoria selecionada */}
      {categoriaSelecionada === 'NEUROMETRIA' && (
        <div className="text-gray-800">
          <h3 className="text-2xl font-semibold mb-6">TCC - TERAPIA COGNITIVO COMPORTAMENTAL</h3>
        </div>      
      )}

      {categoriaSelecionada === 'NEUROFEEDBACK' && (
        <div>
          <h3 className="text-2xl font-semibold mb-6">TCC - TERAPIA COGNITIVO COMPORTAMENTAL</h3>
        </div>
      )}

      {categoriaSelecionada === 'EEG' && (
        <div className='p-5'>
          <h3 className="text-2xl font-semibold mb-6">POR QUE PSICOTERAPIA BASEADA EM NEUROCIÊNCIA?</h3>
        </div>
      )}
    </div>
  );
};

export default NeurocienciaClinica;

