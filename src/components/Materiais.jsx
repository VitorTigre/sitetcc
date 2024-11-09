import React from 'react';

// Importando as imagens
import arduinoImage from '/src/assets/arduino.svg';
import resistorImage from '/src/assets/resistor.svg';
import ciImage from '/src/assets/cl.svg';
import alimentacaoImage from '/src/assets/alimentacao.svg';
import capacitorImage from '/src/assets/capacitor.svg';
import potenciometroImage from '/src/assets/potenciometro.svg';
import piezoImage from '/src/assets/piezo.svg';
import bobinaImage from '/src/assets/bobina.svg';
import mosfetImage from '/src/assets/mosfet.svg';
import bomba from '/src/assets/bomba.png';
import protoboardImage from '/src/assets/protoboard.svg';
import botao from '/src/assets/botao.png';
import fitaLed from '/src/assets/fitaLed.png';
import capacitor from '/src/assets/capacitor.png';
import displayLcd from '/src/assets/displayLcd.png';

const Card = ({ image, title, subtitle }) => {
  return (
    <div className="bg-gray-800 border-2 rounded-xl p-4 flex flex-col items-center justify-center w-full sm:w-80 md:w-96 h-auto mx-auto my-8" style={{ borderColor: '#5D8B29' }}>
      <div className="mb-4 w-full">
        <img src={image} alt={title} className="w-full h-48 object-contain rounded-lg" />
      </div>
      <h3 className="text-white text-xl font-bold mb-2 text-center">{title}</h3>
      <p className="text-white-400 text-center">{subtitle}</p>
    </div>
  );
};


const CardGrid = () => {
  const cards = [
    { image: arduinoImage, title: 'Arduino Uno', subtitle: 'Placa microcontroladora, o cérebro do sistema' },
    { image: resistorImage, title: 'Resistores 1K', subtitle: 'Alimentação de todos os componentes' },
    { image: bomba, title: 'Bomba Submersível', subtitle: 'Alimentação dos Aromas' },
    { image: alimentacaoImage, title: 'Alimentação 15V', subtitle: 'Alimentação de todos os componentes' },
    { image: capacitor, title: 'Capacitores', subtitle: 'Estabilização de toda alimentação' },
    { image: botao, title: 'Botão', subtitle: 'Ativação e Funcionalidades' },
    { image: piezoImage, title: 'Piezo Elétrico', subtitle: 'Conversão de energia elétrica em vibrações' },
    { image: fitaLed, title: 'Fita Led', subtitle: 'Decoração e Iluminação do projeto' },
    { image: displayLcd, title: 'Display Lcd 16x2', subtitle: 'Exibir informações sobre o projeto' },
    { image: protoboardImage, title: 'Protoboard', subtitle: 'Montagem do circuito de testes' },
  ];

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-center text-white mb-12">
        Quais <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">Componentes</span> <br /> Foram Utilizados?
      </h1>
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

export default CardGrid;
