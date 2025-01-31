import useFetchMoedas from '../../hooks/useFetchMoedas';
import Tabela from '../../componentes/Tabela';

const PaginaMoedas = () => {
  const { moedas, loading, error } = useFetchMoedas();

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Tabela moedas={moedas} />
  )
};

export default PaginaMoedas;
