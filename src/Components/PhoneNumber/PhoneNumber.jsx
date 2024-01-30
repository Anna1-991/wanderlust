import React from "react";
import './phonenumber.css';
import { LocalPhone } from "@mui/icons-material";

const PhoneNumber = ({ number }) => {
    return (
        <div className="phone_icon">
            <LocalPhone/>
            <a href={`tel:${number}`}>{number}</a>
            <i class="fa-solid fa-plane fa-beat-fade"></i>
        </div>
    );
};

export default PhoneNumber;
