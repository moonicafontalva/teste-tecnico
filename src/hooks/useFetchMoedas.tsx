import { useState, useEffect } from 'react';
import axios from 'axios';

interface Moeda {
  id: string;
  moeda: string;
  valor: number;
}

interface Dados {
  timestamp: number;
  base: string;
  date: string;
  rates: { [key: string]: number };
}

const useFetchMoedas = () => {
  const [moedas, setMoedas] = useState<Moeda[]>([]);
  const [dados, setDados] = useState<Dados | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(
        'https://data.fixer.io/api/latest?access_key=e2b765780c6c5ea4e73cd30d83806ff3',
      )
      // esta seria a forma correta de fazer a requisição, retornando o valor das moedas convertidos
      //axios.get('https://data.fixer.io/api/convert?access_key=e2b765780c6c5ea4e73cd30d83806ff3&from=EUR&to=BRL&amount=100')
      .then((response) => {
        console.log(response);

        const { timestamp, base, rates, date } = response.data;

        setDados({
          timestamp,
          base,
          rates,
          date,
        });

        //armazenar moedas
        if (rates) {
          const moedasArray: Moeda[] = Object.entries(rates).map(
            ([moeda, valor]) => ({
              id: moeda,
              moeda,
              valor: Number(valor),
            }),
          );

          setMoedas(moedasArray);
        }
      })
      .catch((error) => {
        setError('Erro ao buscar os dados.');
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { moedas, dados, loading, error };
};

export default useFetchMoedas;
