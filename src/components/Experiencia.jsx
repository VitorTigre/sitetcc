import React from 'react';

const PageProjeto = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center">
      
      {/* Seção Uma Experiência Aromática */}
      <section className="flex flex-col md:flex-row items-center justify-between p-8 w-full">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-orange-500">
            Uma <span className="text-white">Experiência</span> Aromática
          </h1>
          <p className="text-lg mt-4">
            O Smell Pro é a solução perfeita para transformar a atmosfera do seu estabelecimento
            alimentício. Utilizando tecnologia avançada e fragrâncias especialmente desenvolvidas,
            nosso sistema de difusão de aromas cria um ambiente acolhedor e atrativo que faz com que
            seus clientes queiram voltar sempre.
          </p>
          <button className="mt-6 px-6 py-3 bg-orange-500 rounded-full hover:bg-orange-600">
            Saiba mais
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src="./src/assets/vaiMeNegarUmPratoDeComida.svg" // Substitua pelo URL da sua imagem do prato
            alt="Prato"
            className="w-3/4 h-auto rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Seção Smell Pro */}
      <section className="flex flex-col md:flex-row items-center justify-between p-8 w-full">
        <div className="md:w-1/2 flex justify-center md:justify-start mt-8 md:mt-0">
          <img
            src="./src/assets/vaiMeNegarUmPratoDeComida.svg" // Substitua pelo URL da sua imagem do Smell Pro
            alt="Smell Pro"
            className="w-1/3 h-auto rounded-xl shadow-lg"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h2 className="text-3xl font-bold text-orange-500">
            Nossos <span className="text-white">Serviços</span>
          </h2>
          <p className="text-lg mt-4">
            Com o Smell Pro, você não está apenas comprando um produto.
          </p>
          <ul className="mt-4 space-y-4">
            <li className="flex items-center space-x-2">
              <span className="text-2xl">🌬</span>
              <p>O Smell Pro é uma experiência que transforma seu estabelecimento.</p>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-2xl">🍴</span>
              <p>Aromas agradáveis que convidam as pessoas a entrarem e experimentarem seu espaço.</p>
            </li>
          </ul>
          <button className="mt-6 px-6 py-3 bg-orange-500 rounded-full hover:bg-orange-600">
            Saiba mais
          </button>
        </div>
      </section>

    </div>
  );
};

export default PageProjeto;