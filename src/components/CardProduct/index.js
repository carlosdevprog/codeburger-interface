import React from "react";
import PropTypes from "prop-types";
import { Container, Image, ProductName, ProductPrice } from "./styles"
import { Button } from "../Button"
import { useCart } from "../../hooks/CartContext";

export function CardProduct({ product }) {
    const { putProductInCart } = useCart()
    
    return (
        <Container>
            <Image src={product.url} alt="imagem do produto" />
            <div>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.formatedPrice}</ProductPrice>
                <Button onClick={() => putProductInCart(product)}>
                    Adicionar
                </Button>
            </div>
        </Container>
    )
}



CardProduct.propTypes = {
    product: PropTypes.object
}