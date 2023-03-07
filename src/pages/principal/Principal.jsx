import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";

import { PrinPostImg, PrinPostImgOver, PostImgTitulo, PostImgTituloEje, PostImgDescrip } from './PrincipalStyled'
import { AiOutlineStar } from 'react-icons/ai';

export const Principal = () => {
    const [pelisPopulares, setPelisPopulares] = useState([]);

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=es-ES")
            .then(response => {
                if (response && response.data && response.data.results) {
                    setPelisPopulares(response.data.results);
                    console.log(response.data.results);
                } else {
                    console.log("Error: Respuesta inválida");
                }
            })
            .catch(error => console.log(error))
    }, []);

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
                                <img src={`https://image.tmdb.org/t/p/original${peli.backdrop_path}`} alt={peli.original_title} />
                            </PrinPostImg>
                            <PrinPostImgOver>
                                <PostImgTitulo>{peli ? peli.original_title : ""}</PostImgTitulo>
                                <PostImgTituloEje>
                                    {peli ? peli.release_date : ""}
                                    <span>
                                        <AiOutlineStar style={{ margin: '0px 5px', marginBottom: '-4px' }} />
                                        {peli ? peli.vote_average : ""}
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


export default Principal;
