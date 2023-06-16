import React from "react";
import CartLogo from "../../assets/logo-cart.svg"
import { Container, CartImg } from "./styles"
import { CartItems } from "../../components";




export function Cart() {

    return (
        <Container>
            <CartImg src={CartLogo} alt="logo do carrinho" />
            <CartItems/>
            
        </Container>

    )
}

