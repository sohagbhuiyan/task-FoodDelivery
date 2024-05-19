import React from "react";
import "./lastBanner.css";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import cir from "../../assets/cir.png";
import lg1 from "../../assets/lg1.png";
import lg2 from "../../assets/lg2.png";
import lg3 from "../../assets/lg3.png";
import lg4 from "../../assets/lg4.png";
import lg5 from "../../assets/lg5.png";

const LastBaner = () => {
  return (
    <div className="lb-contain">
      <p className="head">What our food lovers said</p>
      <p className="desc">
        In the artist's own experience, of course, art is fundamentally
        indefinable, unsayable; there is something sacred about its demands upon
        the soul, something inherently mysterious in the forms it takes
      </p>
      <div className="lb-pos">
        <MdOutlineKeyboardArrowLeft />
        <div className="lb-banner">
          <img src={cir} alt="" className="lb-img" />
          <p className="lb-tit">
            In the artist's own experience, of <br /> course, art is fundamentally <br />
            indefinable, unsayable
          </p>
          <br />
          <p className="lb-red">Tim Oliver, ordered Burger Extracheese</p>
        </div>
        <MdOutlineKeyboardArrowRight />
      </div>
      <div className="lb-logo">
        <img src={lg1} alt="" />
        <img src={lg2} alt="" />
        <img src={lg3} alt="" />
        <img src={lg4} alt="" />
        <img src={lg5} alt="" />
      </div>
    </div>
  );
};

export default LastBaner;
