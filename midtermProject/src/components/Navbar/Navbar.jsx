import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Icon } from '@mui/material';
import MuseumTwoToneIcon from '@mui/icons-material/MuseumTwoTone';
import { useNavigate } from 'react-router-dom';

const Navbar = ({showViewMore}) => {
  const navigate = useNavigate();

  const navigateToCategory = (category) => {
    navigate(`/category/${category}`);
  };

  const navigateToHome = () =>{
    navigate('/')
  }

  return (
    <AppBar position="static" variant='transparent' color='inherit' sx={{boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
      <Container>
        <Toolbar>
          <Icon className="material-icons" sx={{ fontSize: 40, marginRight: 1 }}>
            <MuseumTwoToneIcon fontSize="large" />
          </Icon>
          <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            Fake Shop
          </Typography>
          {
            showViewMore && <Button variant='outlined' color="inherit" sx={{ marginX: 2 }} onClick={() => navigateToHome()}>View All</Button>

          }
          <Button variant='outlined' color="inherit" sx={{ marginX: 2 }} onClick={() => navigateToCategory('electronics')}>Electronics</Button>
          <Button variant='outlined' color="inherit" sx={{ marginX: 2 }} onClick={() => navigateToCategory('jewelery')}>Jewelry</Button>
          <Button variant='outlined' color="inherit" sx={{ marginX: 2 }} onClick={() => navigateToCategory("men's clothing")}>Men's Clothing</Button>
          <Button variant='outlined' color="inherit" sx={{ marginX: 2 }} onClick={() => navigateToCategory("women's clothing")}>Women's Clothing</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
