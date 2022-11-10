import React, { useContext } from 'react'
import './Login.css'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../App';
import ListaReproduccion from '../ListaReproduccion/ListaReproduccion';
const Login = () => {
    //LLAMOS AL CONTEXTO PARA DAR PIE AL LOGIN
    const { handleChangeUser } = useContext(UserContext);
    const handleSubmit = async() => {
        handleChangeUser('HUGO');
    }
    return (
        <div className='contenedor-login'>
            <div className='contenedor-img'></div>
            <input type='email' placeholder='hello@email.com' className='input-login' />
            <input type='password' placeholder='********' className='input-login' />
            <button className='btn-login' onClick={() => { handleSubmit() }}>Log In</button>

        </div>
    )
}
export default Login;
