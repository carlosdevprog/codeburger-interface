import React from "react";
import HomeLogo from "../../assets/home-logo.svg"
import { Container, HomeImg } from "./styles"
import CategoryCarousel from "../../components/CategoryCarousel";
import OffersCarousel from "../../components/OfferCarousel";


function Home() {

    return (
        <Container>
            <HomeImg src={HomeLogo} alt="home-logo" />
            <CategoryCarousel/>
            <OffersCarousel/>
        </Container>

    )
}


export default Home