import React from 'react';

const Func = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center py-10">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
        Como <span className="text-yellow-500">Funciona?</span>
      </h2>
      <p className="text-lg md:text-xl text-gray-300 max-w-3xl text-center mb-12 px-4">
        Este inovador sistema de difusão de aromas foi especialmente projetado para elevar a atmosfera do seu estabelecimento, combinando <span className="text-yellow-500">tecnologia avançada</span> com facilidade de uso.
        O funcionamento do Smell Pro baseia-se em <span className="text-yellow-500">quatro elementos principais</span>, que detalharemos a seguir:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 max-w-4xl">
        <div className="flex flex-col items-center text-center">
          <div className="bg-yellow-500 rounded-lg p-4">
            <FaSyncAlt className="text-5xl text-black" />
          </div>
          <h3 className="text-xl font-semibold mt-4">Dispositivos de Difusão</h3>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="bg-yellow-500 rounded-lg p-4">
            <FaCogs className="text-5xl text-black" />
          </div>
          <h3 className="text-xl font-semibold mt-4">Cartuchos Aromáticos</h3>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="bg-yellow-500 rounded-lg p-4">
            <FaMicrochip className="text-5xl text-black" />
          </div>
          <h3 className="text-xl font-semibold mt-4">Tecnologia de Microdifusão</h3>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="bg-yellow-500 rounded-lg p-4">
            <FaSlidersH className="text-5xl text-black" />
          </div>
          <h3 className="text-xl font-semibold mt-4">Configuração Personalizável</h3>
        </div>
      </div>

      <div className="bg-gray-800 text-white mt-16 p-8 rounded-lg w-full max-w-4xl">
        <h4 className="text-lg md:text-xl font-semibold text-yellow-500 mb-4">DISPOSITIVOS DE DIFUSÃO</h4>
        <div className="flex items-center">
          <FaSyncAlt className="text-3xl text-yellow-500 mr-4" />
          <p className="text-gray-300">
            Compactos e discretos, fáceis de instalar, liberam aromas de forma controlada e consistente.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Func;