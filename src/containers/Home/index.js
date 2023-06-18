import React from "react";
import HomeLogo from "../../assets/home-logo.svg"
import { Container, HomeImg } from "./styles"
import {CategoryCarousel, OffersCarousel, Header} from "../../components";




export function Home() {

    return (
        <Container>
            <Header/>
            <HomeImg src={HomeLogo} alt="home-logo" />
            <CategoryCarousel/>
            <OffersCarousel/>
        </Container>

    )
}


