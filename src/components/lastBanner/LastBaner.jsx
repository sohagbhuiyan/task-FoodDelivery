import React, { useState } from "react";
import "./lastBanner.css";
import { MdOutlineKeyboardArrowLeft ,MdOutlineKeyboardArrowRight } from "react-icons/md";
import cir from "../../assets/cir.png";
import lg1 from "../../assets/lg1.png";
import lg2 from "../../assets/lg2.png";
import lg3 from "../../assets/lg3.png";
import lg4 from "../../assets/lg4.png";
import lg5 from "../../assets/lg5.png";
const testimonials = [
  {
    text: "In the artist's own experience, of course, art is fundamentally indefinable, unsayable.",
    author: "Tim Oliver, ordered Burger Extracheese"
  },
  // Add more testimonials if needed
];

const LastBaner = () => {

const [currentIndex, setCurrentIndex] = useState(0);

const handlePrevClick =()=>{
  const newIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  setCurrentIndex(newIndex);
}
const handleNextClick = () => {
  const newIndex = (currentIndex + 1) % testimonials.length;
  setCurrentIndex(newIndex);
};
  return (
    <div className="lb-contain">
      <p className="head">What our food lovers said</p>
      <p className="desc">
        In the artist's own experience, of course, art is fundamentally
        indefinable, unsayable; there is something sacred about its demands upon
        the soul, something inherently mysterious in the forms it takes
      </p>
      <div className="lb-pos">
        <MdOutlineKeyboardArrowLeft  onClick={handlePrevClick} className="arrow"/>
        <div className="lb-banner">
          <img src={cir} alt="" className="lb-img" />
          <p className="lb-tit">
            In the artist's own experience, of <br /> course, art is fundamentally <br />
            indefinable, unsayable
          </p>
          <br />
          <p className="lb-red">Tim Oliver, ordered Burger Extracheese</p>
        </div>
        <MdOutlineKeyboardArrowRight onClick={handleNextClick} className="arrow" />
      </div>
      <div className="lb-logo">
        <img src={lg1} alt="" className="lg"/>
        <img src={lg2} alt="" className="lg" />
        <img src={lg3} alt="" className="lg"/>
        <img src={lg4} alt="" className="lg"/>
        <img src={lg5} alt="" className="lg" />
      </div>
    </div>
  );
};

export default LastBaner;
