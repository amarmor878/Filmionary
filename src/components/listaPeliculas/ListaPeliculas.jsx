import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Tarjeta from '../tarjeta/Tarjeta';
import { ListaPeliMain, ListaPeliTarj, ListaPeliTitulo } from './ListaPeliculasStyled';

const ListaPeliculas = () => {
  const { type } = useParams(); // obtiene el parámetro de tipo de la URL
  const [listaPelicula, setListaPelicula] = useState([]);

  // define una función de obtener datos que se puede volver a utilizar
  const getData = useCallback(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=es-ES`)
      .then((response) => setListaPelicula(response.data.results))
      .catch((error) => console.log(error));
  }, [type]);

  // carga los datos la primera vez que se monta el componente
  useEffect(() => {
    getData();
  }, [getData]);

  // recarga los datos si cambia el tipo de película
  useEffect(() => {
    getData();
  }, [getData, type]);

  // renderiza la lista de películas
  return (
    <div>
      <ListaPeliMain>
        <ListaPeliTitulo>
          {(type ? type : "POPULAR").toUpperCase()}
        </ListaPeliTitulo>
        <ListaPeliTarj>
          {listaPelicula.map((peli) => (
            <Tarjeta peli={peli} />
          ))}
        </ListaPeliTarj>
      </ListaPeliMain>
    </div>
  );
};

export default ListaPeliculas;
