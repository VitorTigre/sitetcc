import React from 'react';

const Card = ({ image, title, subtitle }) => {
  return (
    <div className="bg-gray-800 border-2 border-green-400 rounded-xl p-4 flex flex-col items-center justify-center w-full sm:w-80 md:w-96 h-auto mx-auto my-8">
      <div className="mb-4 w-full">
        <img src={image} alt={title} className="w-full h-48 object-contain rounded-lg" />
      </div>
      <h3 className="text-white text-xl font-bold mb-2 text-center">{title}</h3>
      <p className="text-gray-400 text-center">{subtitle}</p>
    </div>
  );
};




const CardGrid = () => {
  const cards = [
    { image: './src/assets/arduino.svg', title: 'Arduino R3', subtitle: 'Placa microcontroladora, o cérebro do sistema' },
    { image: './src/assets/resistor.svg', title: 'Resistor 1K', subtitle: 'Alimentação de todos os componentes' },
    { image: './src/assets/cl.svg', title: 'CI 555', subtitle: 'Estabilização de toda alimentação' },
    { image: './src/assets/alimentacao.svg', title: 'Alimentação 15V', subtitle: 'Alimentação de todos os componentes' },
    { image: './src/assets/capacitor.svg', title: 'Capacitores de Cerâmica', subtitle: 'Estabilização de toda alimentação' },
    { image: './src/assets/potenciometro.svg', title: 'Potenciômetro', subtitle: 'Variação da potência de acordo com a posição' },
    { image: './src/assets/piezo.svg', title: 'Piezo Elétrico', subtitle: 'Conversão de energia elétrica em vibrações' },
    { image: './src/assets/bobina.svg', title: 'Bobina 680uH', subtitle: 'Condução de energia da fonte de alimentação' },
    { image: './src/assets/mosfet.svg', title: 'Mosfet', subtitle: 'Aumento da eficiência dos circuitos de comutação' },
    { image: './src/assets/protoboard.svg', title: 'Protoboard', subtitle: 'Montagem do circuito de testes' },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            subtitle={card.subtitle}
          />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;