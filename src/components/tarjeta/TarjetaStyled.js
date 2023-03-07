import styled from "styled-components";

export const TarjPrin = styled.div`
  display: inline-block;
  transition: transform 0.2s;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  margin: 0.19rem;
  cursor: pointer;
  min-width: 200px;
  height: 300px;
  z-index: 0;
  border: 1px solid rgb(99, 99, 99);

  &:hover {
    transform: scale(1.1);
    z-index: 1;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;

export const TarjImg = styled.img`
  height: 300px;
`;

export const TarjOver = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: absolute;
  width: 85%;
  height: 290%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  padding: 0rem 0.5rem 0.5rem 0.5rem;
  bottom: 0px;
  background-image: linear-gradient(rgb(0, 0, 0, 0), rgb(0, 0, 0, 1));

  &:hover {
    opacity: 1;
  }
`;

export const TarjTitulo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
`;

export const TarjTituloEje = styled.div`
  font-size: 0.75rem;
  margin-bottom: 0.25rem;
`;

export const TarjPuntu = styled.span`
  float: left;
`;

export const TarjDescrip = styled.div`
  font-style: italic;
  font-size: 0.75rem;
  margin-bottom: 0.2rem;
`;
