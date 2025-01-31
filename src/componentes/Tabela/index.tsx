import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components';

interface Moeda {
  id: string;
  moeda: string;
  valor: number;
}

interface TabelaProps {
  moedas: Moeda[];
}

const colunas = [
    { field: "moeda", headerName: "Moeda", width: 150, sortable: true },
    { field: "valor", headerName: "Valor (em BRL)", width: 150, sortable: true },
    { field: "horario", headerName: "Horário", width: 200, sortable: true }
]

const DivEstilizada = styled.div`
  width: 100%;
  max-width: 800px;
  height: 400px;
  overflow: auto;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  background: #fff;
`;

const Tabela = ({ moedas }: TabelaProps) => {
  return (
    <DivEstilizada>
      <DataGrid
          columns={colunas} 
          rows={moedas}
          getRowId={(row) => row.id} 
          disableColumnMenu={true}
          disableRowSelectionOnClick //desabilitada linha selecionada
          autoPageSize={true} //removida opção rows per page
      />
    </DivEstilizada>
  );
};

export default Tabela;
