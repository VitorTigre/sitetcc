import React from 'react';

// Importando as imagens
import disfusImage from '/src/assets/disfus.svg';
import cartAroImage from '/src/assets/cartAro.svg';
import tecMicImage from '/src/assets/tecMic.svg';
import confPersoImage from '/src/assets/confPerso.svg';

const Card = ({ title, imageSrc, description }) => {
  return (
    <div className="bg-gray-800 border-2 border-orange-500 text-white p-6 rounded-lg shadow-md mb-6 w-full sm:w-[50rem]"> {/* Largura responsiva */}
      <h2 className="text-lg font-semibold mb-2 text-center bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">{title}</h2>
      <div className='flex items-center justify-center p-8'> 
        <div className="bg-orange-500 flex justify-center mb-4 border-2 rounded-xl p-4" style={{ borderColor: '#5D8B29' }}>
          <img src={imageSrc} alt={title} className="w-20 h-20 sm:w-24 sm:h-24 object-contain" /> {/* Tamanho da imagem ajustado */}
        </div>
        <p className="text-sm text-center w-full px-6">{description}</p> {/* Ajustando a largura do texto */}
      </div>
    </div>
  );
};

const Card2 = ({ title, imageSrc, description }) => {
  return (
    <div className="bg-orange-500 border-2 border-green-400 text-white p-6 rounded-lg shadow-md mb-6 w-full sm:w-96 h-72 flex flex-col items-center justify-center"> {/* Largura responsiva */}
      <div className="flex justify-center mb-4">
        <img src={imageSrc} alt={title} className="w-20 h-20 sm:w-24 sm:h-24 object-contain" /> {/* Tamanho da imagem ajustado */}
      </div>
      <h2 className="text-lg font-semibold mb-2 text-center">{title}</h2>
      <p className="text-sm text-center">{description}</p>
    </div>
  );
};

// Componente principal App
function PageFuncionamento() {
  return (
    <div className="bg-black text-white min-h-screen p-8">
      <header className="text-center mb-12">
        <h1 className="text-[40px] sm:text-[100px] font-bold text-white">Como <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">Funciona?</span></h1>
        <br />
        <p className="mt-4 text-[20px] sm:text-[30px]">
          Este inovador sistema de difusão de aromas foi especialmente projetado para{' '} <span className="text-orange-500">elevar</span>{' '}a atmosfera do seu estabelecimento, combinando{' '} <span className="text-orange-500">tecnologia avançada</span>{' '} com{' '} <span className="text-orange-500">facilidade de uso</span>.
        </p>
        <p className="mt-4 text-[20px] sm:text-[30px]">
          O funcionamento do Smell Pro baseia-se em <span className="text-orange-500">quatro elementos principais</span>, que detalharemos a seguir:
        </p>
      </header>

      <br />

      <section className="mt-12 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card2 
            title="DISPOSITIVOS DE DIFUSÃO"
            imageSrc={disfusImage} 
          />
          <Card2
            title="CARTUCHOS AROMÁTICOS"
            imageSrc={cartAroImage}
          />
          <Card2
            title="TECNOLOGIA DE MICRODIFUSÃO"
            imageSrc={tecMicImage}
          />
          <Card2
            title="CONFIGURAÇÃO PERSONALIZÁVEL"
            imageSrc={confPersoImage}
          />
        </div>
      </section>

      <section className="mt-12 flex justify-center">
        <div className="flex flex-col items-center max-w-6xl mx-auto space-y-6">
          <div className="grid grid-cols-1 gap-8">
            <Card
              title="DISPOSITIVOS DE DIFUSÃO"
              imageSrc={disfusImage}
              description="Compactos e diretos, fáceis de instalar, liberam aromas de forma controlada e consistente."
            />
            <Card
              title="CARTUCHOS AROMÁTICOS"
              imageSrc={cartAroImage}
              description="Contêm misturas exclusivas de aromas, são substituíveis, fáceis de trocar e garantem aromas frescos e contínuos."
            />
            <Card
              title="TECNOLOGIA DE MICRODIFUSÃO"
              imageSrc={tecMicImage}
              description="Dispersa uniformemente partículas de aroma, proporcionando uma experiência olfativa agradável sem exagero."
            />
            <Card
              title="CONFIGURAÇÃO PERSONALIZÁVEL"
              imageSrc={confPersoImage}
              description="Permite ajustar a intensidade e temporização de liberação do aroma, adaptando-se às necessidades específicas do espaço."
            />
          </div>
        </div>
      </section>

    </div>
  );
}

export default PageFuncionamento;
