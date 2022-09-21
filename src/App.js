import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login   from './Componentes/login/Login';
import Inicio  from './Componentes/Principal/Inicio';
import Menu from './Componentes/Menu/Menu';


function App() {
  return (
    <div className='contendor-rutas'>
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path='/Login' element = {<Login/>}></Route>
        <Route path='/' element = {<Login/>}></Route>
        <Route path='/Inicio' element = {<Inicio/>}></Route>
        <Route path='/ListaReproduccion' element = {<Inicio/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
