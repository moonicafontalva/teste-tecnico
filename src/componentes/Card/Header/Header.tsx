import { HeaderEstilizado, TituloEstilizado } from "./Header.styled"

const Header = () => {
    return (
        <HeaderEstilizado>
            <TituloEstilizado>Lista de Moedas </TituloEstilizado>
            <img src="https://b3digitas.com/wp-content/uploads/2023/03/logo-b3.png" alt="Logo B3"/>
        </HeaderEstilizado>
    )
}

export default Header;