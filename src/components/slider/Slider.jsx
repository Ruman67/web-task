import React, { useState, useEffect } from "react";
import "./Slider.css";
import pexels1 from "../../assets/pexels1.jpg";
import pexels2 from "../../assets/pexels2.jpg";
import pexels3 from "../../assets/pexels3.jpg";

const slides = [
  {
    image: pexels1,
    heading: "Empowering Innovation",
    subheading: "We deliver excellence through strategy and design",
  },
  {
    image: pexels2,
    heading: "Creating Impact",
    subheading: "Technology meets transformation",
  },
  {
    image: pexels3,
    heading: "Digital Future",
    subheading: "Where ideas become reality",
  },
];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-content">
            <h1>{slide.heading}</h1>
            <p>{slide.subheading}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Slider;
