import React from 'react';

const Integrantes = () => {
  return (
    <div className="bg-black text-white min-h-screen p-8">
      <header className="text-green-500 text-2xl font-bold mb-8">Smell Pro</header>
      <nav className="flex justify-center space-x-8 text-gray-400 mb-12">
        <a href="#" className="hover:text-white">Funcionamento</a>
        <a href="#" className="hover:text-white">Projeto</a>
        <a href="#" className="hover:text-white">Materiais</a>
        <a href="#" className="hover:text-white">Bibliografia</a>
        <a href="#" className="hover:text-white">Integrantes</a>
      </nav>
      <div className="text-center">
        <h1 className="text-4xl font-bold">Quem são os</h1>
        <h2 className="text-5xl font-bold text-orange-500 mb-12">Integrantes?</h2>
      </div>
      <div className="flex justify-center space-x-8">
        {/* Integrante 1 */}
        <div className="text-center">
          <img
            src="./src/assets/ryan.svg"
            alt="Ryan Moreira"
            className="w-48 h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold">Ryan Moreira</h3>
          <p className="text-sm text-gray-300 max-w-xs mx-auto">
          Ryan Moreira Silva, tenho 17 anos, sou fascinado em pagar boquete parafuso beeeem babado e tomar cerveja enquanto jogo sinuca, gosto de dirigir em altas velocidades após cheirar pó na bunda de travestis 
          </p>
        </div>
        {/* Integrante 2 */}
        <div className="text-center">
          <img
            src="./src/assets/lucas.svg"
            alt="Lucas Nogueira"
            className="w-48 h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold">Lucas Nogueira</h3>
          <p className="text-sm text-gray-300 max-w-xs mx-auto">
          Lucas Lopes Da Paixão Nogueira,  18 anos, gay de carterinha desde que me entendo por gente, nunca dei, mas estou disposto a desbravar novos horizontes, ou melhor, novos buracos
          </p>
        </div>
        {/* Integrante 3 */}
        <div className="text-center">
          <img
            src="./src/assets/vitor.svg"
            alt="Vitor Tigre"
            className="w-48 h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold">Vitor Tigre</h3>
          <p className="text-sm text-gray-300 max-w-xs mx-auto">
          Vitor Rodrigues Tigre, 17 anos, adoro esportes com homens suados e peludos bem coladinhos comigo, principalmente se envolvem bolas. Para mim, o melhor jogo de corpo é você em cima de mim BB
          </p>
        </div>
      </div>
    </div>
  );
};

export default Integrantes;