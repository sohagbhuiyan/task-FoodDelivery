import React from "react";
import "./resturant.css";
import pic2 from "../../assets/2.png";
import pic3 from "../../assets/3.png";
import pic4 from "../../assets/4.png";
import pic5 from "../../assets/5.png";
import pic6 from "../../assets/6.png";
import { MdAccessTime } from "react-icons/md";
import { MdOutlineFastfood } from "react-icons/md";
import { LiaDollarSignSolid } from "react-icons/lia";
import { MdOutlineArrowOutward } from "react-icons/md";
const Resturant = () => {
  return (
    <>
      <div className="containerr">
        <div className="titl">
          <p className="textt">Popular on New York area</p>
          <p className=" tir">
            View all <MdOutlineArrowOutward />
          </p>
        </div>
        <div className="left1">
          <div className="indv">
            <img src={pic2} className="lef-pic" />
            <div className=" ">
              <p className="rname">Resturant name</p>
              <span className="span">
                <p className="details">
                  <MdOutlineFastfood /> <LiaDollarSignSolid /> 9.99 Delivery Fee
                </p>
                <p className="time">
                  {" "}
                  <MdAccessTime />
                  10-15 mins
                </p>
              </span>
            </div>
          </div>
          <div className="rightt">
            <div className="right1">
              <img src={pic3} className="" />
              <div className="detal">
                <p className="rname">Resturant name</p>
                <span className="span">
                  <p className="details">
                    <MdOutlineFastfood /> <LiaDollarSignSolid /> 9.99 Delivery
                    Fee
                  </p>
                  <p className="time">
                    {" "}
                    <MdAccessTime />
                    10-15 mins
                  </p>
                </span>
              </div>
              <img src={pic4} className="hotel-pic" />
              <div className="detal">
                <p className="rname">Resturant name</p>
                <span className="span">
                  <p className="details">
                    <MdOutlineFastfood /> <LiaDollarSignSolid /> 9.99 Delivery
                    Fee
                  </p>
                  <p className="time">
                    {" "}
                    <MdAccessTime />
                    10-15 mins
                  </p>
                </span>
              </div>
            </div>
            <div className="right2">
              <img src={pic5} className="hotel-pic" />
              <div className="detal">
                <p className="rname">Resturant name</p>
                <span className="span">
                  <p className="details">
                    <MdOutlineFastfood /> <LiaDollarSignSolid /> 9.99 Delivery
                    Fee
                  </p>
                  <p className="time">
                    {" "}
                    <MdAccessTime />
                    10-15 mins
                  </p>
                </span>
              </div>
              <img src={pic6} className="hotel-pic" />
              <div className="detal">
                <p className="rname">Resturant name</p>
                <span className="span">
                  <p className="details">
                    <MdOutlineFastfood /> <LiaDollarSignSolid /> 9.99 Delivery
                    Fee
                  </p>
                  <p className="time">
                    {" "}
                    <MdAccessTime />
                    10-15 mins
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resturant;
