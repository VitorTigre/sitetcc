import React from 'react';

const PageProjeto = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center">
      
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-12 w-full bg-black">
  {/* Texto */}
  <div className="md:w-1/2">
    <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
      Uma <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">Experiência</span> <br />
      Aromática
    </h1>
    <p className="text-lg md:text-xl mt-6 text-gray-300">
      O Smell Pro é a solução perfeita para transformar a atmosfera do seu estabelecimento alimentício. Utilizando tecnologia avançada e fragrâncias especialmente desenvolvidas, nosso sistema de difusão de aromas cria um ambiente acolhedor e atrativo que faz com que seus clientes queiram voltar sempre.
    </p>
    <button className="mt-8 px-8 py-3 border border-gray-300 rounded-full text-gray-300 hover:bg-white hover:text-black transition duration-300">
      Saiba mais
    </button>
  </div>

  {/* Imagem */}
  <div className="md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0">
    <img
      src="./src/assets/vaiMeNegarUmPratoDeComida.svg" 
      alt="Prato de Comida"
      className="w-72  md:w-96 h-auto object-cover rounded-xl shadow-xl"
    />
  </div>
</section>


      {/* Seção Smell Pro */}
      <section className="flex flex-col md:flex-row items-center justify-between p-8 w-full">
        <div className="md:w-1/2 flex justify-center md:justify-start mt-8 md:mt-0">
          <img
            src="./src/assets/caixa.svg" // Substitua pelo URL da sua imagem do Smell Pro
            alt="Smell Pro"
            className="w-1/3 h-auto rounded-xl shadow-lg"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
            <span className="text-4xl font-bold text-white" >Nossos</span> <span className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-lg mt-4">
            Com o Smell Pro, você não está apenas comprando um produto.
          </p>
          <ul className="mt-4 space-y-4">
            <li className="flex items-center space-x-2">
              <div className="bg-orange-500 rounded-full p-2 mb-2">
                <img src="./src/assets/vento.svg" alt="Vento" />
              </div>
              <p>O Smell Pro é uma experiência que transforma seu estabelecimento.</p>
            </li>
            <li className="flex items-center space-x-2">
              <div className="bg-orange-500 rounded-full p-2 mb-2">
                <img src="./src/assets/garfoFaca.svg" alt="Garfo e faca" />
              </div>
              <p>Aromas agradáveis que convidam as pessoas a entrarem e experimentarem seu espaço.</p>
            </li>
          </ul>
          <button className="mt-6 px-6 py-3 bg-orange-500 rounded-full hover:bg-orange-600">
            Saiba mais
          </button>
        </div>
      </section>

      {/* Seção de Fragrâncias */}
      <section className="p-8 w-full">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent mb-8">
        <span className="text-4xl font-bold text-white" >Nossos</span> Fragrâncias
        </h1>
        <div className="flex justify-center space-x-8 mb-8">
          {/* Ícone Chocolate */}
          <div className="text-center">
            <div className="bg-orange-500 rounded-full p-4 mb-4">
              <img src="./src/assets/queijo.svg" alt="Chocolate" />
            </div>
            <p>Chocolate</p>
          </div>
          {/* Ícone Queijo */}
          <div className="text-center">
            <div className="bg-orange-500 rounded-full p-4 mb-4">
              <img src="./src/assets/queijo.svg" alt="Queijo" />
            </div>
            <p>Queijo</p>
          </div>
          {/* Ícone Leite Condensado */}
          <div className="text-center">
            <div className="bg-orange-500 rounded-full p-4 mb-4">
              <img src="./src/assets/queijo.svg" alt="Leite Condensado" />
            </div>
            <p>Leite Condensado</p>
          </div>
        </div>
        <p className="text-center max-w-xl mx-auto mb-8">
          Nossas fragrâncias são formuladas com ingredientes naturais, garantindo não só um aroma irresistível, mas também a segurança e bem-estar dos seus clientes. Nosso dispositivo é compacto, discreto e permite ajustes de intensidade e temporização, proporcionando total controle sobre a experiência olfativa do seu ambiente.
        </p>
        <div className="flex justify-center">
          <button className="bg-gray-800 text-white py-2 px-4 rounded">
            Saiba mais
          </button>
        </div>
      </section>

      {/* Seção Ramo Alimentício */}
      <section className="mt-16 p-8 w-full">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent mb-8">
          Ramo Alimentício
        </h2>
        <p className="text-center max-w-xl mx-auto mb-8">
          No ramo alimentício, a experiência do cliente é tudo. E uma das maneiras mais eficazes de criar uma conexão emocional com seus clientes é através dos sentidos. O Smell Pro foi desenvolvido especificamente para ajudar donos de restaurantes, cafeterias, padarias, pizzarias e outros estabelecimentos alimentícios a criar uma atmosfera que não apenas acolhe, mas também encanta.
        </p>
        <div className="flex justify-center space-x-8 mb-8">
          {/* Ícone Cozinha */}
          <div className="text-center">
            <div className="bg-orange-500 rounded-full p-4 mb-4">
              <img src="./src/assets/sopa.svg" alt="Sopa" />
            </div>
            <p>Cozinha</p>
          </div>
          {/* Ícone Café */}
          <div className="text-center">
            <div className="bg-orange-500 rounded-full p-4 mb-4">
              <img src="./src/assets/hotCoffee.svg" alt="Café" />
            </div>
            <p>Café</p>
          </div>
          {/* Ícone Pão */}
          <div className="text-center">
            <div className="bg-orange-500 rounded-full p-4 mb-4">
              <img src="./src/assets/pao.svg" alt="Pão" />
            </div>
            <p>Pão</p>
          </div>
          {/* Ícone Pizza */}
          <div className="text-center">
            <div className="bg-orange-500 rounded-full p-4 mb-4">
              <img src="./src/assets/pizza.svg" alt="Pizza" />
            </div>
            <p>Pizza</p>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-gray-800 text-white py-2 px-4 rounded">
            Saiba mais
          </button>
        </div>
      </section>
      
    </div>
  );
};

export default PageProjeto;
