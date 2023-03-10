import styled from "styled-components";

export const ListaPeliMain = styled.div`
  padding: 0 3rem 3rem 3rem;
`;

export const ListaPeliTitulo = styled.h2`
  font-size: 1.75rem;
  margin: 2.5rem;
`;

export const ListaPeliTarj = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
  margin: 0 1rem 1rem 1rem;

  @media (max-width: 545px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0.5rem;
    margin: 0 1rem 1rem 1rem;
  }
`;
