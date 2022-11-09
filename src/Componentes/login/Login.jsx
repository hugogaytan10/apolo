import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom';
const Login = () => {

    return (
        <div className='contenedor-login'>
            <div className='contenedor-img'></div>
            <input type='email' placeholder='hello@email.com' className='input-login' />
            <input type='password' placeholder='********' className='input-login'/>
            <button className='btn-login'><Link to={"/Inicio"} className='item-nav'>Log In</Link></button>
            
        </div>
    )
}
export default Login;
