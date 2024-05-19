import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="foot-row1">
        <p className="fooddb">FoodDelivery</p>
        <p className="ft-rw1"> Partners</p>
        <p className="ft-rw1"> About Us</p>
        <p className="ft-rw1"> Privacy Policy</p>
        <p className="ft-rw1"> Contact Us</p>
      </div>
      <div className="foot-row2">
        <div className="ft-col1">
          <p>123 Lorem Ipsum Street </p>
          <p> Tangerang, Banten </p><br />
          <p> +10 - 234 - 5678</p>
        </div>
        <div className="fl">
        <div className="ft-col2">
          <p>All Restaurant</p>
          <p>Best Sellers</p>
          <p>Top Rated</p>
          <p>Newcomers</p>
        </div>
        <div className="ft-col3">
          <p>FAQ</p>
          <p>Join our program</p>
          <p>Be our partners</p>
          <p>Terms & Condition</p>
        </div>
        <div className="ft-col4">
          <p>Our Parent Company</p>
          <p>Make an investment</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
