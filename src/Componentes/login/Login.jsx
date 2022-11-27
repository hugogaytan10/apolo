import React, { useContext, useState } from 'react'
import './Login.css'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../App';
import ListaReproduccion from '../ListaReproduccion/ListaReproduccion';
import { InsertUser } from './InsertUser';
const Login = () => {
    //bandera de abrir registro
    const [pop, setPop] = useState(false);
    //LLAMOS AL CONTEXTO PARA DAR PIE AL LOGIN
    const { handleChangeUser } = useContext(UserContext);
    const handleSubmit = async(nameUser) => {
        handleChangeUser(nameUser);
    }
    const getUser = async() => {
        try{
            const email = document.getElementById('mail').value; 
            const pass = document.getElementById('contrasenia').value; 
            const peticion =  await fetch(`http://localhost:8090/api/usuarios/${email}/${pass}`);
            const data =  await peticion.json();
            handleSubmit(data.full_name)
        }catch(err){console.log(err)}
    }

    return (
        <div className='contenedor-login'>
            <div className='contenedor-img'></div>
            <input type='email' placeholder='hello@email.com' className='input-login' id='mail' />
            <input type='password' placeholder='********' className='input-login' id='contrasenia'/>
            <button className='btn-login' onClick={() => { getUser(); }}>Log In</button>
            <p onClick={()=>{setPop(true)}} className='no-tengo-cuenta'>No tengo cuenta</p>
            {
                pop &&
                <>
                    <p className='cerrar-pop' onClick={()=>{setPop(false)}}>X</p>
                    <InsertUser/>
                </>
            }
        </div>
    )
}
export default Login;
