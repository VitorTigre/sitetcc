import React from 'react';
import comidaImg from '/src/assets/vaiMeNegarUmPratoDeComida.svg'; // Atualize conforme necessário
import caixaImg from '/src/assets/caixa.svg';
import chocolateImg from '/src/assets/chocolate.svg';
import ventoImg from '/src/assets/vento.svg';
import garfoFacaImg from '/src/assets/garfoFaca.svg';
import leiteImg from '/src/assets/leite.svg';
import queijoImg from '/src/assets/queijo.svg';
import sopaImg from '/src/assets/sopa.svg';
import hotCoffeeImg from '/src/assets/hotCoffee.svg';
import paoImg from '/src/assets/pao.svg';
import pizzaImg from '/src/assets/pizza.svg';

const PageProjeto = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center">

      {/* Seção de Experiência Aromática */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 w-full bg-black">
        <div className="md:w-1/2 w-full text-center md:text-left">
          <h1 className="text-[100px] font-bold text-white leading-tight">
            Uma <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">Experiência</span> <br />
            Aromática
          </h1>
          <p className="text-[30px] mt-6 text-white-300">
            O Smell Pro é a solução perfeita para {' '}
            <span className="text-orange-500">transformar</span>{' '}  
            a atmosfera do seu estabelecimento alimentício. Utilizando tecnologia avançada e {' '}
            <span className="text-orange-500">fragrâncias</span>{' '} especialmente desenvolvidas, nosso sistema de difusão de aromas cria um ambiente acolhedor e atrativo que faz com que seus clientes queiram voltar sempre.
          </p>
          <button className="mt-8 px-6 py-3 border border-gray-300 rounded-full text-gray-300 hover:bg-white hover:text-black transition duration-300">
            Saiba mais
          </button>
        </div>

        <div className="md:w-1/2 w-full flex justify-center md:justify-end mt-12 md:mt-0">
          <img
            src={comidaImg}
            alt="Prato de Comida"
            className="w-3/4 md:w-96 max-w-[400px] object-cover rounded-xl shadow-xl"
          />
        </div>
      </section>

      {/* Seção de Serviços */}
      <section className="flex flex-col md:flex-row items-center justify-between p-8 w-full">
        <div className="md:w-1/2 flex justify-center md:justify-start mt-8 md:mt-0">
          <img
            src={caixaImg}
            alt="Smell Pro"
            className="w-1/2 mb-8 md:w-96 object-cover rounded-xl shadow-xl"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h2 className= "text-[100px] font-bold text-white leading-tight">
            Nossos <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-[30px] mt-4">
            Com o Smell Pro, você não está apenas comprando um produto.
          </p>
          <ul className="mt-4 space-y-4">
            <li className="flex items-center space-x-2">
              <div className="bg-orange-500 rounded-full p-2 mb-2">
                <img src={ventoImg} alt="Vento" />
              </div>
              <p className="text-[30px]">O Smell Pro é uma experiência que transforma seu estabelecimento.</p>
            </li>
            <li className="flex items-center space-x-2">
              <div className="bg-orange-500 rounded-full p-2 mb-2">
                <img src={garfoFacaImg} alt="Garfo e faca" />
              </div>
              <p className="text-[30px]">Aromas agradáveis que convidam as pessoas a entrarem e experimentarem seu espaço.</p>
            </li>
          </ul>
          <button className="mt-8 px-8 py-3 border border-gray-300 rounded-full text-gray-300 hover:bg-white hover:text-black transition duration-300">
            Saiba mais
          </button>
        </div>
      </section>

      {/* Seção de Fragrâncias */}
      <section className="p-8 w-full">
        <h1 className="text-[100px] font-bold text-center text-white leading-tight">
          Nossas <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">Fragrâncias</span> <br />
        </h1>


        <div className="flex justify-center space-x-8 mb-8">
          {/* Ícone Chocolate */}
          <div className="text-center">
            <div className="bg-orange-500 rounded-full p-4 mb-4">
              <img src={chocolateImg} alt="Chocolate" />
            </div>
            <p className="text-[30px]">Chocolate</p>
          </div>
          {/* Ícone Queijo */}
          <div className="text-center">
            <div className="bg-orange-500 rounded-full p-4 mb-4">
              <img src={queijoImg} alt="Queijo" />
            </div>
            <p className="text-[30px]">Queijo</p>
          </div>
          {/* Ícone Leite Condensado */}
          <div className="text-center">
            <div className="bg-orange-500 rounded-full p-4 mb-4">
              <img src={leiteImg} alt="Leite Condensado" />
            </div>
            <p className="text-[30px]">Leite Condensado</p>
          </div>
        </div>
        <p className="text-center text-[30px] max-w-xl mx-auto mb-8">
          Nossas fragrâncias são formuladas com ingredientes {' '}
          <span className="text-orange-500">naturais</span>{' '}, garantindo não só um {' '}
          <span className="text-orange-500">aroma</span>{' '}
          irresistível, mas também a segurança e bem-estar dos seus clientes. Nosso dispositivo é compacto, discreto e permite ajustes de intensidade e temporização, proporcionando total controle sobre a experiência olfativa do seu ambiente.
        </p>
        <div className="flex justify-center">
          <button className="mt-8 px-8 py-3 border border-gray-300 rounded-full text-gray-300 hover:bg-white hover:text-black transition duration-300">
            Saiba mais
          </button>
        </div>
      </section>

      {/* Seção Ramo Alimentício */}
      <section className="mt-16 p-8 w-full">
        <h2 className="text-[100px] font-bold text-center bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent mb-8">
          Ramo Alimentício
        </h2>
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <div className="grid grid-cols-2 gap-8 w-full md:flex md:flex-wrap md:justify-center">
            {/* Ícone Cozinha */}
            <div className="text-center mb-8 flex flex-col items-center">
              <div className="bg-orange-500 rounded-full p-4 mb-4">
                <img src={sopaImg} alt="Sopa" className="w-24 h-24 object-cover" />
              </div>
            </div>
            {/* Ícone Café */}
            <div className="text-center mb-8 flex flex-col items-center">
              <div className="bg-orange-500 rounded-full p-4 mb-4">
                <img src={hotCoffeeImg} alt="Café" className="w-24 h-24 object-cover" />
              </div>
            </div>
            {/* Ícone Pão */}
            <div className="text-center mb-8 flex flex-col items-center">
              <div className="bg-orange-500 rounded-full p-4 mb-4">
                <img src={paoImg} alt="Pão" className="w-24 h-24 object-cover" />
              </div>
            </div>
            {/* Ícone Pizza */}
            <div className="text-center mb-8 flex flex-col items-center">
              <div className="bg-orange-500 rounded-full p-4 mb-4">
                <img src={pizzaImg} alt="Pizza" className="w-24 h-24 object-cover" />
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-[30px] max-w-xl mx-auto mb-8">
          No ramo alimentício, a {' '}
          <span className="text-orange-500">experiência do cliente</span>{' '} é tudo. E uma das maneiras mais eficazes de criar uma conexão emocional com seus clientes é através dos sentidos. O Smell Pro foi desenvolvido especificamente para ajudar donos de restaurantes, cafeterias, padarias, pizzarias e outros estabelecimentos alimentícios a criar uma atmosfera que não apenas acolhe, mas também encanta.
        </p>
      </section>
    </div>
  );
};

export default PageProjeto;
