import './App.css';
import React, { createContext, useReducer } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './Componentes/login/Login';
import Inicio from './Componentes/Principal/Inicio';
import Menu from './Componentes/Menu/Menu';
import Lista from './Componentes/ListaReproduccion/ListaReproduccion';
import { appReducer } from './Componentes/Context/Reducer';

export const UserContext = createContext(null);
function App() {
  //valores iniciales del contexto
  const initialState = {
    usuario: '',
    correo: ''
  }
  //manejo de estado de los valores del contexto con reducer
  //recibe nuestro reducer y nuestros valores iniciales
  const [state, dispatch] = useReducer(appReducer, initialState);
  //funcion para cambiar el nombre de usuario
  const handleChangeUser = (value) => {
    dispatch({ type: 'CAMBIAR_USUARIO', payload: value })
  }
  return (
    <div className='contendor-rutas'>
      <UserContext.Provider value={{ ...state, handleChangeUser }}>
        <BrowserRouter>
          {
            state.usuario !== '' &&
            <Menu />
          }
          <Routes>
            {
              state.usuario !== '' ?
              <>
                <Route path='/' element={<Inicio />}></Route>
                <Route path='/Login' element={<Login />}></Route>
                <Route path='/Inicio' element={<Inicio />}></Route>
                <Route path='/ListaReproduccion' element={<Lista />}></Route>
              </>
              :
              <>
                <Route path='/' element={<Login />}></Route>
                <Route path='/Login' element={<Login />}></Route>
              </>
            }

          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
