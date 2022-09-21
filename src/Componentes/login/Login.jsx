import React from 'react'
import './Login.css'
const Login = () => {
    return (
        <div className='contenedor-login'>
            <div className='contenedor-img'></div>
            <input type='email' placeholder='hello@email.com' className='input-login' />
            <input type='password' placeholder='********' className='input-login'/>
            <button className='btn-login'>Log In</button>
        </div>
    )
}
export default Login;
