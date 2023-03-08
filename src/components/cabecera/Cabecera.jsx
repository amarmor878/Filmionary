import React from 'react'
import { Link } from 'react-router-dom'

import { MainCabecera, IzqCabecera, IconCabecera, EnlCabecera } from './CabeceraStyled'

export const Cabecera = () => {
    return (
        <MainCabecera>
            <IzqCabecera>
                <Link to='/'>
                    <IconCabecera src='https://user-images.githubusercontent.com/100948149/223397968-e31acedc-1e85-4806-a531-7a66cacb13de.png' />
                </Link>
                <Link to='/peliculas/popular' style={{ textDecoration: 'none' }}>
                    <EnlCabecera><span>Popular</span></EnlCabecera>
                </Link>
                <Link to='/peliculas/top_rated' style={{ textDecoration: 'none' }}>
                    <EnlCabecera><span>Mejor Valorado</span></EnlCabecera>
                </Link>
                <Link to='/peliculas/upcoming' style={{ textDecoration: 'none' }}>
                    <EnlCabecera><span>Estreno</span></EnlCabecera>
                </Link>
            </IzqCabecera>
        </MainCabecera>
    )
}

export default Cabecera
