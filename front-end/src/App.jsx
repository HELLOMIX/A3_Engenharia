import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Login from './pages/Login';
import CadastroEmpresa from './pages/CadastroEmpresa';
import CadastroVaga from './pages/CadastroVaga';
import ListaVagas from './components/SingleVaga';
import Vaga from './pages/Vaga';
import Home from './pages/Home';
import Curriculo from './pages/Curriculo';

const App = () => {
  return (
    <BrowserRouter>
      {/* Cabeçalho do site */}
      {/*<Header />*/}

      {/* Rota para as páginas do site */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro-empresa" element={<CadastroEmpresa />} />
        <Route path='/cadastro-vaga' element={<CadastroVaga />} />
        <Route path='/home' element={<Home />} />
        <Route path='/curriculo' element={<Curriculo />}></Route>
        {/*<Route path='/' element={<ListaVagas />} />*/}
        {/*<Route path='/vaga/:id' element={<Vaga />} />*/}
      </Routes>
    </BrowserRouter>
  );
};

export default App;