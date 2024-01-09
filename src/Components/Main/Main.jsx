import React from "react";
import '../../index.css';
import './main.css';
import { Header } from "../Header/Header";
import { Home } from "../Home/Home";

export function Main() {
    return(
        <main className="main_wrapper">
            <Header/>
            <Home/>
        </main>
    )
}