import React, { useState } from "react";

const ServicoCard = ({ titulo, descricao, nomes, desativarDetalhes }) => {
  const [expandido, setExpandido] = useState(false); // Estado para controlar a exibição do modal

  const toggleExpandir = () => {
    if (!desativarDetalhes) {
      setExpandido(!expandido);
    }
  };

  return (
    <div className="relative bg-white text-black border border-gray-200 p-6 rounded-lg shadow-lg transition-all duration-300 w-full h-auto grid grid-rows-[auto_1fr_auto]">
      <div className="text-center">
        <h3 className="text-xl sm:text-2xl font-bold mb-2">{titulo}</h3>
        <p className="text-sm mb-4">{descricao}</p>
      </div>

      <div className="flex flex-row gap-4 mt-4 w-full justify-center items-center">
        {!desativarDetalhes && (
          <button
            className="bg-[#479354] text-white text-sm sm:text-base py-2 px-4 rounded-lg shadow-lg hover:bg-[#73b34f] transition-all duration-300 hover:scale-105"
            onClick={toggleExpandir}
          >
            {expandido ? "Fechar Detalhes" : "Mais Detalhes"}
          </button>
        )}
        <a href="#como-funciona" className="bg-[#333] text-sm sm:text-base text-white py-2 px-4 rounded-lg shadow-lg hover:bg-[#444] transition-all duration-300 hover:scale-105 text-center">
          Como Funciona
        </a>
      </div>

      {/* Modal para exibir os detalhes */}
      {expandido && !desativarDetalhes && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="flex flex-col bg-white p-4 sm:p-6 rounded-lg max-w-[90%] sm:max-w-md w-full text-center shadow-xl">
            <h4 className="text-lg sm:text-xl font-bold mb-4">Detalhes de {titulo}</h4>
            <ul className="text-left mb-6 space-y-2 px-4">
              {nomes.map((nome, index) => (
                <li key={index} className="list-disc list-none text-sm hover:font-semibold">
                  {nome}
                </li>
              ))}
            </ul>
            <button
              className="bg-[#479354] text-white py-2 px-4 rounded-lg shadow-lg hover:bg-[#73b34f] transition-all duration-300 hover:scale-105"
              onClick={toggleExpandir}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicoCard;
