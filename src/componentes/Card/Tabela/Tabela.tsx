import { DataGrid } from '@mui/x-data-grid';
import { DivEstilizada } from "./Tabela.styled";

interface Moeda {
    id: string;
    moeda: string;
    valor: number;
  }
  
interface Dados {
    timestamp: number;
    base: string;
    rates: { [key: string]: number };
    date: string
}

interface TabelaProps {
    moedas: Moeda[];
    dados: Dados | null;
}

const Tabela = ({ moedas, dados }: TabelaProps) => {

  const colunas = [
    { field: "moeda", headerName: "Moeda", width: 150, sortable: true },
    { field: "valor", headerName: `Valor (em ${dados?.base})`, width: 150, sortable: true },
    { field: "horario", headerName: "Horário", width: 200, sortable: true }
  ]

  return (

    <>
        <p>Base: {dados?.base}</p>
        <p>Atualizado em: {dados?.date} </p>
        <p>*Valores aproximados que podem oscilar. </p>

        <DivEstilizada>
            <DataGrid
                columns={colunas} 
                rows={moedas.map((moeda) => ({
                ...moeda,
                horario: dados ? new Intl.DateTimeFormat("pt-BR", { dateStyle: "short", timeStyle: "short"}).format(new Date(dados.timestamp * 1000)).replace(",", " às") : ""
                }))}
                getRowId={(row) => row.id} 
                disableColumnMenu={true}
                disableRowSelectionOnClick //desabilitada linha selecionada
                autoPageSize={true} //removida opção rows per page
            />
            </DivEstilizada>
    </>

  );
};

export default Tabela;
