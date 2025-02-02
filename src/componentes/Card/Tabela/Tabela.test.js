import { render, screen } from "@testing-library/react";
import Tabela from "./index";

//simula dados de moedas
const mockMoedas = [
  { id: "1", moeda: "AOA", valor: 472.514554 },
];

//simula dados de dados
const mockDados = {
  timestamp: 1738429456,
  base: "EUR",
  rates: { EUR: 1, ARS: 1088.994123 },
  date: "2025-02-01",
};

describe("Tabela", () => {

  test("deve renderizar os textos informativos corretamente", () => {
    render(<Tabela moedas={mockMoedas} dados={mockDados} />);
    //infos antes do data grid
    expect(screen.getByText("Base: EUR")).toBeInTheDocument();
    expect(screen.getByText("Atualizado em: 2025-02-01")).toBeInTheDocument();
  });

  test("deve renderizar as colunas corretamente no DataGrid", () => {
    render(<Tabela moedas={mockMoedas} dados={mockDados} />);
   
    //exemplos de dados do cabecalho da tabela
    expect(screen.getByText("Moeda")).toBeInTheDocument();
    expect(screen.getByText("Valor (em EUR)")).toBeInTheDocument();
    expect(screen.getByText("Horário")).toBeInTheDocument();
  });

  //exemplo de resultado do mock moedas


  
});