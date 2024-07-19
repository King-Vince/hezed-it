import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../images/hezedLogo2.png';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#120A28', padding: '0 40px' }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <img
            src={Logo}
            alt="HEZED Logo"
            style={{ width: '40px', borderRadius: "20px" }}
          />
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography variant="h6" component="div">
            HEZED
          </Typography>
        </Link>
        </Box>
        
        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} component={Link} to="/">Home</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/#services">Services</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/#team">Team</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/contact">Get in Touch</MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/" sx={{ '&:hover': { backgroundColor: 'gray' } }}>
              Home
            </Button>
            <Button color="inherit" component={Link} to="/#services" sx={{ '&:hover': { backgroundColor: 'gray' } }}>
              Services
            </Button>
            <Button color="inherit" component={Link} to="/#team" sx={{ '&:hover': { backgroundColor: 'gray' } }}>
              Team
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/contact"
              sx={{
                backgroundColor: '#6E45EB',
                ml: "2vh",
                borderRadius: "20px",
                width: "12vh",
                '&:hover': { backgroundColor: '#312066' }
              }}
            >
              Get in Touch
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;