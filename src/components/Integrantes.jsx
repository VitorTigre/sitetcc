import React from 'react';

// Importando as imagens
import ryanImage from '/src/assets/ryan.svg';
import lucasImage from '/src/assets/lucas.svg';
import vitorImage from '/src/assets/tigrinhoarrumado.jpg';

const PageIntegrantes = () => {
  return (
    <div className="bg-black text-white min-h-screen p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">Quem são os</h1>
        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent h-28 leading-loose">
          Integrantes?
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Ryan Moreira */}
        <div className="relative text-center p-0.5 bg-gradient-to-r from-amber-600 to-amber-400 rounded-3xl md:p-0 md:rounded-none"> {/* Remover borda e cantos arredondados no desktop */}
          <div className="bg-black rounded-3xl md:rounded-none p-6"> {/* Remover cantos arredondados no desktop */}
            <img
              src={ryanImage}
              alt="Ryan Moreira"
              className="w-48 h-48 md:w-72 md:h-72 object-cover rounded-lg md:rounded-none mb-4 mx-auto"
            />
            <h3 className="text-xl font-bold">Ryan Moreira</h3>
            <p className="text-sm text-gray-300 max-w-xs mx-auto">
            Tenho 17 anos, fascinado na área do T.I e pretendo seguir nessa área como developer, gosto muito de codar e tenho vontade de desenvolver mais para que eu possa entrar numa boa empresa
            </p>
          </div>
        </div>

        {/* Lucas Lopes */}
        <div className="relative text-center p-0.5 bg-gradient-to-r from-amber-600 to-amber-400 rounded-3xl md:p-0 md:rounded-none"> {/* Remover borda e cantos arredondados no desktop */}
          <div className="bg-black rounded-3xl md:rounded-none p-6"> {/* Remover cantos arredondados no desktop */}
            <img
              src={lucasImage}
              alt="Lucas Nogueira"
              className="w-48 h-48 md:w-72 md:h-72 object-cover rounded-lg md:rounded-none mb-4 mx-auto"
            />
            <h3 className="text-xl font-bold">Lucas Nogueira</h3>
            <p className="text-sm text-gray-300 max-w-xs mx-auto">
            Tenho 18 anos e, apesar do meu interesse por T.I., estou decidido a explorar novos horizontes na área da aviação. Além disso, sou apaixonado por design e tive a oportunidade de ser responsável por essa área no projeto.
            </p>
          </div>
        </div>

        {/* Vitor Tigre */}
        <div className="relative text-center p-0.5 bg-gradient-to-r from-amber-600 to-amber-400 rounded-3xl md:p-0 md:rounded-none "> {/* Remover borda e cantos arredondados no desktop */}
          <div className="bg-black rounded-3xl md:rounded-none p-6 "> {/* Remover cantos arredondados no desktop */}
            <img
              src={vitorImage}
              alt="Vitor Tigre"
              className="w-48 h-48 md:w-72 md:h-72 object-cover rounded-3xl  mb-4 mx-auto"
            />
            <h3 className="text-xl font-bold">Vitor Tigre</h3>
            <p className="text-sm text-gray-300 max-w-xs mx-auto">
            Tenho 17 anos, sou fascinado pela área de T.I. e pretendo seguir carreira como desenvolvedor. Gosto muito de programar e tenho vontade de me especializar para que possa entrar em uma boa empresa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageIntegrantes;
