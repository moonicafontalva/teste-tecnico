import React from 'react';
import './App.css';
import Card from './componentes/Card';
import styled from 'styled-components';

const DivEstilizada = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f3f4f6;
  position: relative;
`

const FundoEstilizado = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  opacity: 0.2;
  background-image: url(${require("./assets/jornal.jpeg")});
`

function App() {
  return (
    <DivEstilizada>

      <FundoEstilizado />

      <Card />


    </DivEstilizada>
  );
}

export default App;
