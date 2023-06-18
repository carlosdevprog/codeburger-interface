import React from "react";
import { useCart } from "../../hooks/CartContext"
import formatCurrency from "../../utils/formatCurrency";
import { Container, Header, Body, EmptyCart } from "./styles"


export function CartItems() {

    const { cartProducts, increaseProducts, decreaseProducts, deleteProducts  } = useCart()
    
    return (
        <Container>

            <Header>
                <p></p>
                <p>Items</p>
                <p>Preço</p>
                <p style={{ paddingRight: 30 }}>Quantidade</p>
                <p>Total</p>
            </Header>

            {cartProducts && cartProducts.length > 0 ?
                cartProducts.map(product => (
                    <Body key={product.id}>
                        <img src={product.url} alt="imagem do produto" />
                        <p>{product.name}</p>
                        <p>{formatCurrency(product.price)}</p>
                        <div className="quantity-container">
                            <button onClick={() => decreaseProducts(product.id)}>-</button>
                            <p>{product.quantity}</p>
                            <button onClick={() => increaseProducts(product.id)}>+</button>
                        </div>
                        <p>{formatCurrency(product.quantity * product.price)} <button style={{ marginLeft: 15, cursor: 'pointer' }} onClick={()=> deleteProducts(product.id)}>🗑️</button></p>
                    </Body>
                ))

                : (<EmptyCart>
                    Carrinho vazio 🛒
                </EmptyCart>)
            }

        </Container>

    )
}


