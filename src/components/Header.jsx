import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Função para fechar o menu mobile ao clicar em um link
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-black text-white p-4 flex items-center relative z-50">
      {/* Container para o conteúdo do header */}
      <div className="w-full flex items-center justify-between md:justify-between">
        {/* Ícone de hambúrguer para dispositivos móveis */}
        <div className="md:hidden absolute left-4">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Logotipo posicionado à esquerda no desktop e centralizado no mobile */}
        <div className="text-lg font-bold text-gradient absolute md:static md:left-4 left-1/2 transform -translate-x-1/2 md:translate-x-0">
          <span className="text-yellow-400">Smell</span>
          <span className="text-green-500">Pro</span>
        </div>

        {/* Links de navegação para desktop */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-yellow-400 text-sm">Integrantes</Link>
          <Link to="/bibliografia" className="hover:text-yellow-400 text-sm">Bibliografia</Link>
          <Link to="/materiais" className="hover:text-yellow-400 text-sm">Materiais</Link>
          <Link to="/experiencia" className="hover:text-yellow-400 text-sm">Projeto</Link>
          <Link to="/funcionamento" className="hover:text-yellow-400 text-sm">Funcionamento</Link>
        </div>
      </div>

      {/* Menu mobile */}
      <div className={`fixed inset-0 bg-black bg-opacity-90 transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden z-40`}>
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-4">
          <Link to="/" className="hover:text-yellow-400 text-2xl" onClick={handleLinkClick}>Integrantes</Link>
          <Link to="/bibliografia" className="hover:text-yellow-400 text-2xl" onClick={handleLinkClick}>Bibliografia</Link>
          <Link to="/materiais" className="hover:text-yellow-400 text-2xl" onClick={handleLinkClick}>Materiais</Link>
          <Link to="/experiencia" className="hover:text-yellow-400 text-2xl" onClick={handleLinkClick}>Projeto</Link>
          <Link to="/funcionamento" className="hover:text-yellow-400 text-2xl" onClick={handleLinkClick}>Funcionamento</Link>
        </div>
      </div>

      {/* Círculo amarelo no desktop */}
      <div className="hidden md:block w-4 h-4 bg-yellow-400 rounded-full"></div>
    </nav>
  );
}

export default Navbar;
