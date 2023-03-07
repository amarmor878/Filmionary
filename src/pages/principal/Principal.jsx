import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { Link } from "react-router-dom";

import { PrinPostImg, PrinPostImgOver, PostImgTitulo, PostImgTituloEje, PostImgDescrip } from './PrincipalStyled'

export const Principal = () => {
    const [pelisPopulares, setPelisPopulares] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=es-ES")
            .then(res => res.json())
            .then(data => setPelisPopulares(data.results))
    }, [])

    return (
        <div>
            <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={5000}
                transitionTime={1000}
            >
                {
                    pelisPopulares.map(peli => (
                        <Link style={{ textDecoration: "none", color: "white" }} to={`/pelicula/${peli.id}`} >
                            <PrinPostImg>
                                <img src={`https://image.tmdb.org/t/p/original${peli.poster_path}`} alt={peli.original_title} />
                            </PrinPostImg>
                            <PrinPostImgOver>
                                <PostImgTitulo>{peli ? peli.original_title : ""}</PostImgTitulo>
                                <PostImgTituloEje>
                                    {peli ? peli.release_date : ""}
                                    <span>
                                        {peli ? peli.vote_average : ""}
                                        <i className="fas fa-star" />{" "}
                                    </span>
                                </PostImgTituloEje>
                                <PostImgDescrip>{peli ? peli.overview : ""}</PostImgDescrip>
                            </PrinPostImgOver>
                        </Link>
                    ))
                }
            </Carousel>
        </div>
    )
}

export default Principal