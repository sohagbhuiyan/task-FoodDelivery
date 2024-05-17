import React from "react";
import "./body.css";
import pic from "../../assets/Images.png";
const Body = () => {
  return (
    <div className="body">
      <div className="image">
        <img src={pic} className="img" />
      </div>
    </div>
  );
};

export default Body;
