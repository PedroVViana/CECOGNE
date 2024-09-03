import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 py-16 px-6 md:px-12 lg:px-20">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-center gap-16">
        {/* Informações de Contato */}
        <div className="flex flex-col items-center text-center lg:text-left lg:items-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Informações de Contato</h3>
          <div className="flex items-center text-gray-700 mb-4">
            <FaMapMarkerAlt className="text-[#479354] mr-3" size={28} />
            <span className="text-lg">Endereço da Clínica, Rua Exemplo, 123, Cidade, Estado</span>
          </div>
          <div className="flex items-center text-gray-700 mb-4">
            <FaPhone className="text-[#479354] mr-3" size={28} />
            <span className="text-lg">(XX) XXXX-XXXX</span>
          </div>
          <div className="flex items-center text-gray-700 mb-4">
            <FaEnvelope className="text-[#479354] mr-3" size={28} />
            <span className="text-lg">email@clinicexemplo.com</span>
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="flex flex-col items-center text-center lg:text-left lg:items-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Redes Sociais</h3>
          <div className="flex items-center text-gray-700 hover:text-[#25D366] mb-4">
            <FaWhatsapp className="text-[#479354] mr-3 hover:text-[#25D366]" size={28} />
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-[#25D366]">
              WhatsApp
            </a>
          </div>
          <div className="flex items-center text-gray-700 hover:text-[#E4405F] mb-4">
            <FaInstagram className="text-[#479354] mr-3 hover:text-[#E4405F]" size={28} />
            <a href="https://www.instagram.com/seuperfil" target="_blank" rel="noopener noreferrer" className="text-lg">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
