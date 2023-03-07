import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";

import { PrinPostImg, PrinPostImgOver, PostImgTitulo, PostImgTituloEje, PostImgDescrip } from './PrincipalStyled'
import { AiOutlineStar } from 'react-icons/ai';
import ListaPeliculas from '../../components/listaPeliculas/ListaPeliculas';

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
            <Carousel>
                {
                    pelisPopulares.map(peli => (
                        <Link style={{ textDecoration: "none", color: "white" }} to={`/pelicula/${peli.id}`} >
                            <PrinPostImg>
                                <img src={`https://image.tmdb.org/t/p/original${peli.backdrop_path}`} alt={peli.title} />
                            </PrinPostImg>
                            <PrinPostImgOver>
                                <PostImgTitulo>{peli ? peli.title : ""}</PostImgTitulo>
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
            <ListaPeliculas />
        </div>
    )
}


export default Principal;
