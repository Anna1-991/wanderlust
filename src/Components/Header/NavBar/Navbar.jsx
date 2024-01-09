import React, { useState } from "react";
import "./navbar.css";
import { Dropdown } from "../Dropdown/Dropdown";
import { Divider } from "@mui/material";
import { LocalPhone } from "@mui/icons-material";
import { SocialMedia } from "../../SocialMedia/Socialmedia";

export function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const menuOnClick = () => {
        setMenuOpen(!isMenuOpen);
    };
    return (
        <>
            <div className="phone_icon">
                <LocalPhone />
                    <p>+374 99 99-99-99</p>
            </div>
            <ul className="nav_bar container">
                <li>Գլխավոր</li>
                <Dropdown />
                <li>Գործընկերներ</li>
            </ul>
            <div className="mobile_navbar">
                <div
                    id="menu-bar"
                    onClick={menuOnClick}
                    className={isMenuOpen ? "change" : ""}
                >
                    <div
                        id="bar1"
                        className={`bar ${isMenuOpen ? "change" : ""}`}
                    ></div>
                    <div
                        id="bar2"
                        className={`bar ${isMenuOpen ? "change" : ""}`}
                    ></div>
                    <div
                        id="bar3"
                        className={`bar ${isMenuOpen ? "change" : ""}`}
                    ></div>
                </div>
                <div className={`menu-bg ${isMenuOpen ? "change-bg" : ""}`}>
                    <nav className="nav">
                        {isMenuOpen ? (
                            <>
                                <ul>
                                    <li>Գլխավոր</li>
                                    <Dropdown />
                                    <li>Գործընկերներ</li>
                                    <Divider component={"li"} />
                                </ul>
                                <div className="phone_icon_mobile">
                                    <LocalPhone />
                                    <div className="number_container_mobile">
                                        <p>+374 99 99-99-99</p>
                                    </div>
                                </div>
                                <SocialMedia />
                            </>
                        ) : null}
                    </nav>
                </div>
            </div>
        </>
    );
}
