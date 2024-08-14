import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">

      <main className="flex flex-col items-center text-center mt-20 px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
          Uma <span className="text-yellow-500">Experiência</span> Aromática
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12">
          O Smell Pro é a solução perfeita para transformar a atmosfera do seu estabelecimento alimentício. 
          Utilizando tecnologia avançada e fragrâncias especialmente desenvolvidas, nosso sistema de difusão 
          de aromas cria um ambiente acolhedor e atrativo que faz com que seus clientes queiram voltar sempre.
        </p>
        <button className="px-8 py-3 bg-yellow-500 text-black rounded-lg text-lg font-semibold hover:bg-yellow-600">
          Saiba mais
        </button>
      </main>

      <div className="mt-12">
        <img src="./src/assets/vaiMeNegarUmPratoDeComida.svg" alt="Comida aromática" className="w-full max-w-md" />
      </div>
    </div>
  );
}

export default HomePage;