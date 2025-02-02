import api from './apiServiceMoedas';
import axios from 'axios';

jest.mock('axios'); // Mock do Axios

describe('Serviço de API - apiServiceMoedas', () => {
  it('deve realizar uma requisição GET com sucesso e retornar os dados esperados', async () => {
    const mockResponse = {
      data: {
        success: true,
        rates: { USD: 1.1, BRL: 5.3, EUR: 1.0 },
      },
    };

    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue(mockResponse);

    const response = await api.get('/');

    expect(response.data).toEqual(mockResponse.data);
    expect(axios.get).toHaveBeenCalledWith('/', {
      params: { access_key: process.env.REACT_APP_FIXER_API_KEY },
    });
  });

  it('deve lidar com erros na requisição', async () => {
    (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValue(new Error('Erro na API'));

    await expect(api.get('/')).rejects.toThrow('Erro na API');
  });
});
