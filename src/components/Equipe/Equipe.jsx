import clenes from "../../assets/CLENES.jpg"
import murilo from "../../assets/MURILO.jpg"

const Equipe = () => {
    return (
      <section className="py-16 px-6 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Nossa Equipe
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Card de Clenes O. M. Calafange */}
          <div className="bg-gradient-to-r from-[#73b34f] to-[#479354] border border-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src={clenes} // Substitua pelo link da foto de Clenes
              alt="Clenes O. M. Calafange"
              className="w-32 h-32 rounded-full mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold text-center text-white">CLENES O. M. CALAFANGE</h3>
            <p className="mt-2 text-center text-white">Psicóloga Clínica - CRP 02/11.793</p>
            <ul className="list-none mt-6 text-white space-y-3 text-center">
              <li className="text-sm">Neuropsicóloga</li>
              <li className="text-sm">Terapeuta Cognitivo Comportamental</li>
              <li className="text-sm">Treinadora de Neurofeedback certificada pela Brain Trainer Brasil</li>
              <li className="text-sm">Membro da Associação de Terapias Cognitivas de Pernambuco</li>
              <li className="text-sm">Professora de Pós-Graduação</li>
            </ul>
          </div>
  
          {/* Card de Murilo Tolêdo Calafange */}
          <div className="bg-gradient-to-r from-[#73b34f] to-[#479354] border border-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src={murilo} // Substitua pelo link da foto de Murilo
              alt="Murilo Tolêdo Calafange"
              className="w-32 h-32 rounded-full mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold text-center text-white">MURILO TOLÊDO CALAFANGE</h3>
            <p className="mt-2 text-center text-white">Psicólogo - CRP 02/12019</p>
            <ul className="list-none mt-6 text-white space-y-3 text-center">
              <li className="text-sm">Especialista em Psicologia da Educação</li>
              <li className="text-sm">Especialista em Psicologia do Esporte e do Exercício</li>
              <li className="text-sm">Treinador de Neurofeedback certificado pela Brain Trainer Brasil</li>
              <li className="text-sm">Membro da ABRAPESP - Associação Brasileira de Psicologia do Esporte</li>
              <li className="text-sm">Biofeedback e Preparação Competitiva de várias modalidades esportivas</li>
            </ul>
          </div>
        </div>
      </section>
    );
  };
  
  export default Equipe;
  