import React from 'react';
import "./demo.css"
import { useState } from "react";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import cir from "../../assets/cir.png";
const Demo = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      image: cir,
      title: "In the artist's own experience, of course, art is fundamentally indefinable, unsayable",
      name: "Tim Oliver",
      order: "ordered Burger Extracheese",
    },
    // Add more testimonials as needed
    {
      image: cir,
      title: "Another testimonial",
      name: "Jane Doe",
      order: "ordered Vegan Salad",
    },
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
    );
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
        <MdOutlineKeyboardArrowLeft onClick={handlePrevSlide} className="arrow-icon" />
        <div className="lb-banner">
          <img src={testimonials[currentSlide].image} alt="" className="lb-img" />
          <p className="lb-tit">
            {testimonials[currentSlide].title.split(',').map((line, index) => (
              <React.Fragment key={index}>
                {line.trim()}<br />
              </React.Fragment>
            ))}
          </p>
          <br />
          <p className="lb-red">{testimonials[currentSlide].name}, {testimonials[currentSlide].order}</p>
        </div>
        <MdOutlineKeyboardArrowRight onClick={handleNextSlide} className="arrow-icon" />
      </div>
    </div>
  );
};

export default Demo;