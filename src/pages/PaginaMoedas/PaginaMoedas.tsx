import useFetchMoedas from '../../hooks/useFetchMoedas';
import Tabela from '../../componentes/Card/Tabela';
import Card from '../../componentes/Card';

const PaginaMoedas = () => {
  const { moedas, dados, loading, error } = useFetchMoedas();

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;
  if (!dados) return <p>Dados não carregados.</p>;

  return (
    <Card>
      <Tabela moedas={moedas} dados={dados} />
    </Card>
  );
};

export default PaginaMoedas;
