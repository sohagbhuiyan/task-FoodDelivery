import React from "react";
import "./work.css";
import img from "../../assets/mob.png";
import img1 from "../../assets/se.png";
import img2 from "../../assets/Chicken.png"
const Work = () => {
  return (
    <div className="wk-cont">
      <p className="wk-text">How it works</p>
      <div className="wk">
        <div className="wk-box">
          <img src={img} alt="" className="w-im" />
          <div className="wk-tx">
            <p className="wk-titl">Order via App</p>
            <p className="wk-detail">
              In the artist's own experience, of course, art is fundamentally
              indefinable, unsayable; there is something sacred about its
              demands
            </p>
          </div>
        </div>
        <div className="wk-box">
          <img src={img1} alt="" className="w-im" />
          <div className="wk-tx">
            <p className="wk-titl">Order via App</p>
            <p className="wk-detail">
              In the artist's own experience, of course, art is fundamentally
              indefinable, unsayable; there is something sacred about its
              demands
            </p>
          </div>
        </div>
        <div className="wk-box">
          <img src={img2} alt="" className="w-im" />
          <div className="wk-tx">
            <p className="wk-titl">Order via App</p>
            <p className="wk-detail">
              In the artist's own experience, of course, art is fundamentally
              indefinable, unsayable; there is something sacred about its
              demands
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
