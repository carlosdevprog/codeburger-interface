import React, { useEffect, useState } from "react";
import Offers from "../../assets/offer-img.png"
import { Container, OfferImg, ContainerItens, Image, Button } from "./styles"
import api from "../../services/api"
import Carousel from 'react-elastic-carousel'
import formatCurrency from "../../utils/formatCurrency";


function OffersCarousel() {

    const [offers, setOffers] = useState([])

    useEffect(() => {

        async function loadOffers() {
            const { data } = await api.get("products")

            const onlyOffers = data.filter( product => product.offer).map( product => {
                return {...product, formatedPrice: formatCurrency(product.price)}
            })  

            setOffers(onlyOffers)
        }
        loadOffers()
    }, [])

    const breakPointsCarousel = [
        { width: 1, itemsToShow: 1 },
        { width: 400, itemsToShow: 2 },
        { width: 600, itemsToShow: 3 },
        { width: 900, itemsToShow: 4 },
        { width: 1300, itemsToShow: 5 },
    ]

    return (

        <Container>
            <OfferImg src={Offers} alt="ofertas" />

            <Carousel itemsToShow={5} style={{ width: "90%" }} breakPoints={breakPointsCarousel} >
                {
                    offers &&
                    offers.map((product) => (
                        <ContainerItens key={product.id}>
                            <Image src={product.url} alt="foto do produto" />
                            <p>{product.name}</p>
                            <p>{product.formatedPrice}</p>
                            <Button>Peça agora</Button>
                        </ContainerItens>
                    ))
                }
            </Carousel>
        </Container>

    )
}


export default OffersCarousel