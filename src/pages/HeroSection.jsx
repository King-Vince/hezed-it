import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import backgroundImage from "../images/bg2.jpg";

const AutoBreakTypography = ({ text, ...props }) => {
  const sentences = text.split(".").filter((sentence) => sentence.trim() !== "");
  return (
    <>
      {sentences.map((sentence, index) => (
        <Typography key={index} {...props}>
          {sentence.trim() + "."}
        </Typography>
      ))}
    </>
  );
};

const HeroSection = React.forwardRef((props, ref) => (
  <section
    ref={ref}
    style={{
      position: "relative",
      padding: "20rem 0 calc(25rem + 50px) 0",
      color: "white",
      zIndex: 1,
    }}
  >
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `url(${backgroundImage}) no-repeat center center local`,
        backgroundSize: "cover",
        filter: "grayscale(60%)",
        zIndex: -1,
      }}
    />
    <Container
      maxWidth="lg"
      style={{ textAlign: "left", position: "relative", zIndex: 2 }}
    >
      <Typography variant="h4" gutterBottom>
        SAP Technology Experts
      </Typography>
      <AutoBreakTypography
        variant="h5"
        paragraph
        color='#fff'
        text="At HEZED, we infuse every project with our personal touch. We are committed to delivering the best possible results by taking full responsibility and crafting effective solutions. Nothing less."
      />
      <Button
        variant="contained"
        size="large"
        component={Link}
        to="/contact"
        sx={{
          borderRadius: "20px",
          backgroundColor: "#6E45EB",
          "&:hover": {
            backgroundColor: "#312066",
          },
        }}
      >
        Get in Touch
      </Button>
    </Container>
    <div
      style={{
        position: "absolute",
        bottom: -10,
        left: 0,
        right: 0,
        height: "300px",
        background: "#120A28",
        clipPath:
          "polygon(30% 53%, 64% 75%, 100% 30%, 100% 100%, 70% 100%, 30% 100%, 0 100%, 0 73%)",
        zIndex: 1,
      }}
    />
  </section>
));

export default HeroSection;