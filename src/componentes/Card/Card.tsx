import Header from "./Header";
import Footer from "./Footer";
import { SectionEstilizada } from "./Card.styles"
import { ReactNode } from "react";

interface CardProps {
    children: ReactNode; // Tipando children como ReactNode
  }

const Card = ({ children }: CardProps) => {
    return(
        <SectionEstilizada>
            <Header />

            {children}

            <Footer />
        </SectionEstilizada>
    )
}

export default Card;