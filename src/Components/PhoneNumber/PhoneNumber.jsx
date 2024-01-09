import React from "react";
import "../../index.css";
import "./phonenumber.css";
import { LocalPhone } from "@mui/icons-material";

export function PhoneNumber() {
    return (
        <div className="phone_icon">
            <LocalPhone />
            <div className="number_container">
                <p>+374 99 99-99-99</p>
            </div>
        </div>
    );
}
