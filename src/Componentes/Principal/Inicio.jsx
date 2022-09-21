import React, { useEffect, useState } from 'react'
import './inicio.css'
import { FaHeart, FaPlay, FaPause } from 'react-icons/fa';
const Inicio = () => {
  const listaCanciones = [
    {
      nombre: 'cancion 1',
      artista: 'Desconocido',
      album: 'Album',
      duracion: '3:10'
    },
    {
      nombre: 'cancion 1',
      artista: 'Desconocido',
      album: 'Album',
      duracion: '3:10'
    }
  ];
  const [play, setPlay] = useState({ estado: false, indice: -1 });
  const [pause, setPause] = useState({ estado: false, indice: -1 });

  return (
    <ul className='contenedor-canciones' id='contenedor-canciones'>
      {
        listaCanciones.map((cancion, idx) => {
          return (
            <>
              {
                (pause.estado && idx === pause.indice)
                  ?
                  <li key={idx}
                    className='item_lista'
                    onClick={() => { setPause({ ...pause, estado: false, indice: -1 }) }}>
                    <FaPause className='icono-play' />
                  </li>
                  :
                  <li key={idx}
                    className='item_lista'
                    onMouseOver={() => { setPlay({ ...play, estado: true, indice: idx }) }}
                    onMouseLeave={() => { setPlay({ ...play, estado: false, indice: -1 }) }}
                    onClick={() => { setPause({ ...pause, estado: true, indice: idx }) }} >
                    {
                      (play.estado && play.indice === idx)
                        ?
                        <FaPlay className='icono-play' />
                        :
                        <p>#{idx + 1}</p>
                    }
                  </li>
              }


              <li key={idx} className='item_lista'>
                <p>{cancion.nombre}</p> <p>{cancion.artista}</p>
              </li>
              <li className='item_lista'>
                {cancion.album}
              </li>
              <li className='item_lista'>
                {cancion.duracion}
              </li>
              <li className='item_lista'>
                <FaHeart className='icono-favoritos' />
              </li>
            </>
          )
        })
      }
    </ul>
  )
}

export default Inicio;


