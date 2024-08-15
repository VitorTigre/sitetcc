import React from 'react';

const ComponentsUsedPage = () => {
  const components = [
    {
      image: './src/assets/arduino.svg',
    },
    {
      image: './src/assets/resistor.svg',
    },
    {
      image: './src/assets/cl.svg',
    },
    {
      image: './src/assets/alimentacao.svg',
    },
    {
        image: './src/assets/capacitor.svg',
    },
    {
        image: './src/assets/potenciometro.svg',
    },
    {
        image: './src/assets/mosfet.svg',
    },
    {
        image: './src/assets/protoboard.svg',
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen p-8">  
      <main className="bg-black rounded-lg p-8">
        <h2 className="text-4xl font-bold text-center text-white mb-6">Quais <span className="text-orange-500">Componentes</span> Foram Utilizados?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {components.map((component, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg flex flex-col items-center text-center">
              <img src={component.image} alt={component.name} className="h-32 mb-4"/>
              <h3 className="text-xl font-bold text-white">{component.name}</h3>
              <p className="text-gray-400">{component.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ComponentsUsedPage;