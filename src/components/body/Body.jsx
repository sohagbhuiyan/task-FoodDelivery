import React from "react";
import "./body.css";
import pic from "../../assets/Images.png";
const Body = () => {
  return (
    <div className="main">
      <img src={pic} className="img" />
      <div className="right">
        <p className="text-big">
          Take a taste, come join us. Life is so endlessly delicious{" "}
        </p>
        <p className="text-small">
          In the artist's own experience, of course, art is fundamentally
          indefinable, unsayable; there is something sacred about its demands
          upon the soul, something inherently mysterious in the forms it takes
        </p>
        <button className="btn-dwn">Download our App</button>
      </div>
    </div>
  );
};

export default Body;
