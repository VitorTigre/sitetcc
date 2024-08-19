import React from 'react';

const PageBibliografia = () => {
  return (
    <div className="bg-black text-white min-h-screen px-4 sm:px-8">
      <main className="bg-black rounded-lg p-4 sm:p-8">
        <h2 className="text-4xl md:text-6xl font-bold text-white-500 mb-6">
          Por que o{' '}
          <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
            Smell Pro?
          </span>
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 text-white mb-6 md:mb-0">
            <p className="mb-4 text-justify mr-6">
              Escolhemos o tema do nosso trabalho, o dispositivo "Smell Pro" para aromatização em restaurantes, devido à crescente relevância e eficácia do uso de tecnologias sensoriais no mercado atual, assim como os avanços no desenvolvimento de Narizes Eletrônicos e marketing olfativo.
            </p>
            <p className="mb-4 text-justify mr-6">
              De acordo com o artigo de Lisboa (2009), Narizes Eletrônicos são instrumentos inovadores capazes de detectar e classificar odores de maneira automática, sem as limitações do uso de painéis humanos. Eles consistem em sistemas de{' '}
              <span className="text-orange-500">sensores químicos</span>{' '}
              associados à inteligência artificial, permitindo uma análise precisa e confiável da qualidade do ar e das emissões odorantes. Essas características tornam os Narizes Eletrônicos uma ferramenta valiosa para a aromatização de ambientes, como restaurantes, onde a qualidade e a intensidade dos aromas são cruciais para a experiência do cliente.
            </p>
            <p className="mb-4 text-justify mr-6">
              Além disso, conforme explorado por Dias (2023), o marketing sensorial, especialmente o marketing olfativo, tem se mostrado uma estratégia eficaz para proporcionar uma experiência de compra mais satisfatória e atrativa. A utilização de{' '}
              <span className="text-orange-500">aromas específicos</span>{' '}
              pode aumentar a percepção positiva dos consumidores sobre o ambiente, influenciar suas emoções e até mesmo suas decisões de compra. Em restaurantes, um aroma experiência gastronômica, fazendo com que os clientes se sintam mais confortáveis e propensos a retornar.
            </p>
            <p className="mb-4 text-justify mr-6">
              Portanto, a escolha do "Smell Pro" está alinhada com essas descobertas científicas, visando proporcionar um ambiente mais acolhedor e agradável em restaurantes, utilizando tecnologias avançadas para otimizar a experiência dos clientes através do olfato.
            </p>
          </div>
          <div className="md:w-1/3">
            <img
              src="./src/assets/mulher.svg"
              alt="Mulher cheirando uma toalha"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </main>
      
      <footer className="mt-8 bg-gray-700 text-black rounded-lg p-4 sm:p-6 border-2 border-orange-500 mb-6">
        <h3 className="text-lg md:text-xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
          ENCONTRE MAIS INFORMAÇÕES NOS LINKS ABAIXO:
        </h3>
        <ul>
          <li className="mb-2 text-white break-words">
            <strong>DIAS, Fernanda Beatriz De Medeiros.</strong> Marketing olfativo no comércio varejista: estudo multicaso em empresas de Natal/Rio Grande do Norte. UFRN, 2023.
            <br />
            Disponível em:{' '}
            <a href="https://repositorio.ufrn.br/handle/123456789/57062" className="text-blue-500">
              https://repositorio.ufrn.br/handle/123456789/57062
            </a>. Acesso em: 19 maio 2024.
          </li>
          <li className="mb-2 text-white break-words">
            <strong>LISBOA, Henrique De Melo.</strong> Gestão de odores: fundamentos do Nariz Eletrônico. SciELO, 2009.
            <br />
            Disponível em:{' '}
            <a href="https://www.scielo.br/j/esa/a/W9brD6CDt4ThpSQLmy48grg/" className="text-blue-500">
              https://www.scielo.br/j/esa/a/W9brD6CDt4ThpSQLmy48grg/
            </a>. Acesso em: 19 maio 2024.
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default PageBibliografia;
