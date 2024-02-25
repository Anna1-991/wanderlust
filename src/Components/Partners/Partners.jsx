import React from "react";
import "./partners.css";
import img1 from "../../images/partners/image1.png";
import img2 from "../../images/partners/image2.png";
import img3 from "../../images/partners/image3.png";
import img4 from "../../images/partners/image4.png";
import img5 from "../../images/partners/image5.png";
import img6 from "../../images/partners/image6.png";
import img7 from "../../images/partners/image7.png";
import img8 from "../../images/partners/image8.png";
import img9 from "../../images/partners/image9.png";
import { Hotel } from "./Hotels/Hotel";

export const Partners = () => {
    return (
        <>
            <h3 className="partners">Ավիաընկերություններ</h3>
            <div className="partner_container">
                <div>
                    <img src={img1} alt="" />   
                </div>
                <div>
                    <img src={img2} alt="" />
                </div>
                <div>
                    <img src={img3} alt="" />
                </div>
                <div>
                    <img src={img4} alt="" />
                </div>
                
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
