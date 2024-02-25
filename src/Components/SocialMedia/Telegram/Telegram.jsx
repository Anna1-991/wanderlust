import React from "react";
import { Link } from "react-router-dom";

export const Telegram = ({ phoneNumber, message }) => {
    const whatsappUrl = `https://t.me/wanderlustanna`;

    return (
        <Link className="icon telegram" to={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <span class="tooltip">Telegram</span>
            <span><i class="fa-brands fa-telegram"></i></span>
        </Link>
    );
};