import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Logo from '../images/hezedLogo2.png';

const Footer = () => (
  <Box
    sx={{
      backgroundColor: '#120A28',
      color: 'white',
      padding: '2rem 0',
    }}
  >
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <img src={Logo} alt="HEZED" style={{ width: '100px'}} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            SAP® Partner
          </Typography>
          <Typography variant="subtitle1">
            Open Ecosystem
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Get in Touch
          </Typography>
          <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
            <LocationOnOutlinedIcon sx={{ marginRight: '0.5rem' }} />
            Brudelysvej 23, 2880 Bagsvaerd
          </Typography>
          <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
            <LocalPhoneOutlinedIcon sx={{ marginRight: '0.5rem' }} />
            +45 4444 4321
          </Typography>
          <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
            <EmailOutlinedIcon sx={{ marginRight: '0.5rem' }} />
            info@hezad.dk
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="body2" sx={{ marginTop: '2rem', textAlign: 'center' }}>
        HEZED - All Rights Reserved
      </Typography>
    </Container>
  </Box>
);

export default Footer;
