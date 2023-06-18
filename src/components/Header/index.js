import React from "react";
import { Container, ContainerLeft, ContainerRight, PageLink, ContainerText, Line, LinkExit } from "./styles";
import Cart from "../../assets/cart.svg";
import Person from "../../assets/person.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { useUser } from "../../hooks/UserContext"

export function Header() {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { logout } = useUser()

    const logoutUser = () => {
        logout()
        navigate("/login")
    }

    return (
        <Container>
            <ContainerLeft>
                <PageLink onClick={() => navigate("/")} isActive={pathname === '/'}>Home</PageLink>
                <PageLink onClick={() => navigate("/produtos")} isActive={pathname.includes('produtos')}>Ver Produtos</PageLink>
            </ContainerLeft>

            <ContainerRight>
                <PageLink onClick={() => navigate("/carrinho")}>
                    <img src={Cart} alt="carrinho" />
                </PageLink>
                <Line></Line>
                <PageLink>
                    <img src={Person} alt="pessoa" />
                </PageLink>
                <ContainerText>
                    <p>Olá, Carlos</p>
                    <LinkExit onClick={logoutUser}>Sair</LinkExit>
                </ContainerText>
            </ContainerRight>
        </Container>
    );
}



