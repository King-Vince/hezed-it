import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "@mui/material";
import HeroSection from "./sections/HeroSection";
import ExpertArchitectsSection from "./sections/ExpertArchitectsSection";
import ServicesSection from "./sections/ServicesSection";

const Home = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#services") {
      servicesRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      heroRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div>
      <HeroSection ref={heroRef} />
      <ExpertArchitectsSection />
      <ServicesSection ref={servicesRef} />
    </div>
  );
};

export default Home;