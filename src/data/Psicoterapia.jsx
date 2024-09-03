import React, { useState } from 'react';
import TCC from "../assets/TCC.jpg"

const Psicoterapia = () => {
  // Estado para controlar a categoria selecionada
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('TCC');

  // Função para definir a categoria selecionada
  const handleCategoriaClick = (categoria) => {
    setCategoriaSelecionada(categoria);
  };

  return (
    <div className="z-0 text-gray-800">
    {/* Botões para selecionar categorias */}
    <div className="flex flex-wrap space-x-0 space-y-4 md:space-x-4 md:space-y-0 mb-6">
      <button
        onClick={() => handleCategoriaClick('TCC')}
        className={`w-full md:w-auto border border-gray-200 py-2 px-4 rounded-lg shadow-md ${categoriaSelecionada === 'TCC' ? 'bg-[#479354] text-white' : 'bg-white'} transition-all duration-300 hover:scale-105`}
      >
        TCC - TERAPIA COGNITIVO COMPORTAMENTAL
      </button>
      <button
        onClick={() => handleCategoriaClick('TE')}
        className={`w-full md:w-auto border border-gray-200 py-2 px-4 rounded-lg shadow-md ${categoriaSelecionada === 'TE' ? 'bg-[#479354] text-white' : 'bg-white'} transition-all duration-300 hover:scale-105`}
      >
        TE - TERAPIA DE ESQUEMA
      </button>
      <button
        onClick={() => handleCategoriaClick('pilares')}
        className={`w-full md:w-auto border border-gray-200 py-2 px-4 rounded-lg shadow-md ${categoriaSelecionada === 'pilares' ? 'bg-[#479354] text-white' : 'bg-white'} transition-all duration-300 hover:scale-105`}
      >
        PSICOTERAPIA BASEADA EM NEUROCIÊNCIA
      </button>
    </div>

      {/* Conteúdo baseado na categoria selecionada */}
      {categoriaSelecionada === 'TCC' && (
        <div className="text-gray-800">
        <h3 className="text-2xl font-semibold mb-6">TCC - TERAPIA COGNITIVO COMPORTAMENTAL</h3>
        
        {/* Container principal com grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
          {/* Imagem */}
          <div className='col-span-1'>
            <img src={TCC} alt="Terapia Cognitivo Comportamental" className="rounded-lg shadow-lg w-full h-auto" />
          </div>
          
          {/* Texto */}
          <p className="text-sm text-gray-700">
            A psicoterapia é um processo de autoconhecimento e transformação que tem o poder de mudar vidas. 
            Dentre as diversas abordagens psicoterapêuticas, a Terapia Cognitivo-Comportamental (TCC) se destaca 
            por sua eficácia comprovada e por seu foco em resultados práticos e concretos. Desenvolvida por Aaron 
            Beck, a TCC é uma abordagem baseada em evidências científicas, sendo uma das mais recomendadas para 
            o tratamento de diversos transtornos mentais, como depressão, ansiedade, fobias, entre outros.
          </p>
        </div>
      
        {/* Seção de O Que é TCC */}
        <h4 className='text-sm font-semibold mb-6'>O QUE É A TERAPIA COGNITIVO COMPORTAMENTAL?</h4>
        <p className="mb-6 text-sm text-gray-700">
          A TCC é uma abordagem estruturada, focada em ajudar o paciente a entender e modificar padrões de pensamento distorcidos 
          e comportamentos disfuncionais. O princípio fundamental da TCC é que nossos pensamentos, sentimentos e comportamentos estão 
          interconectados. Muitas vezes, enfrentamos dificuldades emocionais devido a crenças negativas e automáticas que construímos 
          ao longo da vida e sem uma percepção clara dessa construção. A TCC tem um teor pedagógico, ao ensinar o paciente a identificar 
          esses padrões, desafiá-los e substituí-los por pensamentos mais realistas e funcionais, levando a mudanças comportamentais positivas.
        </p>
      
        {/* Seção de Pilares */}
        <h4 className='text-sm font-semibold mb-6'>PRINCIPAIS PILARES DA TCC</h4>
        <ul className="list-disc list-none space-y-4 text-left mb-6">
          <li className="text-sm bg-white relative text-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 transition-all duration-300 hover:scale-105">
            <strong>Crenças Centrais: </strong>As crenças centrais são as convicções mais profundas que temos sobre nós mesmos, o mundo e o
            futuro. Essas crenças formam a base de como interpretamos nossas experiências e influenciam
            profundamente nossos pensamentos e comportamentos. Por exemplo, uma crença central como
            "eu sou incompetente" pode levar a sentimentos de inadequação e a evitar desafios, perpetuando
            um ciclo de autoavaliação negativa. Os temas relacionados às crenças centrais são: desamor,
            desvalor e desamparo.
          </li>
          <li className="text-sm bg-white relative text-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 transition-all duration-300 hover:scale-105">
            <strong>Crenças Intermediárias: </strong>São suposições ou regras que decorrem dessas crenças centrais. Elas são mais acessíveis ao
            nosso consciente e costumam ditar como agimos em situações cotidianas, geralmente através da
            regra “se-então”. Um exemplo de crença intermediária seria "se eu cometer um erro, as pessoas
            vão me julgar negativamente", o que pode gerar comportamentos de evitação ou perfeccionismo.
          </li>
          <li className="text-sm bg-white relative text-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 transition-all duration-300 hover:scale-105">
            <strong>Pensamentos Automáticos: </strong>São pensamentos, em forma de foto, imagens ou frases, que aparecem na mente, quando a
            pessoa se depara com uma situação que dispara um gatilho emocional. São comuns em forma de
            distorções cognitivas, que são padrões de pensamento errôneos que distorcem a realidade de
            maneira negativa. Essas distorções incluem pensamentos como "tudo ou nada", generalização
            excessiva, catastrofização, entre outros.
          </li>
        </ul>
      
        {/* Seção de Como Funciona */}
        <h4 className='text-sm font-semibold mb-6'>COMO FUNCIONA A TCC NA PRÁTICA?</h4>
        <p className="mb-6 text-sm text-2x1 text-gray-700">
          Na TCC, o paciente é um participante ativo no processo terapêutico. Com a orientação do terapeuta, ele aprende: 
          a identificar situações-gatilho, mudar e monitorar suas distorções cognitivas e, dessa forma, melhorar a forma como 
          pensa e se sente em relação a si mesmo, aos outros e sobre o futuro, de forma a evocar pensamentos, emoções e comportamentos 
          mais realistas e adaptativos. Esse processo envolve a aplicação de técnicas e estratégias específicas, como a reestruturação 
          cognitiva, a exposição gradual a situações temidas, e a prática de habilidades sociais, entre outras.
        </p>
      </div>      
      )}

      {categoriaSelecionada === 'TE' && (
        <div>
          <h3 className="text-2xl font-semibold mb-6">TE - TERAPIA DE ESQUEMA</h3>
          <p className="mb-6 text-sm text-gray-700">
          A Terapia do Esquema é uma abordagem psicoterapêutica inovadora, desenvolvida por Jeffrey Young,
que integra elementos de diversas escolas terapêuticas, como a Terapia Cognitivo-Comportamental
(TCC), a Gestalt-terapia, a psicanálise, a teoria do apego de John Bowlby e a teoria construtivista. Essa
combinação única permite um tratamento mais abrangente e integrado, voltado para a compreensão e
mudança de padrões emocionais e comportamentais enraizados, conhecidos como Esquemas Iniciais
Desadaptativos (EID’s).
          </p>
          <p className="mb-6 text-sm text-gray-700">
          A Terapia do Esquema se desenvolve a partir da Terapia Cognitivo Comportamental, mas centra-se no
reconhecimento e atendimento de necessidades emocionais básicas que não foram satisfeitas na
infância, o que é visto como crucial para a mudança terapêutica. Todos nós temos necessidades
emocionais básicas que precisam ser atendidas para o nosso desenvolvimento emocional saudável
          </p>
          <h4 className='text-sm font-semibold mb-6'>Entre essas necessidades estão:</h4>
          <ul className="list-disc list-none space-y-4 text-left mb-6 ml-6">
            <li className="text-sm"><strong>Conexão e vínculo seguro (segurança, proteção, estabilidade, cuidado): </strong>Sentir-se amado,
            cuidado e protegido.</li>
            <li className="text-sm"><strong>Autonomia, competência e sentido de identidade: </strong>Ser capaz de se expressar e agir de forma
            independente.
            </li>
            <li className="text-sm"><strong>Limites realistas e autocontrole: </strong>Ter regras e limites claros que proporcionam segurança e
            orientação.</li>
            <li className="text-sm"><strong>Liberdade para expressar necessidades e emoções: </strong>Ser capaz de expressar sentimentos e
            desejos sem medo de julgamento.
            </li>
            <li className="text-sm"><strong>Espontaneidade e lazer: </strong>Ter a oportunidade de brincar, explorar e ser criativo.</li>
          </ul>
          <p className="mb-6 text-sm text-gray-700">
          Quando essas necessidades não são adequadamente supridas, os Esquemas Iniciais
Desadaptativos começam a se formar, em combinação com outros elementos. Esses esquemas são
padrões emocionais e cognitivos negativos que podem influenciar como percebemos a nós mesmos, os
outros e o mundo ao nosso redor, muitas vezes levando a comportamentos autodestrutivos e
relacionamentos insatisfatórios, sendo preditores de transtornos mentais futuros.
          </p>
          <h4 className='text-sm font-semibold mb-6'>Esquemas Iniciais Desadaptativos</h4>
          <p className="mb-6 text-sm text-gray-700">
          Os Esquemas Iniciais Desadaptativos são moldados na infância e adolescência, pela vivência de
situações estressoras pontuais, impactantes e/ou recorrentes; o tipo de temperamento; contextos
sociais; a dinâmica de funcionamento da família de origem (incluindo aspectos transgeracionais, isto é,
que aparecem em várias gerações); suprimento inadequado ou insuficiente das necessidades
emocionais básicas e o tipo de vínculo com as figuras principais de cuidado. 
          </p>
          <h4 className='text-sm font-semibold mb-6'>Jeffrey Young identificou 18 EID’s:</h4>
          <ul className="list-disc list-decimal space-y-4 text-left mb-6 ml-6">
            <li className="text-sm"><strong>Abandono/Instabilidade:</strong> A percepção de que as figuras de apoio mais importantes vão se ausentar, emocional ou fisicamente.</li>
            <li className="text-sm"><strong>Desconfiança/Abuso:</strong> Expectativa de que os outros irão abusar, machucar, humilhar, enganar ou manipular.</li>
            <li className="text-sm"><strong>Privação Emocional:</strong> Sentimento de que as necessidades de apoio emocional não serão atendidas de forma adequada pelos
            outros.</li>
            <li className="text-sm"><strong>Defectividade (defeito)/Vergonha:</strong> Sentimento de ser defeituoso, ruim, indigno ou inferior.</li>
            <li className="text-sm"><strong>Isolamento Social/Alienação:</strong> Sentimento de ser diferente ou excluído do resto do mundo.</li>
            <li className="text-sm"><strong>Dependência/Incompetência:</strong> Crença de que não se pode realizar tarefas ou enfrentar desafios de forma independente</li>
            <li className="text-sm"><strong>Vulnerabilidade ao Perigo ou Doença:</strong> Medo excessivo de catástrofes iminentes, seja médica, financeira, ou de segurança.</li>
            <li className="text-sm"><strong>Emaranhamento/Self Subdesenvolvido:</strong> Envolvimento emocional excessivo com uma ou mais figuras significativas, à custa da individualidade
            própria.</li>
            <li className="text-sm"><strong>Fracasso:</strong> Crença de ser incapaz de alcançar o sucesso comparável aos outros.</li>
            <li className="text-sm"><strong>Subjugação:</strong> Excesso de subordinação às vontades dos outros, com o objetivo de evitar raiva, punição ou abandono.</li>
            <li className="text-sm"><strong>Autossacrifício:</strong> Foco exagerado em atender às necessidades dos outros, à custa do próprio bem-estar.</li>
            <li className="text-sm"><strong>Busca de Aprovação/Reconhecimento:</strong> Preocupação excessiva com a obtenção de aprovação, reconhecimento ou atenção dos outros</li>
            <li className="text-sm"><strong>Negativismo e Pessimismo:</strong> Foco exagerado nos aspectos negativos da vida, e uma expectativa constante de fracasso ou de que as
            coisas irão mal.</li>
            <li className="text-sm"><strong>Inibição Emocional:</strong> Supressão excessiva das emoções e impulsos, devido ao medo de desagradar, ser criticado ou perder
            o controle</li>
            <li className="text-sm"><strong>Padrões Inflexíveis/Crítica Exagerada:</strong> Exigência interna de que se deve atingir padrões extremamente elevados de desempenho, geralmente
            levando à crítica excessiva e sentimentos de pressão.</li>
            <li className="text-sm"><strong>Merecimento (Direitos Exagerados)/Grandiosidade:</strong> Crença de que se é superior aos outros, ou que se tem direito a privilégios especiais ou a uma maior
            consideração.
            </li>
            <li className="text-sm"><strong>Autocontrole/Autodisciplina Insuficientes:</strong> Dificuldade em tolerar frustração ou evitar a gratificação imediata, o que resulta em dificuldades de
            autodisciplina.</li>
            <li className="text-sm"><strong>Postura Punitiva:</strong> Crença de que as pessoas devem ser punidas de maneira severa por seus erros ou falhas.
            </li>
          </ul>
          <div className='bg-white relative text-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 transition-all duration-300'>
            <p className="mb-6 text-sm text-gray-700">
              A Terapia do Esquema oferece uma abordagem estruturada e integrativa para a mudança profunda e
              duradoura, abordando as origens dos problemas emocionais e comportamentais e promovendo uma
              vida mais plena e satisfatória. Ao trabalhar com um terapeuta de esquema, você pode:
            </p>
            <ul className="list-disc list-decimal space-y-4 text-left mb-6 ml-6">
              <li className="text-sm">Identificar e compreender seus esquemas: descobrir como suas experiências passadas
              moldaram seus padrões atuais de pensamento e comportamento e como isso interfere e
              prejudica suas escolhas atuais.</li>
              <li className="text-sm">Identificar situações-gatilho e desenvolver estratégias eficazes de enfrentamento, mudança e
              monitoramento.</li>
              <li className="text-sm">. Transformar relacionamentos e melhorar a autoestima: Construir relacionamentos mais
              saudáveis e uma visão mais positiva de si mesmo.</li>
            </ul>
          </div>
        </div>
      )}

      {categoriaSelecionada === 'pilares' && (
        <div className='p-5'>
          <h3 className="text-2xl font-semibold mb-6">POR QUE PSICOTERAPIA BASEADA EM NEUROCIÊNCIA?</h3>
          <p className="mb-6 text-sm text-gray-700">
            A psicoterapia moderna, especialmente quando fundamentada na neurociência,
            oferece uma abordagem poderosa e eficaz para o tratamento de uma ampla gama de
            desafios emocionais e comportamentais. 
          </p>
          <p className="mb-6 text-sm text-gray-700">
            A neurociência estuda o cérebro e seus processos, explicando como as experiências e
            os pensamentos moldam a arquitetura neuronal e a personalidade, por exemplo.
            Entender os mecanismos cerebrais por trás das emoções, comportamentos e padrões
            de pensamento é crucial para criar intervenções terapêuticas eficazes.
          </p>
          <p className="mb-6 text-sm text-gray-700">
            A neurociência demonstra como as experiências traumáticas ou estressoras precoces
            podem moldar o cérebro, estabelecendo padrões rígidos de pensamento e
            comportamento desadaptativos. Esses padrões, uma vez estabelecidos, podem ser
            resistentes a mudanças. No entanto, a neuroplasticidade — que é a capacidade do
            cérebro de se reorganizar através de novas aprendizagens, formando novas conexões
            neuronais — é um conceito chave que fundamenta as práticas da TCC e da Terapia do
            Esquema.
          </p>
        </div>
      )}
    </div>
  );
};

export default Psicoterapia;
