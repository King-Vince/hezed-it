import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
} from "@mui/material";
import backgroundImage from "../images/bg2.jpg";
import profileImage from "../images/profile1.jpeg";
import { Link } from "react-router-dom";

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

const Home = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    if (location.hash === "#services") {
      servicesRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      heroRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

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

        {/* Overlay */}
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

      {/* Expert Architects Section */}
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

      {/* Services Section */}
      <section
        ref={servicesRef}
        style={{ backgroundColor: "#120A28", position: "relative", zIndex: 2 }}
      >
        <Container maxWidth="lg" style={{ padding: "6rem 0rem 2rem 0rem" }}>
          <Typography variant="h4" gutterBottom sx={{ color: "white" }}>
            Expertise
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Card
                sx={{ backgroundColor: "#2A3E5C", color: "white", padding: 0 }}
              >
                <CardContent>
                  <Typography variant="h5">
                    SAP Business Technology Platform (BTP)
                  </Typography>
                  <Typography variant="body2">
                    At HEZED, we specialize in the architecture, management, and
                    implementation of solutions on the SAP Business Technology
                    Platform. Our extensive experience has enabled us to guide
                    numerous clients through their BTP journeys, from initial
                    understanding to full-scale implementation.
                  </Typography>
                  <ul>
                    <li>
                      Early Stage Guidance: Helping you grasp the value of the
                      platform in your IT landscape.
                    </li>
                    <li>
                      Roadmap and Governance Setup: Establishing clear paths and
                      governance frameworks.
                    </li>
                    <li>
                      Project Team Empowerment: Enabling your teams to maximize
                      the platform’s potential.
                    </li>
                    <li>
                      Complex Solution Implementation: Executing intricate and
                      customized solutions.
                    </li>
                    <li>
                      Enterprise-Wide Operation: Managing operations across your
                      organization.
                    </li>
                    <li>
                      Regulated Industry Support: Handling data protection, risk
                      assessments, qualification, and validation.
                    </li>
                  </ul>
                  <Typography variant="body2">
                    We will help secure the success of your digitalization
                    projects, ensuring the correct use of the technology to
                    manage your operational costs. It does not matter what you
                    call it: SAP Cloud Platform, BTP, Neo, Cloud Foundry; we can
                    help you with it.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card sx={{ backgroundColor: "#2A3E5C", color: "white" }}>
                <CardContent>
                  <Typography variant="h5">
                    SAP Integration Suite (CPI, API Management)
                  </Typography>
                  <Typography variant="body2">
                    We are your go-to consultancy when it comes to SAP
                    Integration Suite, second-to-none in the Danish market.
                  </Typography>
                  <ul>
                    <li>BTP Account Management</li>
                    <li>Setup and Configuration in Neo and Cloud Foundry</li>
                    <li>
                      Single-Sign-On, Transport Management, Alert Management,
                      Principal Propagation
                    </li>
                    <li>Interface Development and Operations</li>
                    <li>Migrations to Cloud Platform Integration</li>
                  </ul>
                  <Typography variant="body2">
                    We are masters of building governance that can actually be
                    applied, and we live it. Ensuring that it’s pragmatic and
                    easy to comply with, we apply our best practices and
                    principles with our customers and in our day-to-day work.
                    HEZED understands the synergies that SAP BTP Integration
                    Suite (SAP BTP/IS/CPI) and other Cloud Services like
                    Workflow, Business Rules, API Management, Open Connectors,
                    Mobile Services, OData Provisioning, Machine Learning, and
                    IoT bring to the table.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card sx={{ backgroundColor: "#2A3E5C", color: "white" }}>
                <CardContent>
                  <Typography variant="h5">
                    S/4HANA Advisory and Architecture
                  </Typography>
                  <Typography variant="body2">
                    We are independent S/4HANA experts. Our experience covers
                    advisory services, architectural design, and implementation
                    of business solutions across the entire S/4HANA suite. We
                    have worked on everything from brownfield conversions to
                    greenfield transformations, continuous improvements,
                    business integrations, and much more – across several
                    industries.
                  </Typography>
                  <ul>
                    <li>S/4HANA roadmap definition</li>
                    <li>S/4HANA conversion methodology selection</li>
                    <li>
                      S/4HANA brownfield conversion, including initial analysis
                      and preparation
                    </li>
                    <li>Project scoping</li>
                    <li>Global template design and rollout</li>
                    <li>Solution Design</li>
                    <li>
                      Solution Quality Assurance (as your trusted advisor)
                    </li>
                    <li>
                      Process and solution integration, e.g., with 3PL service
                      providers
                    </li>
                    <li>Business Process Reengineering</li>
                  </ul>
                  <Typography variant="body2">
                    In other words, if you need an independent advisor with deep
                    S/4HANA experience, we are here to help!
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Container
              maxWidth="lg"
              style={{ textAlign: "center", color: "white" }}
            >
              <Button
                color="inherit"
                component={Link}
                to="/contact"
                sx={{
                  backgroundColor: "#6E45EB",
                  ml: "2vh",
                  borderRadius: "20px",
                  width: "12vh",
                  "&:hover": { backgroundColor: "#312066" },
                }}
              >
                Get in Touch
              </Button>
            </Container>
          </Grid>
        </Container>
      </section>

      {/* Contact Section */}
      {/* <section
        style={{
          backgroundColor: "#151717",
          color: "white",
          padding: "4rem 0",
        }}
      >
        <Container
          maxWidth="lg"
          style={{ padding: "2rem 0", textAlign: "center" }}
        >
          <Typography variant="h4" gutterBottom>
            Contact Us
          </Typography>
          <AutoBreakTypography
            variant="body1"
            text="Feel free to reach out to us for more information or to discuss your project needs."
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ marginTop: "1rem" }}
          >
            Contact Us
          </Button>
        </Container>
      </section> */}
    </div>
  );
};

export default Home;
