import React, { useContext, useEffect } from 'react'
import img from './Nota.png'
import './listareproduccion.css'
import { UserContext } from '../../App'
const ListaReproduccion = () => {
    //uso del contexto
    const {usuario} = useContext(UserContext);
    const contenent_news = [
        {
           image: img,
            new: 0
        },
        {
            image: img,
            new: 1
        },
        {
           image: img,
            new: 3
        },
        {
           image: img,
            new: 4
        }
    ]
    
    return (
        <section className='listas'>
            <h1 className='titulo'>Listas de Reproducción {usuario}</h1>
            {
                contenent_news.map((new_item, idx) => { return (
                    <article className='articulo' key={idx}>
                        <img src={new_item.image}/>
                        <button className='btn-listas'>Expandir</button>
                    </article>
                )})
            }
        </section>
    )
}
export default ListaReproduccion;
