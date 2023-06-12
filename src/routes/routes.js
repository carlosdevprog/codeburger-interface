import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Login from "../containers/Login";
import Register from "../containers/Register";
import Home from "../containers/Home"
import Products from "../containers/Products"
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