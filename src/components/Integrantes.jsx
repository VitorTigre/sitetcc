import React from 'react';

const PageIntegrantes = () => {
  return (
    <div className="bg-black text-white min-h-screen p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">Quem são os</h1>
        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent leading-loose">
          Integrantes?
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Integrante 1 */}
        <div className="text-center">
          <img
            src="./src/assets/ryan.svg"
            alt="Ryan Moreira"
            className="w-48 h-48 md:w-72 h-72 object-cover rounded-lg mb-4 mx-auto"
          />
          <h3 className="text-xl font-bold">Ryan Moreira</h3>
          <p className="text-sm text-gray-300 max-w-xs mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
        </div>

        {/* Integrante 2 */}
        <div className="text-center">
          <img
            src="./src/assets/lucas.svg"
            alt="Lucas Nogueira"
            className="w-48 h-48 md:w-72 h-72 object-cover rounded-lg mb-4 mx-auto"
          />
          <h3 className="text-xl font-bold">Lucas Nogueira</h3>
          <p className="text-sm text-gray-300 max-w-xs mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
        </div>

        {/* Integrante 3 */}
        <div className="text-center">
          <img
            src="./src/assets/vitor.svg"
            alt="Vitor Tigre"
            className="w-48 h-48 md:w-72 h-72 object-cover rounded-lg mb-4 mx-auto"
          />
          <h3 className="text-xl font-bold">Vitor Tigre</h3>
          <p className="text-sm text-gray-300 max-w-xs mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageIntegrantes;
