import React from "react";
import { Link } from "react-router-dom";

export const WhatsApp = ({ phoneNumber, message }) => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <Link className="icon whats_app" to={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <span class="tooltip">WhatsApp</span>
            <span><i class="fa-brands fa-whatsapp"></i></span>
        </Link>
    );
};
