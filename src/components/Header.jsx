import React from 'react';

function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <div className="text-lg font-bold text-gradient">
        <span className="text-yellow-400">Smell</span>
        <span className="text-green-500">Pro</span>
      </div>
      <div className="space-x-8 text-sm">
        <a href="#funcionamento" className="hover:text-gray-400">Funcionamento</a>
        <a href="#projeto" className="hover:text-gray-400">Projeto</a>
        <a href="#materiais" className="hover:text-gray-400">Materiais</a>
        <a href="#bibliografia" className="hover:text-gray-400">Bibliografia</a>
        <a href="#integrantes" className="hover:text-gray-400">Integrantes</a>
      </div>
      <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
    </nav>
  );
}

export default Navbar;
