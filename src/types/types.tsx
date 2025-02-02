export interface Moeda {
    id: string;
    moeda: string;
    valor: number;
}

export interface Dados {
    timestamp: number;
    base: string;
    rates: { [key: string]: number };
    date: string;
}

export interface TabelaProps {
    moedas: Moeda[];
    dados: Dados | null;
}