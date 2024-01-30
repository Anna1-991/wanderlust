import React from "react";
import '../../index.css';
import './header.css';
import logo from '../../images/Logo.png';
import { Navbar } from "./NavBar/Navbar";

export function Header() {
    return(
        <header className="header_wrapper">
            <div className="logo_container">
                <img className="logo" src={logo} alt="" />
                <h1>Wanderlust Travel Team</h1>
            </div>
            <Navbar/>
        </header>
    )
}