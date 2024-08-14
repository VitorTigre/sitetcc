import React from 'react';
import Integrantes from './components/Integrantes';
import Bibliografia from './components/Bibliografia';
import Materiais from './components/Materiais';
import Experiencia from './components/Experiencia';
import Funciona from './components/Funciona'


function App() {
  return (
    <div>
      <Integrantes />
      <Bibliografia />
      <Materiais />
      <Experiencia />
      <Funciona />
    </div>
  );
}

export default App;