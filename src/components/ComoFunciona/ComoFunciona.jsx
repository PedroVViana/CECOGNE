import React, { useState } from 'react';
import Categorias from './Categorias';
import DetalhesCategoria from './DetalhesCategoria';

const ComoFunciona = () => {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('psicoterapia');

  const categorias = {
    psicoterapia: { titulo: 'Psicoterapia' },
    neurociencia_clinica: { titulo: 'Neurociência Clínica Aplicada' },
    supervisao: { titulo: 'Supervisão' },
    palestras: { titulo: 'Palestras' }
  };

  const handleCategoriaClick = (categoria) => {
    setCategoriaSelecionada(categoria);
  };

  return (
    <section className="py-20 px-6 md:px-12 bg-white text-white relative">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 md:mb-16 text-[#333] transition-opacity duration-500 ease-in-out opacity-100">
        Como Funciona
      </h2>
      <div className="flex flex-col items-center justify-center gap-8">
        {/* Menu de Categorias */}
        <div className="w-full mb-8 md:mb-0">
          <Categorias
            categorias={categorias}
            categoriaSelecionada={categoriaSelecionada}
            onCategoriaClick={handleCategoriaClick}
          />
        </div>
        {/* Detalhes da Categoria */}
        <div className="w-full md:w-3/4">
          <DetalhesCategoria categoria={categoriaSelecionada} />
        </div>
      </div>
    </div>
  </section>
  );
};

export default ComoFunciona;
