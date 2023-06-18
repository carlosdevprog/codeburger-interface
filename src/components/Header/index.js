import React from "react";
import {
    Container,
    ContainerLeft,
    ContainerRight,
    PageLink,
    ContainerText,
    Line,
    LinkExit
} from "./styles"
import Cart from "../../assets/cart.svg"
import Person from "../../assets/person.svg"
import { useNavigate } from "react-router-dom";





export function Header() {

    const navigate = useNavigate()

    return (
        <Container>

            <ContainerLeft>
                <PageLink onClick={() => navigate("/")}>Home</PageLink>
                <PageLink onClick={() => navigate("/produtos")}>Ver Produtos</PageLink>
            </ContainerLeft>

            <ContainerRight>
                <PageLink><img src={Cart} alt="carrinho" /></PageLink>

                <Line></Line>

                <PageLink><img src={Person} alt="pessoa" /></PageLink>

                <ContainerText>
                    <p>Olá, Carlos</p>
                    <LinkExit>Sair</LinkExit>
                </ContainerText>
            </ContainerRight>

        </Container>

    )
}


