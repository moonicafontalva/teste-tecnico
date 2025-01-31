import { useState, useEffect } from 'react';
import axios from 'axios';

interface Moeda {
  id: string;
  moeda: string;
  valor: number;
}

const useFetchMoedas = () => {
  const [moedas, setMoedas] = useState<Moeda[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('https://data.fixer.io/api/latest?access_key=e2b765780c6c5ea4e73cd30d83806ff3')
      .then(response => {
        if (response.data.rates) {
          const moedasArray: Moeda[] = Object.entries(response.data.rates).map(([moeda, valor]) => ({
            id: moeda,
            moeda,
            valor: Number(valor),
          }));

          setMoedas(moedasArray);
        }
      })
      .catch(error => {
        setError("Erro ao buscar os dados.");
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { moedas, loading, error };
};

export default useFetchMoedas;
