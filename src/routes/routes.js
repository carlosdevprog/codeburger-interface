import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Login, Register, Home, Products } from "../containers"
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
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes