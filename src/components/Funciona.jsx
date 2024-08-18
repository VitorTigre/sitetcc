import React from 'react';

// Componente Card para exibir os elementos com ícone, título e descrição
const Card = ({ title, imageSrc, description }) => {
  return (
    <div className="bg-orange-500 text-white p-6 rounded-lg shadow-md mb-8">
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
        <h1 className="text-4xl font-bold text-white">Como <span className="text-orange-500">Funciona?</span></h1>
        <p className="mt-4 text-lg">
          Este inovador sistema de difusão de aromas foi especialmente projetado para elevar a atmosfera do seu estabelecimento, combinando tecnologia avançada com facilidade de uso.
        </p>
        <p className="mt-4 text-lg">
          O funcionamento do Smell Pro baseia-se em <span className="text-orange-500">quatro elementos principais</span>, que detalharemos a seguir:
        </p>
      </header>
      
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        <img src="./src/assets/dispositivoDifusao.svg" alt="" />
        <img src="./src/assets/cartuchos.svg" alt="" />
        <img src="./src/assets/tecnologia.svg" alt="" />
        <img src="./src/assets/configuracao.svg" alt="" />
      </main>

      <section className="mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          <Card
            title="DISPOSITIVOS DE DIFUSÃO"
            imageSrc="./src/assets/lucas.svg" 
            description="Compactos e diretos, fáceis de instalar, liberam aromas de forma controlada e consistente."
          />
          <Card
            title="CARTUCHOS AROMÁTICOS"
            icon="📦"
            description="Contêm misturas exclusivas de aromas, são substituíveis, fáceis de trocar e garantem aromas frescos e contínuos."
          />
          <Card
            title="TECNOLOGIA DE MICRODIFUSÃO"
            icon="🔬"
            description="Dispersa uniformemente partículas de aroma, proporcionando uma experiência olfativa agradável sem exagero."
          />
          <Card
            title="CONFIGURAÇÃO PERSONALIZÁVEL"
            icon="⚙"
            description="Permite ajustar a intensidade e temporização de liberação do aroma, adaptando-se às necessidades específicas do espaço."
          />
        </div>
      </section>
    </div>
  );
}

export default PageFuncionamento;
