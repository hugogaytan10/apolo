import React, { useState } from 'react';
import {FaBars} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './menu.css';
const Menu = () => {
    const [hamburguesa, setHamburguesa] = useState(false);
    const etiquetas = ['Inicio', 'Lista de reproducción'];
    const links = ['/Inicio', '/ListaReproduccion'];
    const menuHamburguesa = async() => {
        const menu = document.getElementById('contendor-items');
        const nav = document.getElementById('nav-bar');
        const item = document.getElementById('item-nav');
        if(hamburguesa !== false){
            setHamburguesa(!hamburguesa);
            menu.style.display = 'none';
            nav.style.width = "0px";
            item.style.width = "0%";
        }else{
            setHamburguesa(!hamburguesa);
            nav.style.height = '100vh';
            menu.style.display = 'block';
            nav.style.width = "28%";
            item.style.width = '100%';
            item.style.fontSize = "15px";
            nav.style.backgroundColor = 'rgba(47, 14, 45, 0.559)';
        }
        
    }
    return (
        <nav className='nav-bar' id='nav-bar'>
            <FaBars className='iconos' onClick={()=>{menuHamburguesa()}} id='hamburguesita'/>
            <ul className='contenedor-items' id = 'contendor-items'>
                {
                    etiquetas.map((etiqueta, idx) => { return (
                        <p><Link to={links[idx]} className='item-nav'>{etiqueta}</Link></p>
                    )})
                }
            </ul>
        </nav>
    )
}

export default Menu;
