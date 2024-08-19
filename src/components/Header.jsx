import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Alterna o estado de menu aberto/fechado
  };

  const handleLinkClick = () => {
    setMenuOpen(false); // Fecha o menu ao clicar em um link
  };

  return (
    <nav className="bg-black text-white p-4 flex items-center relative z-50 pt-6">
      {/* Container para o conteúdo do header */}
      <div className="w-full flex items-center justify-between">
        {/* Ícone de hambúrguer para dispositivos móveis */}
        <div className="md:hidden absolute left-4">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Logotipo centralizado */}
        <div className="text-lg font-bold text-gradient absolute md:static left-1/2 transform -translate-x-1/2 md:translate-x-0">
          <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">SmellPro</span>
        </div>

        {/* Links de navegação para desktop centralizados */}
        <div className="hidden md:flex flex-1 justify-center space-x-8">
          <Link to="/" className="hover:text-yellow-400 text-sm">Integrantes</Link>
          <Link to="/bibliografia" className="hover:text-yellow-400 text-sm">Bibliografia</Link>
          <Link to="/materiais" className="hover:text-yellow-400 text-sm">Materiais</Link>
          <Link to="/experiencia" className="hover:text-yellow-400 text-sm">Projeto</Link>
          <Link to="/funcionamento" className="hover:text-yellow-400 text-sm">Funcionamento</Link>
        </div>
      </div>

      {/* Menu mobile */}
      <div className={`fixed inset-0 bg-black bg-opacity-90 transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden z-40`}>
        {/* Botão de fechar no topo do menu mobile */}
        <div className="absolute top-4 left-4 z-50">
          <button onClick={toggleMenu} aria-label="Close menu">
            <FiX size={24} className="text-white" />
          </button>
        </div>

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
