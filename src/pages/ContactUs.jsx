import React, { useRef } from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  InputLabel,
} from "@mui/material";
import backgroundImage from "../images/contactBg3.jpg";

const AutoBreakTypography = ({ text, ...props }) => {
  const sentences = text
    .split(".")
    .filter((sentence) => sentence.trim() !== "");
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

const ContactUs = () => {
  const heroRef = useRef(null);

  return (
    <div>
      {/* Hero Section */}
      <section
        ref={heroRef}
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
            filter: "grayscale(100%)",
            zIndex: -1,
          }}
        />
        <Container
          maxWidth="lg"
          style={{ textAlign: "center", position: "relative", zIndex: 2 }}
        >
          <Typography variant="h3" gutterBottom>
            <strong>Get in touch</strong>
          </Typography>
          <Typography variant="h3" gutterBottom>
            <a
              href="tel:+4544444321"
              style={{ color: "#51E145", textDecoration: "none" }}
            >
              +45 4444 4321
            </a>
          </Typography>
          <AutoBreakTypography
            variant="h6"
            paragraph
            margin="3px"
            text="At HEZED, we value direct communication. Skip the time-consuming ticket systems, sales representatives, and Service Delivery Managers who might not understand your specific issues. When you contact us, you'll speak directly with an expert who immediately understands your needs. Don't hesitate to reach out. We’re always eager to talk to you and address your challenges, The more complex your issues, the more excited we are to solve them."
          />
        </Container>

        {/* clip Overlay */}
        <div
          style={{
            position: "absolute",
            bottom: -5,
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

      <Container
        maxWidth="md"
        style={{
          marginTop: "2rem",
          backgroundColor: "#120A28",
          padding: "2rem",
          color: "white",
        }}
      >
        <Typography variant="h2" gutterBottom>
          Get in Touch
        </Typography>
        <Typography variant="body1" paragraph>
          We would love to hear from you. Please fill out the form below to get
          in touch with us.
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="name" sx={{ color: "white" }}>
              Name
            </InputLabel>
            <TextField
              fullWidth
              id="name"
              variant="outlined"
              margin="normal"
              sx={{ backgroundColor: "#fff" }}
            />
            <InputLabel htmlFor="email" sx={{ color: "white" }}>
              Email
            </InputLabel>
            <TextField
              fullWidth
              id="email"
              variant="outlined"
              margin="normal"
              sx={{ backgroundColor: "#fff" }}
            />
            <InputLabel htmlFor="phone" sx={{ color: "white" }}>
              Phone
            </InputLabel>
            <TextField
              fullWidth
              id="phone"
              variant="outlined"
              margin="normal"
              sx={{ backgroundColor: "#fff" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="message" sx={{ color: "white" }}>
              Message
            </InputLabel>
            <TextField
              fullWidth
              id="message"
              variant="outlined"
              margin="normal"
              multiline
              rows={8}
              sx={{ backgroundColor: "#fff" }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary">
              Send Message
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ContactUs;
