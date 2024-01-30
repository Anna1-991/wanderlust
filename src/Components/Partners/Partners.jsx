import React from "react";
import "./partners.css";
import img1 from "../../images/partners/image1.jpg";
import img2 from "../../images/partners/image2.jpg";
import img3 from "../../images/partners/image3.jpg";
import img4 from "../../images/partners/image4.png";
import img5 from "../../images/partners/image5.png";
import img6 from "../../images/partners/image6.png";
import img7 from "../../images/partners/image7.png";
import img8 from "../../images/partners/image8.png";
import img9 from "../../images/partners/image9.jpg";
import { Hotel } from "./Hotels/Hotel";

export const Partners = () => {
    return (
        <>
            <h3 className="partners">Ավիաընկերություններ</h3>
            <div className="partner_container">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
                <img src={img7} alt="" />
                <img src={img8} alt="" />
                <img src={img9} alt="" />
            </div>
            <Hotel/>
        </>
    );
};
