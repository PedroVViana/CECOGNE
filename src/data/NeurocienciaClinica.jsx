import React, { useState } from 'react';
import { FaBrain, FaHeart, FaMoon, FaSun, FaGraduationCap, FaCommentDots, FaBed, FaBolt, FaChild, FaFrown, FaTachometerAlt, FaHeartbeat, FaHandHoldingHeart, FaChartLine  } from 'react-icons/fa';

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
        <h3 className="text-xl sm:text-2x1 font-semibold mb-6 text-center">NEUROMETRIA FUNCIONAL</h3>
      
          <h4 className="text-lg font-semibold mb-4">O QUE É NEUROMETRIA FUNCIONAL?</h4>
          <div className="flex flex-col md:flex-row items-center">
            <p className="text-sm text-gray-700">
              A Neurometria Funcional é uma abordagem de avaliação que analisa o funcionamento do Sistema Nervoso Autônomo (SNA) e outros processos neurológicos, por meio de testes e técnicas avançadas.
            </p>
          </div>
          <h4 className="text-lg font-semibold mt-4 mb-4">Aplicações:</h4>
      
        {/* Card 2: Avaliação do Sistema Nervoso Autônomo (SNA) */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h4 className="text-lg font-semibold mb-4">Avaliação do Sistema Nervoso Autônomo (SNA)</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-6">
              <img
                src="https://via.placeholder.com/150"  // Substitua o link da imagem conforme necessário
                alt="Descrição da Imagem"
                className="w-1/2 md:w-1/3 rounded-md"
              />
              <div className="flex-1">
                <h5 className="text-sm font-semibold mb-2">Testes de Variabilidade da Frequência Cardíaca (VFC)</h5>
                <p className="text-sm text-gray-700">
                  Medição das variações no intervalo entre batimentos cardíacos, que pode indicar o equilíbrio entre as divisões simpática e parassimpática do SNA.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <img
                src="https://via.placeholder.com/150"  // Substitua o link da imagem conforme necessário
                alt="Descrição da Imagem"
                className="w-1/2 md:w-1/3 rounded-md"
              />
              <div className="flex-1">
                <h5 className="text-sm font-semibold mb-2">Resposta Galvânica da Pele (RGP)</h5>
                <p className="text-sm text-gray-700">
                  Avaliação das mudanças na condutividade da pele, que podem refletir a ativação do sistema nervoso em resposta ao estresse ou estímulos emocionais.
                </p>
              </div>
            </div>
          </div>
        </div>
      
        {/* Card 3: Avaliações Cognitivas e Emocionais */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h4 className="text-lg font-semibold mb-4">Avaliações Cognitivas e Emocionais</h4>
          <div className="flex flex-col justify-center md:flex-row items-center">
            <p className="text-sm text-gray-700">
              Podem ser utilizadas para avaliar funções específicas do cérebro, como atenção, memória e velocidade de processamento.
            </p>
          </div>
          <h5 className="text-sm font-semibold mt-6 mb-2">Resposta a Estímulos Emocionais</h5>
          <p className="text-sm text-gray-700">
            Avaliação de como o cérebro responde a estímulos emocionais, o que pode ser útil para entender condições relacionadas ao humor e à ansiedade.
          </p>
        </div>
      
        {/* Card 4: Análise dos Dados */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h4 className="text-lg font-semibold mb-4">Análise dos Dados</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-6">
              <img
                src="https://via.placeholder.com/150"  // Substitua o link da imagem conforme necessário
                alt="Análise de Sinais"
                className="w-1/2 md:w-1/3 rounded-md"
              />
              <div className="flex-1">
                <h5 className="text-sm font-semibold mb-2">Processamento de Sinais e Análise Estatística</h5>
                <p className="text-sm text-gray-700">
                  Os dados coletados são analisados com software especializado para identificar padrões, anomalias, ou áreas de interesse específicas.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <img
                src="https://via.placeholder.com/150"  // Substitua o link da imagem conforme necessário
                alt="Mapas Cerebrais"
                className="w-1/2 md:w-1/3 rounded-md"
              />
              <div className="flex-1">
                <h5 className="text-sm font-semibold mb-2">Mapas Cerebrais</h5>
                <p className="text-sm text-gray-700">
                  A geração de mapas cerebrais pode ajudar a visualizar a atividade em diferentes regiões do cérebro e sua conectividade.
                </p>
              </div>
            </div>
          </div>
        </div>
      
        {/* Card 5: Interpretação e Planejamento Terapêutico */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h4 className="text-lg font-semibold mb-4">Interpretação e Planejamento Terapêutico</h4>
          <div className="flex flex-col md:flex-row items-center">
            <p className="text-sm text-gray-700">
              Com base nas avaliações, profissionais podem desenvolver um plano de tratamento personalizado, que pode incluir neurofeedback, modificações de estilo de vida, terapias comportamentais, entre outros.
            </p>
          </div>
        </div>
      </div>
           
      )}

      {categoriaSelecionada === 'NEUROFEEDBACK' && (
        <div>
          <h3 className="text-xl sm:text-2x1 font-semibold mb-6">O QUE É NEUROFEEDBACK?</h3>
          <div className="flex flex-col gap-6 items-center">
            <p className="text-sm text-gray-700">
              Neurofeedback ou neuromodulação autorregulatória é uma técnica de treinamento cerebral
              que permite melhorar a saúde mental e desempenho cognitivo através do controle consciente
              da atividade cerebral. Utilizando equipamentos de alto nível de sofisticação tecnológica, esta
              técnica mede a atividade cerebral em tempo real e fornece um feedback visual ou auditivo ao
              usuário. Por exemplo, ao visualizar as ondas cerebrais em um monitor ou ouvir os sinais
              sonoros correspondentes, os indivíduos aprendem a reconhecer e modificar seus padrões de
              atividade cerebral.
            </p>
            <p className="text-sm text-gray-700">
              A base do neurofeedback é a neuroplasticidade, a capacidade do cérebro de se reorganizar e
              formar novas conexões neuronais ao longo da vida. Através de sessões regulares, os
              usuários treinam seu cérebro para melhorar aspectos como concentração, relaxamento, e
              gestão do estresse, contribuindo para uma ampla gama de benefícios.
            </p>
          </div>
          <h4 className="text-lg font-semibold mt-4 mb-4">Aplicações:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
            {/* Card 1: Método Não Invasivo */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center gap-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <FaGraduationCap className="w-12 h-12 text-blue-500" />
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-2">Método Não Invasivo</h4>
                <p className="text-sm text-gray-700">
                  Como uma abordagem não farmacológica e não invasiva, apresenta um perfil de segurança favorável, sendo uma opção atraente para quem busca alternativas ou complementos aos tratamentos convencionais.
                </p>
              </div>
            </div>

            
            {/* Card 2: TDAH */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center gap-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <FaCommentDots className="w-12 h-12 text-green-500 mr-4" />
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-2">Transtorno de Déficit de Atenção e Hiperatividade (TDAH)</h4>
                <p className="text-sm text-gray-700">
                  Ajuda a melhorar a concentração e a atenção, reduzindo os sintomas de hiperatividade e impulsividade.
                </p>
              </div>
            </div>
            
            {/* Card 3: Ansiedade e Depressão */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center gap-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <FaHeart className="w-12 h-12 text-red-500 mr-4" />
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-2">Ansiedade e Depressão</h4>
                <p className="text-sm text-gray-700">
                  Auxilia na regulação das emoções, contribuindo para uma sensação de calma e bem-estar.
                </p>
              </div>
            </div>
            
            {/* Card 4: Transtornos do Espectro Autista (TEA) */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center gap-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <FaBolt className="w-12 h-12 text-yellow-500 mr-4" />
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-2">Transtornos do Espectro Autista (TEA)</h4>
                <p className="text-sm text-gray-700">
                  Pode melhorar aspectos como a comunicação e a interação social.
                </p>
              </div>
            </div>
            
            {/* Card 5: Epilepsia */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center gap-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <FaBrain className="w-12 h-12 text-purple-500 mr-4" />
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-2">Epilepsia</h4>
                <p className="text-sm text-gray-700">
                  Ajuda a reduzir a frequência e a intensidade das crises epilépticas.
                </p>
              </div>
            </div>
            
            {/* Card 6: Insônia e Distúrbios do Sono */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center gap-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <FaMoon className="w-12 h-12 text-indigo-500 mr-4" />
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-2">Insônia e outros Distúrbios do Sono</h4>
                <p className="text-sm text-gray-700">
                  Contribui para a normalização dos padrões de sono.
                </p>
              </div>
            </div>
            
            {/* Card 7: Desempenho Cognitivo */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center gap-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <FaSun className="w-12 h-12 text-orange-500 mr-4" />
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-2">Desempenho Cognitivo</h4>
                <p className="text-sm text-gray-700">
                  Utilizado para melhorar o foco, a memória, a capacidade de resolução de problemas e a criatividade.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      )}

      {categoriaSelecionada === 'EEG' && (
        <div className='p-5'>
          <h3 className="text-xl sm:text-2x1 font-semibold mb-6">EEG - ELETROENCEFALOGRAFIA E NEUROFEEDBACK</h3>
          <div className="flex flex-col md:flex-row items-center">
            <p className="text-sm text-gray-700">
              A Neurometria Funcional é uma abordagem de avaliação que analisa o funcionamento do Sistema Nervoso Autônomo (SNA) e outros processos neurológicos, por meio de testes e técnicas avançadas.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {/* Card TDAH */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center gap-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <FaBolt className="w-12 h-12 text-blue-500" />
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-2">Transtornos de Déficit de Atenção e Hiperatividade (TDAH)</h4>
                <p className="text-sm text-gray-700">
                  Ajuda a melhorar a concentração e a atenção, reduzindo os sintomas de hiperatividade e impulsividade.
                </p>
              </div>
            </div>

            {/* Card Ansiedade e Depressão */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center gap-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <FaFrown className="w-12 h-12 text-blue-500" />
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-2">Ansiedade e Depressão</h4>
                <p className="text-sm text-gray-700">
                  Auxilia na regulação das emoções, contribuindo para uma sensação de calma e bem-estar.
                </p>
              </div>
            </div>

            {/* Card Transtornos do Espectro Autista (TEA) */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center gap-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <FaChild className="w-12 h-12 text-blue-500" />
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-2">Transtornos do Espectro Autista (TEA)</h4>
                <p className="text-sm text-gray-700">
                  Pode melhorar aspectos como a comunicação e a interação social.
                </p>
              </div>
            </div>

            {/* Card Epilepsia */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center gap-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <FaBrain className="w-12 h-12 text-blue-500" />
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-2">Epilepsia</h4>
                <p className="text-sm text-gray-700">
                  Ajuda a reduzir a frequência e a intensidade das crises epilépticas.
                </p>
              </div>
            </div>

            {/* Card Insônia e Distúrbios do Sono */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center gap-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <FaBed className="w-12 h-12 text-blue-500" />
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-2">Insônia e outros distúrbios do sono</h4>
                <p className="text-sm text-gray-700">
                  Contribui para a normalização dos padrões de sono.
                </p>
              </div>
            </div>

            {/* Card Desempenho Cognitivo */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center gap-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <FaTachometerAlt className="w-12 h-12 text-blue-500" />
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-2">Desempenho Cognitivo</h4>
                <p className="text-sm text-gray-700">
                  Utilizado para melhorar o foco, a memória, a capacidade de resolução de problemas e a criatividade.
                </p>
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-center mb-8 mt-6">Benefícios do Neurofeedback</h2>
          {/* Grid com duas colunas para os cards em pares */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Primeiro Par de Cards */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center gap-4 transition duration-300 transform hover:scale-105 hover:shadow-xl">
              <FaHeartbeat className="w-12 h-12 text-blue-500" />
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-2">Melhoria na Qualidade de Vida</h4>
                <p className="text-sm text-gray-700">
                  Ao aliviar os sintomas de várias condições neurológicas e psicológicas, o neurofeedback pode significativamente melhorar a qualidade de vida dos indivíduos.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center gap-4 transition duration-300 transform hover:scale-105 hover:shadow-xl">
              <FaHandHoldingHeart className="w-12 h-12 text-blue-500" />
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-2">Método Não Invasivo</h4>
                <p className="text-sm text-gray-700">
                  Como uma abordagem não farmacológica e não invasiva, apresenta um perfil de segurança favorável, sendo uma opção atraente para quem busca alternativas ou complementos aos tratamentos convencionais.
                </p>
              </div>
            </div>

            {/* Segundo Par de Cards */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center gap-4 transition duration-300 transform hover:scale-105 hover:shadow-xl">
              <FaBrain className="w-12 h-12 text-blue-500" />
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-2">Desenvolvimento de Habilidades de Autorregulação</h4>
                <p className="text-sm text-gray-700">
                  O treinamento proporciona aos indivíduos a capacidade de regular suas próprias funções cerebrais, promovendo a autoconsciência e o bem-estar emocional.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center gap-4 transition duration-300 transform hover:scale-105 hover:shadow-xl">
              <FaChartLine className="w-12 h-12 text-blue-500" />
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-2">Aprimoramento Cognitivo</h4>
                <p className="text-sm text-gray-700">
                  Além de tratar condições específicas, o neurofeedback é procurado por indivíduos interessados em otimizar seu desempenho cognitivo e mental, contribuindo para um aumento na produtividade e na criatividade.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NeurocienciaClinica;

