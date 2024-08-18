import React from 'react';

const PageIntegrantes = () => {
  return (
    <div className="bg-black text-white min-h-screen p-8">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Quem são os</h1>
        <h2 className="text-6xl font-bold bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent mb-12">Integrantes?</h2>
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
            className="w-98 h-48 object-cover rounded-lg mb-4"
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

export default PageIntegrantes;