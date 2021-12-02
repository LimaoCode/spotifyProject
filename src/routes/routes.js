import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "pages/login";
import Home from "pages/home";

function RenderRoutes() {
    return (
        <Routes>
            <Route element={<Login/>} path="/" exact />
            <Route element={<Home/>} path="/home" />
        </Routes>
    );
}

export default RenderRoutes;