import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';

const ProductCard = ({ data }) => {
  const navigate = useNavigate();

  const navigateToDetail = () => {
    navigate(`/detail/${data.id}`);
  }

  return (
    <Card elevation={3}>
      <CardMedia
        sx={{ height: 200 }}
        image={data.image}
      />

      <CardContent>
        <Typography variant='h6' component="div" gutterBottom>
          {data.title}
        </Typography>

        <Typography variant='body2' color='black' fontSize={30} fontFamily='Roboto, sans-serif'>
          ${data.price}
        </Typography>

        <Typography variant='body2' color='textSecondary'>
          <Rating name="read-only" value={data.rating.rate} readOnly/> {/* Display rating as stars */}
        </Typography>
      </CardContent>

      <CardActions>
        <Button onClick={navigateToDetail} variant='outlined' color='inherit' sx={{ width: '100%' }}>
          Details
        </Button>
      </CardActions>
    </Card>
  );
};

ProductCard.propTypes = {
  data: PropTypes.object.isRequired
};

export default ProductCard;
