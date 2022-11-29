import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../App';
import './Perfil.css'

export const Perfil = () => {
    const [user, setUser] = useState([]);
    //uso del contexto
    const { usuario, handleChangeUser } = useContext(UserContext);
    const perfilUser = async () => {
        let searchUser = usuario.replace('%', ' ');
        try {
            const peticion = await fetch(`http://localhost:8090/api/usuarios/${searchUser}`);
            const data = await peticion.json();
            setUser(data);
        } catch (e) { console.log(e) }
    }
    const update = async() => {
        try{
            const peticion = await fetch(`http://localhost:8090/api/usuario/actualizar`, {
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
            });
            handleChangeUser(user.full_name);
        }catch(err){console.log(err)}
    }
    const deleteUser = async () => {
        try{
            const peticion = await fetch(`http://localhost:8090/api/usuario/eliminar`, {
                method: 'DELETE',
                mode: 'cors',
                cache: 'default',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer-when-downgrade',
                body: JSON.stringify(user)
            });
            handleChangeUser('');
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
    useEffect(() => {
        perfilUser();
    }, [usuario])
    return (
        <div class="contenedor">
                <h2>Actualizar Información</h2>
            <form>
                <input placeholder={user.full_name} name='nombre' onChange={cambiarValor}></input>
                <input placeholder={user.email} name='email' onChange={cambiarValor}></input>
                <input type='password' placeholder='password' name='pass' onChange={cambiarValor}></input>
                <button onClick={()=>{update()}}>ACTUALIZAR</button>
                <button onClick={()=>{deleteUser()}}>ELIMINAR</button>
            </form>
        </div>
    )
}
