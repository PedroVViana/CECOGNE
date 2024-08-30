import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/logo1.png'; // Importando a logo
import styles from './header.module.css'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed w-full z-10 transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'bg-gradient-to-r from-[#73b34f] via-[#479354] to-[#2c544a] text-white shadow-lg'
          : 'bg-transparent text-black'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4 px-8 md:px-16">
        <div className="text-2xl font-bold tracking-wide">
          <a href="#">
            <img src={logo} alt="Minha Empresa" className={styles.logo} />
          </a>
        </div>
        <nav className="hidden md:flex space-x-8">
          {['Home', 'Serviços', 'Artigos', 'Contato'].map((item) => (
            <a
              href={`#${item.toLowerCase()}`}
              key={item}
              className={`relative text-sm group transition duration-300 py-1 ease-in-out ${
                isScrolled ? 'text-white' : 'text-black'
              }`}
            >
              {item}
              <span
                className={`absolute left-0 bottom-0 h-1 w-full bg-transparent group-hover:bg-green-600 transition-all duration-500 ease-in-out transform group-hover:scale-x-100 scale-x-0 origin-left ${
                  isScrolled ? 'group-hover:bg-white' : 'group-hover:bg-green-600'
                }`}
              ></span>
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="focus:outline-none"
          >
            {isOpen ? (
              <FaTimes
                size={24}
                className={`transform hover:scale-110 transition-transform duration-300 ${
                  isScrolled ? 'text-white' : 'text-black'
                } rotate-0`}
              />
            ) : (
              <FaBars
                size={24}
                className={`transform hover:scale-110 transition-transform duration-300 ${
                  isScrolled ? 'text-white' : 'text-black'
                } rotate-0`}
              />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <nav
          className={`md:hidden transition-all duration-500 ease-in-out transform ${
            isOpen ? 'translate-y-0' : '-translate-y-full'
          } ${isScrolled ? 'bg-gradient-to-r from-[#73b34f] via-[#479354] to-[#2c544a] text-white' : 'bg-[#ffffff] text-black'} shadow-md`}
        >
          {['Home', 'Serviços', 'Artigos', 'Contato'].map((item) => (
            <a
              href={`#${item.toLowerCase()}`}
              key={item}
              className="block px-6 py-4 text-lg font-medium hover:bg-green-600 hover:text-white transition-colors duration-300 ease-in-out"
              onClick={toggleMenu}
            >
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;
