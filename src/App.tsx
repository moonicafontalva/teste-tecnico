import React from 'react';
import Card from './componentes/Card';
import { DivEstilizada, FundoEstilizado } from './App.styled';
import PaginaMoedas from './pages/PaginaMoedas';

function App() {
  return (
    <DivEstilizada>
      <FundoEstilizado />

      <PaginaMoedas />
    </DivEstilizada>
  );
}

export default App;
