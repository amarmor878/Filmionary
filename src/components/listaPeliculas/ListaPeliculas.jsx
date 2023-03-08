import React, { useEffect, useState, useCallback } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import Tarjeta from '../tarjeta/Tarjeta';

import { ListaPeliMain, ListaPeliTarj, ListaPeliTitulo } from './ListaPeliculasStyled'

export const ListaPeliculas = () => {

  const [listaPelicula, setListaPelicula] = useState([])
  const { type } = useParams()

  const getData = useCallback(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=es-ES`)
      .then(response => setListaPelicula(response.data.results))
      .catch(error => console.log(error))
  }, [type])

  useEffect(() => {
    getData()
  }, [getData])

  useEffect(() => {
    getData()
  }, [getData, type])

  return (
    <div>
      <ListaPeliMain>
        <ListaPeliTitulo>
          {(type ? type : "POPULAR").toUpperCase()}
        </ListaPeliTitulo>
        <ListaPeliTarj>
          {
            listaPelicula.map(peli => (
              <Tarjeta peli={peli} />
            ))
          }
        </ListaPeliTarj>
      </ListaPeliMain>
    </div>
  )
}

export default ListaPeliculas