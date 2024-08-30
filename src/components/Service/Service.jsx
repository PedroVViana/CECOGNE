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
      descricao: "Acompanhamento e orientação de profissionais.",
      nomes: ["Individual", "Grupo"],
    },
    {
      titulo: "Palestras",
      descricao: "Palestras educacionais e motivacionais.",
      desativarDetalhes: true, // Desativa o botão "Mais Detalhes"
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-[#59c8f0] to-[#45b5d8] text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-12 md:mb-16 tracking-wide text-shadow-lg">
          Nossos Serviços
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {servicos.map((servico, index) => (
            <ServicoCard
              key={index}
              titulo={servico.titulo}
              descricao={servico.descricao}
              nomes={servico.nomes}
              desativarDetalhes={servico.desativarDetalhes} // Passa a prop para desativar o botão
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
