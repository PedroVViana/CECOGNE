import React from "react";
import ServicoCard from "./ServicoCard";

const Service = () => {
  const servicos = [
    {
      titulo: "Psicoterapia",
      descricao: "Sessões de terapia para o bem-estar mental.",
      nomes: ["TCC - Terapia cognitiva comportamental", "Terapia do esquema"],
    },
    {
      titulo: "Neurociência clínica aplicada",
      descricao: "Análise precisa da atividade cerebral.",
      nomes: ["EEG - Eletroencefalografia quantitativa", "Neurometria Funcional", "HRV (Avaliação e treinamento)"],
    },
    {
      titulo: "Supervisão",
      descricao: "Acompanhamento e orientação.",
      nomes: ["Individual", "Grupo"],
    },
    {
      titulo: "Palestras e cursos",
      descricao: "Palestras e cursos educacionais e motivacionais.",
      desativarDetalhes: true, // Desativa o botão "Mais Detalhes"
    },
    {
      titulo: "Grupo de Estudos",
      descricao: "Um espaço para aprofundar conhecimentos.",
      nomes: ["Psicometria", "Neurociência"],
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 text-[#333]">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-12 md:mb-16 tracking-wide text-shadow-lg">
          Nossos Serviços
        </h2>
        {/* Grid configurado para o layout desejado */}
        <div className="grid gap-8">
          {/* Primeira linha com 2 cards lado a lado ocupando 50% da largura cada */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {servicos.slice(0, 2).map((servico, index) => (
              <div key={index} className="w-full">
                <ServicoCard
                  titulo={servico.titulo}
                  descricao={servico.descricao}
                  nomes={servico.nomes}
                  desativarDetalhes={servico.desativarDetalhes}
                />
              </div>
            ))}
          </div>
          {/* Segunda linha com 3 cards, cada um ocupando 1/3 da largura em telas grandes */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {servicos.slice(2).map((servico, index) => (
              <div key={index} className="w-full">
                <ServicoCard
                  titulo={servico.titulo}
                  descricao={servico.descricao}
                  nomes={servico.nomes}
                  desativarDetalhes={servico.desativarDetalhes}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
