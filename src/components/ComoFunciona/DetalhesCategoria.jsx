import React from 'react';
import Psicoterapia from '../../data/Psicoterapia';
import NeurocienciaClinica from '../../data/NeurocienciaClinica';
import Supervisao from '../../data/Supervisao';
import Palestras from '../../data/Palestras';

const DetalhesCategoria = ({ categoria }) => {
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
  
    return (
        <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg border border-gray-200">
      <ConteudoCategoria />
    </div>
    );
  };
  
  export default DetalhesCategoria;
