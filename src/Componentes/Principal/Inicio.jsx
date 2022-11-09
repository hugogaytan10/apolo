import React, { useEffect, useState } from 'react';
import { FaHeart, FaPause, FaPlay } from 'react-icons/fa';
import './inicio.css';
import { ProgressMusic } from './ProgressMusic';
const Inicio = () => {
  const listaCanciones = [
    {
      nombre: 'cancion 1',
      artista: 'Desconocido',
      album: 'Album',
      duracion: '0:10',
      link: 'https://www.sonolibro.com/assets/uploads/preview/pr_los_vigilantes_de_los_das.mp3'
    },
    {
      nombre: 'cancion 1',
      artista: 'Desconocido',
      album: 'Album',
      duracion: '0:10',
      link: 'https://www.sonolibro.com/audio/pr-efecto-midas.mp3'
    },
    {
      nombre: 'cancion 1',
      artista: 'Desconocido',
      album: 'Album',
      duracion: '3:30'
    },
    {
      nombre: 'cancion 1',
      artista: 'Desconocido',
      album: 'Album',
      duracion: '4:10'
    },
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
  const [countVisited, setCountVisited] = useState('');
  const [cancion, setCancion] = useState('');
  const [song, setSong] = useState('');
  const setLocalStorage = async (visit) => {
    window.localStorage.setItem('visitas', visit);
  }
  const removeLocalStorage = async () => {
    window.localStorage.removeItem('visitas');
  }
  useEffect(() => {
    let local = window.localStorage.getItem('visitas') ? JSON.parse(window.localStorage.getItem('visitas')) : ""
    if (local === '') {
      window.localStorage.setItem('visitas', 0);
    }
    else {
      removeLocalStorage();
      local++;
      setLocalStorage(JSON.stringify(local));
      setCountVisited(local);
    }

  }, [])
  useEffect(() => {
  }, [cancion])
  return (
    <div className='listas-canciones'>
      <p className='visitas'>{countVisited}</p>
      <ul className='contenedor-canciones' id='contenedor-canciones'>
        {
          listaCanciones.map((cancion, idx) => {
            return (
              <>
                {
                  (pause.estado && idx === pause.indice)
                    ?
                    <li
                      className='item_lista'
                      onClick={() => {
                        setSong(cancion.link)
                        setPause({ estado: !pause, indice: -1 });
                      }}>
                      <FaPause className='icono-play' />
                    </li>
                    :
                    <li
                      className='item_lista'
                      onMouseOver={() => { setPlay({ ...play, estado: true, indice: idx }) }}
                      onMouseLeave={() => { setPlay({ ...play, estado: false, indice: -1 }) }}
                      onClick={() => {
                        setSong(cancion.link)
                        setPause({ ...pause, estado: true, indice: idx });
                        setCancion(cancion.duracion);
                      }} >
                      {
                        (play.estado && play.indice === idx)
                          ?
                          <FaPlay className='icono-play' />
                          :
                          <p># {idx + 1}</p>
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
      {
        cancion !== '' &&
        <div className='bar'>
          <ProgressMusic time={cancion} song={song} />
        </div>
      }
    </div>
  )
}

export default Inicio;


