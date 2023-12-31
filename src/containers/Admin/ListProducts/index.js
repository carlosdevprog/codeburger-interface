import React, { useEffect, useState } from "react";
import { Container, Img, Edit } from "./styles";
import api from "../../../services/api"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CancelIcon from '@mui/icons-material/Cancel';
import formatCurrency from './../../../utils/formatCurrency';
import { useNavigate } from "react-router-dom";
// import paths from './../../../constants/paths';




function ListProducts() {
    const navigate = useNavigate()

    const [products, setProducts] = useState()

    useEffect(() => {

        async function loadOrders() {
            const { data } = await api.get("products")

            setProducts(data)

        }

        loadOrders()
    }, [])

    function isOffer(offerStatus) {
        if (offerStatus === true) {
            return <CheckBoxIcon style={{ color: '#228b22' }} />
        }
        return <CancelIcon style={{ color: '#cc1717' }} />
    }

    const editProduct = product => {
        navigate("/editar-produtos", { state: { product } })
    }

    return (
        <Container>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell>Preço</TableCell>
                            <TableCell align="center">Produto em Oferta</TableCell>
                            <TableCell align="center">Imagem do Produto</TableCell>
                            <TableCell>Editar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products && products.map((product) => (
                            <TableRow
                                key={product.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {product.name}
                                </TableCell>
                                <TableCell>{formatCurrency(product.price)}</TableCell>
                                <TableCell align="center">{isOffer(product.offer)}</TableCell>
                                <TableCell align="center">
                                    <Img src={product.url} alt="imagem do produto" />
                                </TableCell>
                                <TableCell>
                                    <Edit onClick={() => editProduct(product)} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default ListProducts



