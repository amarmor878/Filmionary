import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { Link } from 'react-router-dom'
import { TarjImg, TarjPrin, TarjOver, TarjTitulo, TarjEje, TarjPuntu, TarjDescrip } from './TarjetaStyled'
import { AiOutlineStar } from 'react-icons/ai';

export const Tarjeta = ({ peli }) => {

    // state para controlar si la imagen de la tarjeta está cargando o no
    const [estaCargando, setEstaCargando] = useState(true)

    // useEffect que simula un tiempo de carga de medio segundo para mostrar la imagen
    useEffect(() => {
        setTimeout(() => {
            setEstaCargando(false)
        }, 500)
    }, [])

    return (
        <div>
            {/* condicional ternario que muestra un esqueleto mientras la imagen carga */}
            {
                estaCargando ?
                    <TarjPrin>
                        <SkeletonTheme color="#202020" highlightColor="#444">
                            <Skeleton height={300} duration={2} />
                        </SkeletonTheme>
                    </TarjPrin> :
                    // link que lleva a la página de la película
                    <Link to={`/pelicula/${peli.id}`} style={{ textDecoration: "none", color: 'white' }}>
                        {/* contenedor principal de la tarjeta */}
                        <TarjPrin>
                            {/* imagen de la película */}
                            <TarjImg src={`https://image.tmdb.org/t/p/original${peli ? peli.poster_path : ""}`} alt={peli.original_title} />
                            {/* overlay que muestra el título, puntuación y descripción */}
                            <TarjOver>
                                {/* título de la película */}
                                <TarjTitulo>{peli ? peli.title : ""}</TarjTitulo>
                                {/* contenedor para la puntuación y fecha de lanzamiento */}
                                <TarjEje>
                                    {/* icono de estrella */}
                                    <AiOutlineStar style={{ margin: '0px 5px', marginBottom: '-2px' }} />
                                    {/* fecha de lanzamiento */}
                                    {peli ? peli.release_date : ""}
                                    {/* puntuación */}
                                    <TarjPuntu>{peli ? peli.vote_average : ""}</TarjPuntu>
                                </TarjEje>
                                {/* descripción de la película */}
                                <TarjDescrip>
                                    {peli ? peli.overview.slice(0, 100) + "..." : ""}
                                </TarjDescrip>
                            </TarjOver>
                        </TarjPrin>
                    </Link>
            }
        </div>
    )
}

export default Tarjeta
