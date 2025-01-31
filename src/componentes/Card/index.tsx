import React from "react";
import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";
import Tabela from "../Tabela";
import PaginaMoedas from "../../pages/PaginaMoedas";

const SectionEstilizada = styled.section`
  background-color: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  padding: 24px;
  max-width: 56rem;
  width: 100%;
  position: relative;
  z-index: 10;
}
`

const Card = () => {
    return(
        <SectionEstilizada>
            <Header />

            <PaginaMoedas />

            <Footer />
        </SectionEstilizada>
    )
}

export default Card;