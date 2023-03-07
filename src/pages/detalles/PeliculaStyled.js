import styled from "styled-components";

export const DetaPrin = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DetaIntro = styled.div`
  width: 80%;
  height: 500px;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

export const DetaImg = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  object-position: 0 35%;
`;

export const DetaPeli = styled.div`
  align-items: center;
  width: 75%;
  display: flex;
  position: relative;
  bottom: 225px;
  justify-content: space-between;
`;

export const DetaInfoIzq = styled.div`
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 450px;
  color: white;
`;

export const DetaPosterCont = styled.div`
  position: relative;
  bottom: 50px;
  display: flex;
  justify-content: center;
`;

export const DetaPoster = styled.img`
  width: 300px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.86) 0px 22px 40px 6px;
`;

export const DetaInfoDer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  height: 450px;
  justify-content: space-between;
`;

export const DetaCont = styled.div`
  text-shadow: 0px 0px 5px #000000;
  margin-bottom: 0.5rem;
`;

export const DetaTitulo = styled.div`
  font-weight: 600;
  font-size: 3rem;
  margin-bottom: 1.25rem;
`;

export const DetaTag = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1.25rem;
  font-weight: 600;
  display: flex;
  position: relative;
  align-items: center;
`;

export const DetaRate = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
  font-size: 1.5rem;
  font-weight: 600;
  position: relative;

  div:last-of-type {
    margin-left: auto;
  }
`;

export const DetaPuntu = styled.span`
  margin-left: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  position: relative;
`;

export const DetaEje = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
  display: flex;
  position: relative;
  align-items: center;
  margin-top: -0.4rem;

  div:last-of-type {
    margin-left: auto;
  }
`;

export const DetaFecha = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1.25rem;
  font-weight: 600;
  display: flex;
  position: relative;
  align-items: center;

  div:last-of-type {
    margin-left: auto;
  }
`;

export const DetaGeneros = styled.div`
  margin: 1.25rem 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-weight: 600;
  position: relative;
`;

export const DetaGeneroSpan = styled.span`
  padding: 0.5rem;
  border: 2px solid white;
  border-radius: 20px;
  margin-right: 1rem;
  margin-bottom: 1rem;
`;

export const DetaBotom = styled.div`
  margin: 2rem 0;
  flex: 0.8;
`;

export const DetaSinop = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1.25rem;
  font-weight: 600;
  display: flex;
  position: relative;
  align-items: center;

  div:last-of-type {
    margin-left: auto;
  }
`;

export const DetaLinks = styled.div`
  position: relative;
  bottom: 120px;
  display: flex;
  justify-content: space-between;
  width: 75%;
`;

export const DetaCabe = styled.div`
  font-size: 2.2rem;
`;

export const DateSpan = styled.span`
  background-color: rgb(255, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 2rem;
  border-radius: 20px;
  cursor: pointer;
  width: 150px;
  color: black;
  font-weight: bold;
  background-color: #00997f;

  &:hover {
    background-color: #00a3af;
    color: black;
    transition: 0.5s ease-in-out;
  }
`;

export const DetaCabeInfo = styled.div`
  font-size: 2.2rem;
`;

export const DetaInfoProd = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 4rem;
`;

export const DetaProd = styled.span`
  width: 200px;
  margin: 2rem;
  span {
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 1rem;
    display: block;
  }

  &:first-of-type {
    margin-top: 0;
  }
`;

export const DetaProdImg = styled.img`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 0 35%;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.86) 0px 22px 40px 6px;
`;
