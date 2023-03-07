import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { Link } from 'react-router-dom'

import { TarjImg, TarjPrin, TarjOver, TarjTitulo, TarjEje, TarjPuntu, TarjDescrip } from './TarjetaStyled'
import { AiOutlineStar } from 'react-icons/ai';

export const Tarjeta = ({ peli }) => {
    const [estaCargando, setEstaCargando] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setEstaCargando(false)
        }, 1000)
    }, [])

    return (
        <div>
            {
                estaCargando ?
                    <TarjPrin>
                        <SkeletonTheme color="#202020" highlightColor="#444">
                            <Skeleton height={300} duration={2} />
                        </SkeletonTheme>
                    </TarjPrin> :
                    <Link to={`/pelicula/${peli.id}`} style={{ textDecoration: "none", color: 'white' }}>
                        <TarjPrin>
                            <TarjImg src={`https://image.tmdb.org/t/p/original${peli ? peli.poster_path : ""}`} alt={peli.original_title} />
                            <TarjOver>
                                <TarjTitulo>{peli ? peli.title : ""}</TarjTitulo>
                                <TarjEje>
                                    <AiOutlineStar style={{ margin: '0px 5px', marginBottom: '-2px' }} />
                                    {peli ? peli.release_date : ""}
                                    <TarjPuntu>{peli ? peli.vote_average : ""}</TarjPuntu>
                                </TarjEje>
                            </TarjOver>
                            <TarjDescrip>
                                {peli ? peli.overview.slice(0, 118) + "..." : ""}
                            </TarjDescrip>
                        </TarjPrin>
                    </Link>
            }
        </div>
    )
}

export default Tarjeta