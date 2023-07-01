import React from "react"
import { Container, ContainerItems } from "./styles"
import Orders from "./Orders"
import { SideMenuAdmin } from "../../components/SideMenuAdmin"
import ListProducts from "./ListProducts"
import PropTypes from "prop-types"
import paths from "../../constants/paths"
import NewProduct from "./NewProduct"
import EditProduct from "./EditProduct"



export function Admin({ match: { path } }) {

    return (
        <Container>
            <SideMenuAdmin path={path}/>
            <ContainerItems>
                {path === paths.requests && <Orders />}
                {path === paths.listProducts && <ListProducts />}
                {path === paths.newProduct && <NewProduct />}
                {path === paths.editProducts && <EditProduct />}
            </ContainerItems>
        </Container>
    )
}

Admin.propTypes = {
    match: PropTypes.shape({
        path: PropTypes.string
    })
}