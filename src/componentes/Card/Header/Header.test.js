import { render, screen } from "@testing-library/react"
import Header from './index'

test('Teste para renderizar o titulo do Card e logo B3', () => {
    render(<Header />)
    
    //teste do titulo
    const titulo = screen.getByText('Lista de Moedas')
    expect(titulo).toBeInTheDocument();

    //teste do logo
    const logo = screen.getByRole("img", { name: /b3/i });
    expect(logo).toBeInTheDocument();
})