import React from "react";
import "../../../index.css";
import "./navbar.css";
import { Dropdown } from "../Dropdown/Dropdown";
import { Link } from "react-router-dom";
import { MobileNavBar } from "../MobileNavBar/MobileNavBar";
import PhoneNumber from "../../PhoneNumber/PhoneNumber";

export const Navbar = () => {

    return (
        <>
            <div className="phone_num">
                <PhoneNumber number={'+374 99 99-99-99'}/>
            </div>
            <ul className="nav_bar container">
                <Link to={'/'}>Գլխավոր</Link>
                <Dropdown />
                <Link to={'/Partners'}>Գործընկերներ</Link>
            </ul>
            <MobileNavBar/>
        </>
    );
}
