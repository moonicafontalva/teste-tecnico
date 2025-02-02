import axios from 'axios';

const API_KEY = process.env.REACT_APP_FIXER_API_KEY;

// esta seria a forma correta de fazer a requisição, retornando o valor das moedas convertid
const apiConversao = axios.create({
  baseURL:'https://data.fixer.io/api/convert',
  params: {
    access_key: API_KEY,
    from: 'EUA',
    to: 'BRL',
    amount: 100
  },
});

export default apiConversao;
