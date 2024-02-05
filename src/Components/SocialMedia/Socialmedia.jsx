import React from "react";
import "../../index.css";
import "./socialmedia.css";
import { Link } from "react-router-dom";
import { WhatsApp } from "./Whatsapp/WhatsApp";
import { Telegram } from "./Telegram/Telegram";

export const SocialMedia = () => {
    const phoneNumber = '+37495060607';
    const message = "Hello, let's talk!!!";

    return (
        <>
            <ul className="social_media">
                <Link className="icon facebook" to={'https://www.facebook.com/profile.php?id=100093948756626'} target="_blank">
                    <span class="tooltip">Facebook</span>
                    <span><i class="fab fa-facebook-f"></i></span>
                </Link>
                <Link className="icon instagram" to={'https://www.instagram.com/wanderlust.evn?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='} target="_blank">
                    <span class="tooltip">Instagram</span>
                    <span><i class="fab fa-instagram"></i></span>
                </Link>
                <WhatsApp phoneNumber={phoneNumber} message={message}/>
                <Telegram phoneNumber={phoneNumber} message={message}/>
            </ul>
        </>
    );
}
