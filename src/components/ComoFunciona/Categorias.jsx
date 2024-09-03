import React from 'react';

const Categorias = ({ categorias, categoriaSelecionada, onCategoriaClick }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 md:mb-0">
      {Object.keys(categorias).map((categoria) => (
        <button
          key={categoria}
          onClick={() => onCategoriaClick(categoria)}
          className={`text-left px-6 py-3 rounded-lg transition-transform duration-300 ease-in-out transform ${
            categoria === categoriaSelecionada
              ? 'bg-[#73b34f] text-white shadow-xl scale-105'
              : 'bg-[#479354] text-white border border-gray-300 hover:bg-[#73b34f]'
          } hover:scale-105 focus:outline-none`}
        >
          {categorias[categoria].titulo}
        </button>
      ))}
    </div>
  );
};

export default Categorias;
