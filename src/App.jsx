import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Integrantes from './components/Integrantes';
import Bibliografia from './components/Bibliografia';
import Materiais from './components/Materiais';
import Header from './components/Header';
import Experiencia from './components/Experiencia';
import Funciona from './components/Funciona';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={< Experiencia />} />
        <Route path="/bibliografia" element={<Bibliografia />} />
        <Route path="/materiais" element={<Materiais />} />
        <Route path="/integrantes" element={<Integrantes />} />
        <Route path="/funcionamento" element={<Funciona />} />
        
      </Routes>
    </Router>
  );
}

export default App;
