import styled from "styled-components";

export const MainCabecera = styled.div`
  margin: 0 2.5rem;
  padding: 0.5rem 0;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const IzqCabecera = styled.div`
  display: flex;
  align-items: center;
`;

export const DerCabecera = styled.div`
  display: flex;
  align-items: center;
`;

export const IconCabecera = styled.img`
  width: 180px;
  cursor: pointer;
`;

export const EnlCabecera = styled.a`
  span {
    text-decoration: none;
    margin: 0 30px;
    font-size: 1.3rem;
    cursor: pointer;
    color: white;

    @media (max-width: 725px) {
      text-decoration: none;
      margin: 0 30px;
      font-size: 1rem;
      cursor: pointer;
      color: white;
    }

    @media (max-width: 660px) {
      text-decoration: none;
      margin: 0 10px 0 30px;
      font-size: 0.8rem;
      cursor: pointer;
      color: white;
    }
  }

  span:hover {
    color: #049b97;
  }
`;

export const BuscarInput = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 5px;
  border: none;
  padding: 0 10px;
  font-size: 1.2rem;
  outline: none;

  @media (max-width: 725px) {
    width: 200px;
    height: 25px;
    border-radius: 5px;
    border: none;
    padding: 0 10px;
    font-size: 1rem;
    outline: none;
  }
`;

export const BuscarBoton = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 5px;
  border: none;
  background-color: #049b97;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  outline: none;
  margin-left: 10px;

  @media (max-width: 725px) {
    width: 100px;
    height: 25px;
    border-radius: 5px;
    border: none;
    background-color: #049b97;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    outline: none;
    margin-left: 10px;
  }
`;
