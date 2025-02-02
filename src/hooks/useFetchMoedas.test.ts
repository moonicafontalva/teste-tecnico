import { renderHook, waitFor } from '@testing-library/react'
import axios from 'axios'
import useFetchMoedas from './useFetchMoedas'

// Mock do axios
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('useFetchMoedas Hook', () => {
  it('deve buscar e retornar os dados corretamente', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: {
        timestamp: 1700000000,
        base: 'EUR',
        date: '2025-02-01',
        rates: { USD: 1.08, BRL: 5.45, GBP: 0.85 }
      }
    })

    const { result } = renderHook(() => useFetchMoedas())

    expect(result.current.loading).toBe(true)

    await waitFor(() => expect(result.current.loading).toBe(false))

    expect(result.current.dados?.base).toBe('EUR')
    expect(result.current.moedas.length).toBe(3)
  })
})
