import React from "react";
import { Container, Typography, Grid, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import profileImage from "../images/profile1.jpeg";

const ExpertArchitectsSection = () => (
  <section style={{ backgroundColor: "#120A28", padding: "4rem 0" }}>
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom sx={{ color: "white" }}>
            Expert Architects in SAP BTP, Integrations, and S/4HANA
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: "white" }}>
            At HEZED, we offer more than just consultancy services. Here,
            you engage directly with seasoned experts who are passionate
            about their work. We don't rely on SDMs or ticket systems. Our
            team consists of highly specialized consultants with deep
            expertise in S/4HANA, SAP PI/PO, Mulesoft, Boomi, and Azure
            LogicApps. With this combined knowledge, we've become
            authorities in S/4HANA, SAP BTP, and the Cloud-based Integration
            Suite. We excel in tackling complex challenges in architecture
            advisory, implementations, and configuration. We thrive on
            solving intricate issues and take pride in owning problems while
            ensuring clear communication. We're not afraid to dive deep into
            the details, delivering high productivity because we love what
            we do – wholeheartedly and honestly.
          </Typography>
          <ul style={{ color: "white", paddingLeft: "20px" }}>
            <li>
              <strong>
                Getting Started with SAP Business Technology Platform:{" "}
              </strong>
              We guide you through the initial steps and beyond
            </li>
            <li>
              <strong>Exploring SAP's Integration Suite: </strong> Discover
              the full potential of SAP's integration capabilities
            </li>
            <li>
              <strong>Utilizing API Management Solutions: </strong> Learn
              how to effectively manage APIs for seamless integration.
            </li>
            <li>
              <strong>Transitioning from SAP ECC to SAP S/4HANA: </strong>{" "}
              We provide expert advice and support for your migration
              journey.
            </li>
          </ul>
          <Typography variant="body1" paragraph sx={{ color: "white" }}>
            No matter the challenge you're facing, HEZED is the perfect
            partner. We're not just doing our job; we're pursuing our
            passion, which happens to be our profession.
          </Typography>
          <Button
            color="inherit"
            component={Link}
            to="/contact"
            sx={{
              borderRadius: "20px",
              color: "white",
              width: "10rem",
              backgroundColor: "#6E45EB",
              "&:hover": {
                backgroundColor: "#312066",
              },
            }}
          >
            Get in touch
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={profileImage}
            alt="Consultant in office"
            sx={{
              width: "100%",
              height: "auto",
              maxHeight: "600px",
              objectFit: "cover",
            }}
          />
        </Grid>
      </Grid>
    </Container>
  </section>
);

export default ExpertArchitectsSection;