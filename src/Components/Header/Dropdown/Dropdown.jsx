import React, { useRef, useState } from "react";
import '../../../index.css';
import "./dropdown.css";
import { useOutSideClick } from "../../../hooks/useOutsideClick";
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import { Link } from "react-router-dom";


export const Dropdown = () =>{
    const dropdownRef = useRef(null);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    useOutSideClick(dropdownRef, () => setDropdownOpen(false));

    return (
        <div>
            <div className="dropdown_button" onClick={toggleDropdown} ref={dropdownRef}>
                <span>Ծառայություններ </span> 
            <AirplanemodeActiveIcon className={`my_icon ${isDropdownOpen ? 'down' : ''}`}/>
            </div>
                {isDropdownOpen && 
                    <ul className={`dropdown_content ${isDropdownOpen ? 'open_anim' : ''}`}>
                        <Link className={`list ${isDropdownOpen ? 'open_anim1' : ''}`}>Փաթեթներ</Link>
                        <Link className={`list ${isDropdownOpen ? 'open_anim2' : ''}`}>Ավիատոմսեր</Link>
                        <Link className={`list ${isDropdownOpen ? 'open_anim3' : ''}`}>Վիզա</Link>
                        <Link className={`list ${isDropdownOpen ? 'open_anim4' : ''}`}>Ճանապարհորդական <br/> ապպահովագրություն</Link>
                        <Link className={`list ${isDropdownOpen ? 'open_anim5' : ''}`}>Մեր ուղևորները</Link>
                    </ul>
                }
        </div>
    );
}
