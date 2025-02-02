import Header from './Header';
import Footer from './Footer';
import { SectionEstilizada } from './Card.styled';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode; // tipando children como ReactNode, para aceitar qualquer tipo de conteúdo renderizado no jsx (string, number, jsx, []...)
}

const Card = ({ children }: CardProps) => {
  return (
    <SectionEstilizada>
      <Header />

      {children}

      <Footer />
    </SectionEstilizada>
  );
};

export default Card;
