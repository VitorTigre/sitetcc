import React from 'react';

const PageIntegrantes = () => {
  return (
    <div className="bg-black text-white min-h-screen p-8">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Quem são os</h1>
        <h2 className="text-6xl font-bold bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent mb-12">Integrantes?</h2>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Integrante 1 */}
        <div className="relative">
          <img
            src="./src/assets/ryan.svg"
            alt="Ryan Moreira"
            className="w-48 h-48 object-cover rounded-lg mb-4 mx-auto md:ml-16"
          />
          <h3 className="text-center text-xl font-bold">Ryan Moreira</h3>
          <p className="text-center text-sm text-gray-300 max-w-xs mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore repellat praesentium nobis nesciunt assumenda tempora laborum necessitatibus sit, itaque impedit omnis dignissimos reprehenderit accusantium doloremque dolorum corrupti quos aut consequatur!
          </p>
        </div>

        {/* Integrante 2 */}
        <div className="relative">
          <img
            src="./src/assets/lucas.svg"
            alt="Lucas Nogueira"
            className="w-48 h-48 object-cover rounded-lg mb-4 mx-auto md:ml-16"
          />
          <h3 className="text-center text-xl font-bold">Lucas Nogueira</h3>
          <p className="text-center text-sm text-gray-300 max-w-xs mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, pariatur veniam animi nostrum rerum dolorem id aperiam numquam omnis facere sed, atque possimus voluptate mollitia autem quisquam illo, libero tenetur?
          </p>
        </div>
        
        {/* Integrante 3 */}
        <div className="relative">
          <img
            src="./src/assets/vitor.svg"
            alt="Vitor Tigre"
            className="w-48 h-48 object-cover rounded-lg mb-4 mx-auto md:ml-16"
          />
          <h3 className="text-center text-xl font-bold">Vitor Tigre</h3>
          <p className="text-center text-sm text-gray-300 max-w-xs mx-auto">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur quos nam molestias doloribus blanditiis cupiditate accusantium ducimus earum? Iusto dolor dolores sit quam culpa molestias sapiente eaque quod, unde velit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageIntegrantes;