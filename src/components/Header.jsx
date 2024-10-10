import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-black text-white p-4 flex items-center relative z-50 pt-6">
      <div className="w-full flex items-center justify-between">
        <div className="md:hidden absolute left-4">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        <div className="text-lg font-bold text-gradient absolute md:static left-1/2 transform -translate-x-1/2 md:translate-x-0">
          <span className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-green-600 bg-clip-text text-transparent">SmellPro</span>
        </div>

        <div className="hidden md:flex flex-1 justify-center space-x-8 mb-4">
          <Link to="/integrantes" className="hover:text-yellow-400 text-sm">Integrantes</Link>
          <Link to="/bibliografia" className="hover:text-yellow-400 text-sm">Bibliografia</Link>
          <Link to="/materiais" className="hover:text-yellow-400 text-sm">Materiais</Link>
          <Link to="/projeto" className="hover:text-yellow-400 text-sm">Projeto</Link> {/* Corrigido para /projeto */}
          <Link to="/funcionamento" className="hover:text-yellow-400 text-sm">Funcionamento</Link>
        </div>
      </div>

      <div className={`fixed inset-0 bg-black bg-opacity-90 transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden z-40`}>
        <div className="absolute top-4 left-4 z-50">
          <button onClick={toggleMenu} aria-label="Close menu">
            <FiX size={24} className="text-white" />
          </button>
        </div>

        <div className="flex flex-col h-full justify-center items-center space-y-8 p-4">
          <Link to="/integrantes" className="hover:text-yellow-400 text-2xl" onClick={handleLinkClick}>Integrantes</Link>
          <Link to="/bibliografia" className="hover:text-yellow-400 text-2xl" onClick={handleLinkClick}>Bibliografia</Link>
          <Link to="/materiais" className="hover:text-yellow-400 text-2xl" onClick={handleLinkClick}>Materiais</Link>
          <Link to="/projeto" className="hover:text-yellow-400 text-2xl" onClick={handleLinkClick}>Projeto</Link> {/* Corrigido para /projeto */}
          <Link to="/funcionamento" className="hover:text-yellow-400 text-2xl" onClick={handleLinkClick}>Funcionamento</Link>
        </div>
      </div>

      <div className="hidden md:block w-4 h-4 bg-yellow-400 rounded-full"></div>
    </nav>
  );
}

export default Navbar;
