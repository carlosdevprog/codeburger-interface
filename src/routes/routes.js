import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Login, Register, Home, Products, Cart, Admin } from "../containers"
import PrivateRoute from "./private-route";
import paths from "../constants/paths"


function AppRoutes() {

    return (
        <Router>
            <Routes>
                
                <Route path={paths.login} element={<Login />} />
                <Route path={paths.register} element={<Register />} />

                <Route element={<PrivateRoute />}>
                    <Route path={paths.home} exact element={<Home />} />
                    <Route path={paths.products} element={<Products />} />
                    <Route path={paths.cart} element={<Cart />} />
                    <Route path={paths.requests} element={<Admin />} isAdmin />
                    <Route path={paths.listProducts} element={<Admin />} isAdmin />
                    <Route path={paths.newProduct} element={<Admin />} isAdmin />
                    <Route path={paths.EditProducts} element={<Admin />} isAdmin />
                </Route>

            </Routes>
                
        </Router>
    )
}

export default AppRoutes

