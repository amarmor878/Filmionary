import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";

import {
    PrinPostImg,
    PrinPostImgOver,
    PostImgTitulo,
    PostImgTituloEje,
    PostImgDescrip
} from './PrincipalStyled'

import { AiOutlineStar } from 'react-icons/ai';
import ListaPeliculas from '../../components/listaPeliculas/ListaPeliculas';

const Principal = () => {
    // Estado local para almacenar las películas populares obtenidas de la API
    const [pelisPopulares, setPelisPopulares] = useState([]);

    // Hook de efecto para obtener las películas populares de la API cuando el componente se monta por primera vez
    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=es-ES")
            .then(response => {
                // Si la respuesta es válida, actualizar el estado local con las películas populares
                if (response && response.data && response.data.results) {
                    setPelisPopulares(response.data.results);
                    console.log(response.data.results);
                } else {
                    console.log("Error: Respuesta inválida");
                }
            })
            .catch(error => console.log(error))
    }, []);

    // Renderizar el carrusel de películas populares y la lista de películas
    return (
        <div>
            <Carousel
                // Configuración del carrusel
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={5000}
                transitionTime={1000}
                stopOnHover={true}
                showArrows={true}
            >
                {/* Mapear las películas populares para crear los elementos del carrusel */}
                {pelisPopulares.map(peli => (
                    <Link
                        key={peli.id}
                        style={{ textDecoration: "none", color: "white" }}
                        to={`/peliculas/${peli.id}`}
                    >
                        {/* Imagen de fondo y superposición de información de la película */}
                        <PrinPostImg>
                            <img
                                src={`https://image.tmdb.org/t/p/original${peli.backdrop_path}`}
                                alt={peli.title}
                            />
                        </PrinPostImg>
                        <PrinPostImgOver>
                            <PostImgTitulo>{peli ? peli.title : ""}</PostImgTitulo>
                            <PostImgTituloEje>
                                {peli ? peli.release_date : ""}
                                <span>
                                    <AiOutlineStar
                                        style={{ margin: '0px 5px', marginBottom: '-4px' }}
                                    />
                                    {peli ? peli.vote_average : ""}
                                </span>
                            </PostImgTituloEje>
                            <PostImgDescrip>
                                {peli ? peli.overview.slice(0, 250) + "..." : ""}
                            </PostImgDescrip>
                        </PrinPostImgOver>
                    </Link>
                ))}
            </Carousel>
            {/* Lista de películas */}
            <ListaPeliculas />
        </div>
    );
};

export default Principal;
