import React, { useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { AiOutlineStar } from 'react-icons/ai';
import {
    DetaCabe, DateSpan, DetaPrin, DetaIntro,
    DetaImg, DetaPeli, DetaInfoIzq, DetaPosterCont, DetaPoster,
    DetaInfoDer, DetaCont, DetaTitulo, DetaTag, DetaRate,
    DetaPuntu, DetaEje, DetaFecha, DetaGeneros, DetaGeneroSpan,
    DetaBotom, DetaSinop, DetaLinks, DetaCabeInfo, DetaInfoProd,
    DetaProd, DetaProdImg, DetaSinopInfo
} from './PeliculaStyled'

export const Pelicula = () => {
    const [detallePelicula, setDetallePelicula] = useState();
    const { id } = useParams();

    const getData = useCallback(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=es-ES`)
            .then(response => {
                setDetallePelicula(response.data)
                console.log(response.data)
            })
            .catch(error => console.log(error))
    }, [id])

    useEffect(() => {
        getData()
    }, [getData])

    return (
        <div>
            <DetaPrin>
                <DetaIntro>
                    <DetaImg src={`https://image.tmdb.org/t/p/original${detallePelicula ? detallePelicula.backdrop_path : ""}`} />
                </DetaIntro>
                <DetaPeli>
                    <DetaInfoIzq>
                        <DetaPosterCont>
                            <DetaPoster src={`https://image.tmdb.org/t/p/original${detallePelicula ? detallePelicula.poster_path : ""}`} />
                        </DetaPosterCont>
                    </DetaInfoIzq>
                    <DetaInfoDer>
                        <DetaCont>
                            <DetaTitulo>{detallePelicula ? detallePelicula.title : ""}</DetaTitulo>
                            <DetaTag>{detallePelicula ? detallePelicula.tagline : ""}</DetaTag>
                            <DetaRate>
                                {detallePelicula ? detallePelicula.vote_average : ""}
                                <AiOutlineStar style={{ margin: '0px 5px', marginBottom: '-2px' }} />
                                <DetaPuntu>{detallePelicula ? "(" + detallePelicula.vote_count + ") votos" : ""}</DetaPuntu>
                            </DetaRate>
                            <DetaEje>{detallePelicula ? detallePelicula.runtime + " minutos" : ""}</DetaEje>
                            <DetaFecha>{detallePelicula ? "Fecha de lanzamiento: " + detallePelicula.release_date : ""}</DetaFecha>
                            <DetaGeneros>
                                {
                                    detallePelicula && detallePelicula.genres
                                        ?
                                        detallePelicula.genres.map(genero => (
                                            <DetaGeneroSpan id={genero.id}>{genero.name}</DetaGeneroSpan>
                                        ))
                                        :
                                        ""
                                }
                            </DetaGeneros>
                        </DetaCont>
                        <DetaBotom>
                            <DetaSinop>Sinopsis: </DetaSinop>
                            <DetaSinopInfo>{detallePelicula ? detallePelicula.overview : ""}</DetaSinopInfo>
                        </DetaBotom>
                    </DetaInfoDer>
                </DetaPeli>
                <DetaLinks>
                    <DetaCabe>Links de interés</DetaCabe>
                    {
                        detallePelicula && detallePelicula.homepage
                        && <a href={detallePelicula.homepage} target="_blank" style={{ textDecoration: "none" }} rel='noreferrer'>
                            <p>
                                <DateSpan>Pagina Principal
                                    <i className="newTab fas fa-external-link-alt"></i>
                                </DateSpan>
                            </p>
                        </a>
                    }
                    {
                        detallePelicula && detallePelicula.imdb_id
                        && <a href={`https://www.imdb.com/title/${detallePelicula.imdb_id}`} target="_blank" style={{ textDecoration: "none" }} rel='noreferrer'>
                            <p>
                                <DateSpan>Pagina en IMDB
                                    <i className="newTab fas fa-external-link-alt"></i>
                                </DateSpan>
                            </p>
                        </a>
                    }
                </DetaLinks>
                <DetaCabeInfo>Productoras de la película</DetaCabeInfo>
                <DetaInfoProd>
                    {
                        detallePelicula && detallePelicula.production_companies
                        && detallePelicula.production_companies.map(compania => (
                            <>
                                {
                                    compania.logo_path
                                    && <DetaProd>
                                        <DetaProdImg src={`https://image.tmdb.org/t/p/original${compania.logo_path}`} />
                                        <span>{compania.name}</span>
                                    </DetaProd>
                                }
                            </>
                        ))
                    }
                </DetaInfoProd>
            </DetaPrin>
        </div>
    )
}

export default Pelicula