import React, { useEffect, useState } from "react";
import Categories from "../../assets/categories-img.png"
import { Container, CategoryImg, ContainerItens, Image, Button } from "./styles"
import api from "../../services/api"
import Carousel from 'react-elastic-carousel'


export function CategoryCarousel() {

    const [categories, setCategories] = useState([])

    useEffect(() => {

        async function loadCategories() {
            const { data } = await api.get("categories")

            setCategories(data)
        }
        loadCategories()
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
            <CategoryImg src={Categories} alt="categories" />

            <Carousel itemsToShow={5} style={{ width: "90%" }} breakPoints={breakPointsCarousel} >
                {
                    categories &&
                    categories.map((category) => (
                        <ContainerItens key={category.id}>
                            <Image src={category.url} alt="foto da categoria" />
                            <Button>{category.name}</Button>
                        </ContainerItens>
                    ))
                }
            </Carousel>
        </Container>

    )
}


