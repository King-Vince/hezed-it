import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const ServicesSection = React.forwardRef((props, ref) => (
  <section
    ref={ref}
    style={{ backgroundColor: "#120A28", position: "relative", zIndex: 2 }}
  >
    <Container maxWidth="lg" style={{ padding: "6rem 0rem 2rem 0rem" }}>
      <Typography variant="h4" gutterBottom sx={{ color: "white" }}>
        Expertise
      </Typography>
      <Grid container spacing={3}>
        {/* BTP Card */}
        <Grid item xs={12} sm={4}>
          <Card sx={{ backgroundColor: "#2A3E5C", color: "white", padding: 0 }}>
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
              {/* ... (rest of the BTP card content) ... */}
              <ul>
                <li>
                    <strong> Early Stage Guidance: </strong> Helping you grasp the value of the
                  platform in your IT landscape.
                </li>
                <li>
                  <strong>Roadmap and Governance Setup: </strong>Establishing clear paths and
                  governance frameworks.
                </li>
                <li>
                  <strong>Project Team Empowerment: </strong>Enabling your teams to maximize the
                  platform’s potential.
                </li>
                <li>
                  <strong>Complex Solution Implementation: </strong>Executing intricate and
                  customized solutions.
                </li>
                <li>
                  <strong>Enterprise-Wide Operation: </strong>Managing operations across your
                  organization.
                </li>
                <li>
                  <strong>Regulated Industry Support: </strong>Handling data protection, risk
                  assessments, qualification, and validation.
                </li>
              </ul>
              <Typography variant="body2">
                We will help secure the success of your digitalization projects,
                ensuring the correct use of the technology to manage your
                operational costs. It does not matter what you call it: SAP
                Cloud Platform, BTP, Neo, Cloud Foundry; we can help you with
                it.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* Integration Suite Card */}
        <Grid item xs={12} sm={4}>
          <Card sx={{ backgroundColor: "#2A3E5C", color: "white" }}>
            <CardContent>
              <Typography variant="h5">
                SAP Integration Suite (CPI, API Management)
              </Typography>
              <Typography variant="body2">
                We are your go-to consultancy when it comes to SAP Integration
                Suite, second-to-none in the Danish market.
              </Typography>
              {/* ... (rest of the Integration Suite card content) ... */}
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
                applied, and we live it. Ensuring that it’s pragmatic and easy
                to comply with, we apply our best practices and principles with
                our customers and in our day-to-day work. HEZED understands the
                synergies that SAP BTP Integration Suite (SAP BTP/IS/CPI) and
                other Cloud Services like Workflow, Business Rules, API
                Management, Open Connectors, Mobile Services, OData
                Provisioning, Machine Learning, and IoT bring to the table.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* S/4HANA Card */}
        <Grid item xs={12} sm={4}>
          <Card sx={{ backgroundColor: "#2A3E5C", color: "white" }}>
            <CardContent>
              <Typography variant="h5">
                S/4HANA Advisory and Architecture
              </Typography>
              <Typography variant="body2">
                We are independent S/4HANA experts. Our experience covers
                advisory services, architectural design, and implementation of
                business solutions across the entire S/4HANA suite. We have
                worked on everything from brownfield conversions to greenfield
                transformations, continuous improvements, business integrations,
                and much more – across several industries.
              </Typography>
              {/* ... (rest of the S/4HANA card content) ... */}
              <ul>
                <li>S/4HANA roadmap definition</li>
                <li>S/4HANA conversion methodology selection</li>
                <li>
                  S/4HANA brownfield conversion, including initial analysis and
                  preparation
                </li>
                <li>Project scoping</li>
                <li>Global template design and rollout</li>
                <li>Solution Design</li>
                <li>Solution Quality Assurance (as your trusted advisor)</li>
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
      </Grid>
    </Container>
    <Container maxWidth="lg" style={{ textAlign: "center", color: "white" }}>
      <Button
        color="inherit"
        component={Link}
        to="/contact"
        sx={{
          backgroundColor: "#6E45EB",
          ml: "2vh",
          borderRadius: "20px",
          width: "15vh",
          "&:hover": { backgroundColor: "#312066" },
        }}
      >
        Get in Touch
      </Button>
    </Container>
  </section>
));

export default ServicesSection;
