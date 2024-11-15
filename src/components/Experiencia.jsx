import React, { useRef} from 'react';
import comidaImg from '/src/assets/vaiMeNegarUmPratoDeComida.svg'; // Atualize conforme necessário
import caixaImg from '/src/assets/caixa.svg';
import chocolateImg from '/src/assets/chocolate.svg';
import ventoImg from '/src/assets/vento.svg';
import garfoFacaImg from '/src/assets/garfoFaca.svg';
import queijoImg from '/src/assets/queijo.svg';
import sopaImg from '/src/assets/sopa.svg';
import hotCoffeeImg from '/src/assets/hotCoffee.svg';
import paoImg from '/src/assets/pao.svg';
import pizzaImg from '/src/assets/pizza.svg';
import ReactPlayer from 'react-player';

const PageProjeto = () => {

  const videoRef = useRef(null);

  // Função para rolar até o vídeo com suavidade
  const scrollToVideo = () => {
    if (videoRef.current) {
      videoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center">

      {/* Seção de Experiência Aromática */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 w-full bg-black">
        <div className="md:w-1/2 w-full text-center md:text-left">
          <h1 className="text-[50px] md:text-[100px] font-bold text-white leading-tight">
            Uma <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">Experiência</span> <br />
            Aromática
          </h1>
          <p className="text-[20px] md:text-[30px] mt-6 text-white-300">
            O Smell Pro é a solução perfeita para {' '}
            <span className="text-orange-500">transformar</span>{' '}
            a atmosfera do seu estabelecimento alimentício. Utilizando tecnologia avançada e {' '}
            <span className="text-orange-500">fragrâncias</span>{' '}
            especialmente desenvolvidas, nosso sistema de difusão de aromas cria um ambiente acolhedor e atrativo que faz com que seus clientes queiram voltar sempre.
          </p>
          <button
            className="mt-8 px-6 py-3 border border-gray-300 rounded-full text-gray-300 hover:bg-white hover:text-black transition duration-300"
            onClick={scrollToVideo} // Chama a função ao clicar
          >
            Saiba mais
          </button>
        </div>

        <div className="md:w-1/2 w-full flex justify-center md:justify-end mt-12 md:mt-0">
          <img
            src={comidaImg}
            alt="Prato de Comida"
            className="w-full md:w-[600px] max-w-[600px] object-cover rounded-xl shadow-xl"
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
          <h2 className="text-[50px] md:text-[100px] font-bold text-white leading-tight">
            Nossos <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-[20px] md:text-[30px] mt-4">
            Com o Smell Pro, você não está apenas comprando um produto.
          </p>
          <ul className="mt-4 space-y-4">
            <li className="flex items-center space-x-2">
              <div className="bg-orange-500 rounded-full p-4 mb-2 flex items-center justify-center">
                <img src={ventoImg} alt="Vento" className="w-16 h-16 object-contain" />
              </div>
              <p className="text-[20px] md:text-[30px]">O Smell Pro é uma experiência que transforma seu estabelecimento.</p>
            </li>
            <li className="flex items-center space-x-2">
              <div className="bg-orange-500 rounded-full p-4 mb-2 flex items-center justify-center">
                <img src={garfoFacaImg} alt="Garfo e faca" className="w-16 h-16 object-contain" />
              </div>
              <p className="text-[20px] md:text-[30px]">Aromas agradáveis que convidam as pessoas a entrarem e experimentarem seu espaço.</p>
            </li>
          </ul>
          
          
        </div>
      </section>

      {/* Seção de Fragrâncias */}
      <section className="p-8 w-full">
        <h1 className="text-[50px] md:text-[100px] font-bold text-center text-white leading-tight">
          Nossas <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">Fragrâncias</span>
        </h1>
        <br />
        <br />

        <div className="flex flex-wrap justify-center space-x-8 mb-8">
          {/* Ícone Chocolate */}
          <div className="text-center">
            <div className="bg-orange-500 rounded-full p-4 mb-4 flex items-center justify-center">
              <img src={chocolateImg} alt="Chocolate" className="w-24 h-24 object-contain" />
            </div>
            <div className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
              <p className="text-[20px] md:text-[30px]">Chocolate</p>
            </div>
          </div>
          {/* Ícone Queijo */}
          <div className="text-center">
            <div className="bg-orange-500 rounded-full p-4 mb-4 flex items-center justify-center">
              <img src={queijoImg} alt="Queijo" className="w-24 h-24 object-contain" />
            </div>
            <div className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
              <p className="text-[20px] md:text-[30px]">Queijo</p>
            </div>
          </div>
        </div>
        <p className="text-justify text-[20px] md:text-[30px] max-w-3xl mx-auto mb-8">
  Nossas fragrâncias são formuladas com ingredientes{' '}
  <span className="text-orange-500"> naturais</span>, garantindo não só um{' '}
  <span className="text-orange-500"> aroma</span>{' '}
  irresistível, mas também a segurança e bem-estar dos seus clientes. Nosso dispositivo é compacto, discreto e permite ajustes de intensidade e temporização, proporcionando total controle sobre a experiência olfativa do seu ambiente.
</p>

      </section>

      {/* Seção Ramo Alimentício */}
      <section className="mt-16 p-8 w-full">
        <h2 className="text-[50px] md:text-[100px] font-bold text-center text-white leading-tight">
          Ramo <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">Alimentício</span> 
        </h2>

        <br />
        <br />

        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <div className="grid grid-cols-2 gap-8 w-full md:flex md:flex-wrap md:justify-center">
            {/* Ícone Cozinha */}
            <div className="text-center mb-8 flex flex-col items-center">
              <div className="bg-orange-500 rounded-full p-4 mb-4 flex items-center justify-center">
                <img src={sopaImg} alt="Sopa" className="w-24 h-24 object-contain" />
              </div>
            </div>
            {/* Ícone Café */}
            <div className="text-center mb-8 flex flex-col items-center">
              <div className="bg-orange-500 rounded-full p-4 mb-4 flex items-center justify-center">
                <img src={hotCoffeeImg} alt="Café" className="w-24 h-24 object-contain" />
              </div>
            </div>
            {/* Ícone Pão */}
            <div className="text-center mb-8 flex flex-col items-center">
              <div className="bg-orange-500 rounded-full p-4 mb-4 flex items-center justify-center">
                <img src={paoImg} alt="Pão" className="w-24 h-24 object-contain" />
              </div>
            </div>
            {/* Ícone Pizza */}
            <div className="text-center mb-8 flex flex-col items-center">
              <div className="bg-orange-500 rounded-full p-4 mb-4 flex items-center justify-center">
                <img src={pizzaImg} alt="Pizza" className="w-24 h-24 object-contain" />
              </div>
            </div>
          </div>
        </div>
        <p className="text-justify text-[20px] md:text-[30px] max-w-3xl mx-auto mb-8">
          No ramo alimentício, a {' '}
          <span className="text-orange-500">experiência do cliente</span>{' '} é tudo. E uma das maneiras mais eficazes de criar uma conexão emocional com seus clientes é através dos sentidos. O Smell Pro foi desenvolvido especificamente para ajudar donos de restaurantes, cafeterias, padarias, pizzarias e outros estabelecimentos alimentícios a criar uma atmosfera que não apenas acolhe, mas também encanta.
        </p>
      </section>

{/* Seção de vídeos */}
<section className="w-full px-6 md:px-16 py-12 bg-black">
  <h1 className="text-[50px] md:text-[100px] font-bold text-center text-white leading-tight">
    <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">Funcionamento e Modo de Uso</span>
  </h1>
  
  {/* Contêiner para os vídeos */}
  <div className="mt-12 flex flex-col gap-8 items-center">
    
    {/* Video 1 */}
    <div ref={videoRef} className="relative w-full max-w-[90%] md:max-w-[70%] mx-auto">
      <div className="border-4 border-amber-400 rounded-lg">
        <ReactPlayer
          url="https://youtu.be/MN4YiJ5Mx7M"
          width="100%" // Player vai preencher a largura do contêiner
          height="500px" // A altura será ajustada automaticamente para manter a proporção
          playing
          controls
        />
      </div>
    </div>

    {/* Video 2 */}
    <div className="relative w-full max-w-[90%] md:max-w-[70%] mx-auto">
      <div className="border-4 border-amber-400 rounded-lg">
        <ReactPlayer
          url="https://youtu.be/5vHHV__g0Ls"
          width="100%" // Player vai preencher a largura do contêiner
          height="500px" // A altura será ajustada automaticamente para manter a proporção
          playing
          controls
        />
      </div>
    </div>

  </div>
</section>
    </div>
  );
};

export default PageProjeto;