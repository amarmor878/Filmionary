import styled from "styled-components";

export const PrinPostImg = styled.div`
  height: 600px;

  img {
    margin: auto;
    width: 100%;
    display: block;
  }
`;

export const PrinPostImgOver = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  height: 70%;
  background-image: linear-gradient(rgb(0, 0, 0, 0), rgb(0, 0, 0, 1));
  padding: 5rem;
  bottom: 0px;
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
`;

export const PostImgTitulo = styled.div`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
  text-align: left;

  @media (max-width: 375px) {
    font-size: 1.2rem;
  }
`;

export const PostImgTituloEje = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1rem;

  span {
    margin-left: 3rem;
  }
`;

export const PostImgDescrip = styled.div`
  display: flex;
  text-align: left;
  font-size: 1.2rem;
  font-style: italic;
  margin-bottom: 0.2rem;
  width: 50%;

  @media (max-width: 375px) {
    font-size: 1rem;
  }
`;
