import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';

const Caliz = () => {
    
    const LinkAlumnos = [
        'AlumnosDestacados',
        'Formatos'
    ];
    const etiquetaAlumno = [
        'Alumnos Destacados',
        'Documentos'
    ];
    const linkConocenos = [
        'Oficinas',
        'Docentes',
        'Organigrama',
        'QuienesSomos',
        'Especialidades',
        'Transparencia'
    ];
    const etiquetaConocenos = [
        'Oficinas',
        'Docentes',
        'Organigrama',
        'Quienes Somos',
        'Especialidades',
        'Transparencia'
    ];

    const linkEspecialidades = [
        'EspProgramacion',
        'EspContabilidad',
        'EspMecanica',
        'EspAlimentos',
        'EspAdministracion',
        'EspSoporte',
        'EspOfimatica'
    ];
    const etiquetaEspecialidades = [
        'Programación',
        'Contabilidad',
        'Mecánica Industrial',
        'Producción Industrial de Alimentos',
        'Administración de Recursos Humanos',
        'Soporte y Mantenimiento de Cómputo',
        'Ofimática'
    ];

    const linkEgresados = [
        'BolsaTrabajo',
        'formatos/Triptico_titulación_Cbtis217_2021.pdf',
        'Egresados'
    ];
    const etiquetaEgresados = [
        'Bolsa de trabajo',
        'Titulación',
        'Nuestros egresados'
    ];



    const linkContacto = [];
    const etiquetaContacto = [];
    return (
        <nav>
            <ul className="menu" id="menu">
                <li className="menu__item container-submenu"><p className="menu__encabezado submenu-btn">Alumnos</p>
                    <ul className="submenu">
                        {
                            LinkAlumnos.map((alumno, idx) => {
                                return (
                                    <li className="menu__item">
                                        <Link to={alumno} className="menu__link">{etiquetaAlumno[idx]}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </li>
                <li className="menu__item container-submenu"><p className="menu__encabezado submenu-btn">Conocenos</p>
                    <ul className="submenu">
                        {
                            linkConocenos.map((conocenos, idx) => {
                                return (
                                    <li className="menu__item">
                                        <Link to={conocenos} className="menu__link">{etiquetaConocenos[idx]}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </li>
                <li className="menu__item container-submenu"><p className="menu__encabezado submenu-btn">Especialidades</p>
                    <ul className="submenu">
                        {
                            linkEspecialidades.map((esp, idx) => {
                                return (
                                    <li className="menu__item">
                                        <Link to={esp} className="menu__link">{etiquetaEspecialidades[idx]}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </li>
                <li className="menu__item container-submenu"><p className="menu__encabezado submenu-btn">Egresados</p>
                    <ul className="submenu">
                        {
                            linkEgresados.map((egresados, idx) => {
                                return (
                                    <li className="menu__item">
                                        <Link to={egresados} className="menu__link">{etiquetaEgresados[idx]}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </li>
                <li className="menu__item"><p className="menu__encabezado">Contacto</p>
                    <Link to = '' className="menu__link" ></Link>
                </li>
            </ul>
        </nav>
    )
}
export default Caliz;
