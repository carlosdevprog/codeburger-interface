import React, { useState, useEffect } from "react";
import { Container } from "./styles"
import { Button } from "../Button"
import formatCurrency from "../../utils/formatCurrency";
import { useCart } from "../../hooks/CartContext"
import api from "../../services/api"
import { toast } from "react-toastify";


export function CartResume() {
    const [finalPrice, setFinalPrice] = useState(0)
    const [deliveryTax] = useState(5)

    const { cartProducts } = useCart()

    useEffect(() => {

        const sumAllItems = cartProducts.reduce((acc, current) => {
            return current.price * current.quantity + acc
        }, 0)

        setFinalPrice(sumAllItems)

    }, [cartProducts, deliveryTax])

    const submitOrder = async () => {
        const order = cartProducts.map(product => {
            return { id: product.id, quantity: product.quantity }
        })

        await toast.promise(api.post('orders', { products: order }), {
            pending: 'Realizando o seu pedido... 😌 ',
            success: 'Pedido realizado com sucesso! 😁',
            error: 'Falha ao tentar realizar o seu pedido, tente novamente. 😫'
        })
        
    }


    return (
        <div>
            <Container>
                <div className="container-top">
                    <h2>Resumo do pedido</h2>

                    <div>
                        <p>Itens</p>
                        <p>{formatCurrency(finalPrice)}</p>
                    </div>

                    <div>
                        <p>Taxa de entrega</p>
                        <p>{formatCurrency(deliveryTax)}</p>
                    </div>

                </div>

                <div className="container-bottom">
                    <p>Total</p>
                    <p>{formatCurrency(finalPrice + deliveryTax)}</p>
                </div>
            </Container>
            <Button style={{ width: '100%', marginTop: '20px' }} onClick={submitOrder}>Finalizar pedido</Button>
        </div>

    )
}


