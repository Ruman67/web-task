import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
// import AboutUs from "./components/about/AboutUs";
import Footer from "./components/footer/Footer.jsx";
import ContactForm from "./components/contactForm/ContactForm";
import OurTeam from "./components/team/OurTeam.jsx";
import Slider from "./components/slider/Slider.jsx";
import Weather from "./components/weather/WeatherApi";
import AboutUs from "./components/about/AboutUs";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      <Slider />
      <Weather />
      <Footer />
    </>
  );
}

export default App;
