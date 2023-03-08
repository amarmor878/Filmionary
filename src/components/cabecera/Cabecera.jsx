import React from 'react';
import { Link } from 'react-router-dom';
import { MainCabecera, IzqCabecera, IconCabecera, EnlCabecera } from './CabeceraStyled';

const opcionesCabecera = [
    { enlace: '/', texto: 'Inicio', imagen: 'https://user-images.githubusercontent.com/100948149/223397968-e31acedc-1e85-4806-a531-7a66cacb13de.png' },
    { enlace: '/peliculas/popular', texto: 'Popular' },
    { enlace: '/peliculas/top_rated', texto: 'Mejor Valorado' },
    { enlace: '/peliculas/upcoming', texto: 'Estreno' },
];

const Cabecera = () => (
    <MainCabecera>
        <IzqCabecera>
            {opcionesCabecera.map(({ enlace, texto, imagen }) => (
                <Link key={enlace} to={enlace} style={{ textDecoration: 'none' }}>
                    {imagen ? (
                        <IconCabecera src={imagen} />
                    ) : (
                        <EnlCabecera>
                            <span>{texto}</span>
                        </EnlCabecera>
                    )}
                </Link>
            ))}
        </IzqCabecera>
    </MainCabecera>
);

export default Cabecera;
