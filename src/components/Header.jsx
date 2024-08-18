import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <div className="text-lg font-bold text-gradient">
        <span className="text-yellow-400">Smell</span>
        <span className="text-green-500">Pro</span>
      </div>
      <div className="space-x-8 text-sm">
        <Link to="/" className="hover:text-gray-400">Integrantes</Link>
        <Link to="/bibliografia" className="hover:text-gray-400">Bibliografia</Link>
        <Link to="/materiais" className="hover:text-gray-400">Materiais</Link>
        <Link to="/experiencia" className="hover:text-gray-400">Projeto</Link>
        <Link to="/funcionamento" className="hover:text-gray-400">Funcionamento</Link>
        
      </div>
      <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
    </nav>
  );
}

export default Navbar;
