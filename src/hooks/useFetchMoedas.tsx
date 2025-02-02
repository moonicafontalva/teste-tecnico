import { useState, useEffect } from 'react';
import axios from 'axios';
import { Moeda, Dados } from '../types/types'
import api from '../services/apiServiceMoedas';

const useFetchMoedas = () => {
  const [moedas, setMoedas] = useState<Moeda[]>([]);
  const [dados, setDados] = useState<Dados | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api
      .get('')
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
