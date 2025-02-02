import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card Component', () => {
  test('deve renderizar o Header, Footer e children corretamente', () => {
    render(
      <Card>
        <p>Conteúdo de teste</p>
      </Card>
    );

    // Verifica se o Header foi renderizado
    expect(screen.getByRole('banner')).toBeInTheDocument(); // Se o Header tiver um <header>

    // Verifica se o Footer foi renderizado
    expect(screen.getByRole('contentinfo')).toBeInTheDocument(); // Se o Footer tiver um <footer>

    // Verifica se o conteúdo (children) é exibido
    expect(screen.getByText('Conteúdo de teste')).toBeInTheDocument();
  });
});
