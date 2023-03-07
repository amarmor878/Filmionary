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

export const BusquedaCabecera = styled.div`
  margin-left: auto;
`;

export const InputBusqueda = styled.input`
  padding: 5px;
  border: none;
  border-radius: 5px;
  outline: none;

  @media (max-width: 725px) {
    padding: 5px;
    border: none;
    border-radius: 5px;
    outline: none;
    width: 100px;
  }

  @media (max-width: 660px) {
    padding: 5px;
    border: none;
    border-radius: 5px;
    outline: none;
    width: 50px;
  }
`;

export const ButtonBusqueda = styled.button`
  padding: 5px;
  border: none;
  border-radius: 5px;
  outline: none;
  margin-left: 5px;
  cursor: pointer;
  background-color: #049b97;
  color: white;

  @media (max-width: 725px) {
    padding: 5px;
    border: none;
    border-radius: 5px;
    outline: none;
    margin-left: 5px;
    cursor: pointer;
    background-color: #049b97;
    color: white;
    width: 100px;
  }
`;
