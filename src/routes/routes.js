import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Login, Register, Home, Products, Cart } from "../containers"
import PrivateRoute from "./private-route";


function AppRoutes() {

    return (
        <Router>
            <Routes>

                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Register />} />
                <Route element={<PrivateRoute />}>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/produtos" element={<Products />} />
                    <Route path="/carrinho" element={<Cart />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes