import React from "react";
import '../../index.css';
import './main.css';
import { Header } from "../Header/Header";
import { Home } from "../Home/Home";
import { Partners } from "../Partners/Partners";
import { Route, Routes } from "react-router";

export const Main = () => {
    return(
        <main className="main_wrapper">
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/Partners" element={<Partners/>} />
            </Routes>
                
        </main>
    )
}