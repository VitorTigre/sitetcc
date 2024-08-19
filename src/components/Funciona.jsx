import React from 'react';

const Card = ({ title, imageSrc, description }) => {
  return (
    <div className="bg-gray-800 border-2 border-orange-500 text-white p-6 rounded-lg shadow-md mb-6">
      <div className="flex justify-center mb-4">
        <img src={imageSrc} alt={title} className="w-16 h-16 object-contain" />
      </div>
      <h2 className="text-lg font-semibold mb-2 text-center">{title}</h2>
      <p className="text-sm text-center">{description}</p>
    </div>
  );
};

const Card2 = ({ title, imageSrc, description }) => {
  return (
    <div className="bg-orange-500 border-2 border-green-400 text-white p-6 rounded-lg shadow-md mb-6">
      <div className="flex justify-center mb-4">
        <img src={imageSrc} alt={title} className="w-16 h-16 object-contain" />
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
        <h1 className="text-4xl font-bold text-white">Como <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">Funciona?</span></h1>
        <p className="mt-4 text-lg">
          Este inovador sistema de difusão de aromas foi especialmente projetado para elevar a atmosfera do seu estabelecimento, combinando tecnologia avançada com facilidade de uso.
        </p>
        <p className="mt-4 text-lg">
          O funcionamento do Smell Pro baseia-se em <span className="text-orange-500">quatro elementos principais</span>, que detalharemos a seguir:
        </p>
      </header>

      <section className="mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          <Card2
            title="DISPOSITIVOS DE DIFUSÃO"
            imageSrc="./src/assets/disfus.svg" 
          />

          <Card2
            title="CARTUCHOS AROMÁTICOS"
            imageSrc="./src/assets/cartAro.svg"
          />

          <Card2
            title="TECNOLOGIA DE MICRODIFUSÃO"
            imageSrc="./src/assets/tecMic.svg"

          />
          <Card2
            title="CONFIGURAÇÃO PERSONALIZÁVEL"
            imageSrc="./src/assets/confPerso.svg"
          />
        </div>
      </section>


      <section className="mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          <Card
            title="DISPOSITIVOS DE DIFUSÃO"
            imageSrc="./src/assets/disfus.svg" 
            description="Compactos e diretos, fáceis de instalar, liberam aromas de forma controlada e consistente."
          />
          <Card
            title="CARTUCHOS AROMÁTICOS"
            imageSrc="./src/assets/cartAro.svg"
            description="Contêm misturas exclusivas de aromas, são substituíveis, fáceis de trocar e garantem aromas frescos e contínuos."
          />
          <Card
            title="TECNOLOGIA DE MICRODIFUSÃO"
            imageSrc="./src/assets/tecMic.svg"
            description="Dispersa uniformemente partículas de aroma, proporcionando uma experiência olfativa agradável sem exagero."
          />
          <Card
            title="CONFIGURAÇÃO PERSONALIZÁVEL"
            imageSrc="./src/assets/confPerso.svg"
            description="Permite ajustar a intensidade e temporização de liberação do aroma, adaptando-se às necessidades específicas do espaço."
          />
        </div>
      </section>
    </div>
  );
}

export default PageFuncionamento;
