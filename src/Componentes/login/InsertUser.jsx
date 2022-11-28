import React, { useState } from 'react'

export const InsertUser = () => {
    const [user, setUser] = useState(
        {
            full_name: '',
            email: '',
            pass: ''
        }
    );
    const insert = async() => {
        console.log(user)
        try{
            const peticion = await fetch(`http://localhost:8090/api/usuario/insertar`, {
                method: 'POST',
                mode: 'cors',
                cache: 'default',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer-when-downgrade',
                body: JSON.stringify(user)
            })
        }catch(err){console.log(err)}
    }
    const cambiarValor = (e) => {
        if(e.target.name === 'nombre'){
            setUser({...user, full_name: e.target.value})
        }else if(e.target.name === 'email'){
            setUser({...user, email: e.target.value})
        }else{
            setUser({...user, pass: e.target.value})
        }
    }
    return (
        <div className='contenedor-registro'>
            <form>
                <input placeholder='Nombre completo' className='input-registro' name='nombre' onChange={cambiarValor}></input>
                <input placeholder='email' className='input-registro' name='email' onChange={cambiarValor}></input>
                <input placeholder='contraseña' className='input-registro' name='contra' onChange={cambiarValor} type='password'></input>
                <button type='submit' className='btn-agregar' onClick={() => insert()}>AGREGAR</button>
            </form>
        </div>
    )
}
