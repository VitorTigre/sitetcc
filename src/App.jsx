import React from 'react';
import Integrantes from './components/Integrantes';
import Bibliografia from './components/Bibliografia';
import Materiais from './components/Materiais';
import Header from './components/Header'
import Experiencia from './components/Experiencia';


function App() {
  return (
    <div>
      <Header />
      <Integrantes />
      <Bibliografia />
      <Materiais />
      <Experiencia />
    </div>
  );
}

export default App;