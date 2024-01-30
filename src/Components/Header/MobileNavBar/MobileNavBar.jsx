import React, { useState } from "react";
import '../../../index.css';
import './mobilenavbar.css';
import { Link } from "react-router-dom";
import { Dropdown } from "../Dropdown/Dropdown";
import PhoneNumber from "../../PhoneNumber/PhoneNumber";
import { SocialMedia } from "../../SocialMedia/Socialmedia";


export const MobileNavBar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const menuOnClick = () =>{
        setMenuOpen(!isMenuOpen);
    }

    return(
        <div className="mobile_navbar">
            <div id="menu_bar" onClick={menuOnClick} className={isMenuOpen ? 'change' : ''}> 
                <div id="bar1" className={`bar ${isMenuOpen ? 'change' : ''}`}></div>
                <div id="bar2" className={`bar ${isMenuOpen ? 'change' : ''}`}></div>
                <div id="bar3" className={`bar ${isMenuOpen ? 'change' : ''}`}></div>
            </div>
            <div className={`menu-bg ${isMenuOpen ? "change-bg" : ""}`}>
                {isMenuOpen && (
                    <>
                        <ul className="nav">
                            <Link to="/">Գլխավոր</Link>
                            <Dropdown/>
                            <Link to="/partners">Գործընկերներ</Link>
                        </ul>
                        <PhoneNumber number={'+374 99 99-99-99'} />
                        <SocialMedia />
                    </>
                )}
            </div>
        </div>
    )
}