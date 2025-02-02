import api from "./apiServiceMoedas";
import axios from "axios";
import MockAdapter from 'axios-mock-adapter';

const API_KEY = process.env.REACT_APP_FIXER_API_KEY

describe("apiService", () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  it("deve fazer uma requisição GET para a API com o token correto e retornar os dados", async () => {
    // Simulando um retorno da API
    const mockResponse = {
      success: true,
      base: "EUR",
      date: "2025-02-02",
      rates: { BRL: 5.25, USD: 1.08 },
    };

    // Simulando a URL que a requisição deveria ter
    const expectedUrl = `$https://data.fixer.io/api/latest/latest?access_key=${API_KEY}`;
    mock.onGet(expectedUrl).reply(200, mockResponse);

    // Chamar a API
    const response = await api.get("/latest");

    // Verificações
    expect(response.status).toBe(200);
    expect(response.data).toEqual(mockResponse);
  });

  it("deve lidar corretamente com erros da API", async () => {
    const expectedUrl = `https://data.fixer.io/api/latest/latest?access_key=${API_KEY}`;
    mock.onGet(expectedUrl).reply(500);

    try {
      await api.get("/latest");
    } catch (error: any) {
      expect(error.response.status).toBe(500);
    }
  });
});
