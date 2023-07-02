import React from "react"
import { Container, ContainerItems } from "./styles"
import Orders from "./Orders"
import { SideMenuAdmin } from "../../components/SideMenuAdmin"
import ListProducts from "./ListProducts"
import PropTypes from "prop-types"
import paths from "../../constants/paths"
import NewProduct from "./NewProduct"
import EditProduct from "./EditProduct"
import { useLocation } from 'react-router-dom'


export function Admin() {
    const location = useLocation()

    return (
        <Container>
            <SideMenuAdmin path={location.pathname} />
            <ContainerItems>
                {location.pathname === paths.requests && <Orders />}
                {location.pathname === paths.listProducts && <ListProducts />}
                {location.pathname === paths.newProduct && <NewProduct />}
                {location.pathname.includes(paths.EditProducts) && <EditProduct />}
            </ContainerItems>
        </Container>
    )
}

Admin.propTypes = {
    match: PropTypes.shape({
        path: PropTypes.string
    })
}