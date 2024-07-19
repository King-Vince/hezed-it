import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Logo from '../images/hezedLogo2.png';

const Header = () => (
  <AppBar position="static" sx={{ backgroundColor: '#120A28', padding: '0 20px'}}>
    <Toolbar>
      <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
        <img
          src={Logo} 
          alt="HEZED Logo"
          style={{ width: '60px', marginRight: '.5rem', borderRadius:"20px" }} 
        />
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          HEZED
        </Typography>
      </Box>
      <Button
        color="inherit"
        component={Link}
        to="/"
        sx={{ pl: "1vh", '&:hover': { backgroundColor: 'gray' } }}
      >
        Home
      </Button>
      <Button
        color="inherit"
        component={Link}
        to="/#services" 
        sx={{ '&:hover': { backgroundColor: 'gray' } }}
      >
        Services
      </Button>
      <Button
        color="inherit"
        component={Link}
        to="/#team"
        sx={{ '&:hover': { backgroundColor: 'gray' } }}
      >
        Team
      </Button>
      <Button
        color="inherit"
        component={Link}
        to="/contact"
        sx={{ backgroundColor: '#6E45EB', ml: "2vh", borderRadius: "20px", width: "12vh", '&:hover': { backgroundColor: '#312066' } }}
      >
        Get in Touch
      </Button>
    </Toolbar>
  </AppBar>
);

export default Header;
