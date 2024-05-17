import './App.css';

import { Route, Routes } from 'react-router-dom';

import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import CadastroEvento from './pages/CadastroEvento';
import ListaEventos from './pages/ListaEventos';
import AlteracaoEvento from './pages/AlteracaoEvento';
import DetalhesEvento from './pages/DetalhesEvento';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/cadastro' element={<CadastroEvento />} />
          <Route path='/lista' element={<ListaEventos />} />
          <Route path='/alteracao/:id' element={<AlteracaoEvento />} />
          <Route path='/detalhes/:id' element={<DetalhesEvento />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
