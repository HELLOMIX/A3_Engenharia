import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Login from './pages/Login';
import CadastroEmpresa from './pages/CadastroEmpresa';

const App = () => {
  return (
    <BrowserRouter>
      {/* Cabeçalho do site */}
      <Header />

      {/* Rota para as páginas do site */}
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/cadastro-empresa" element={<CadastroEmpresa />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;