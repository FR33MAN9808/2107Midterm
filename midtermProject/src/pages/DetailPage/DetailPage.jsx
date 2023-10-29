import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  useTheme
} from '@mui/material';
import LoadingIcon from '../../components/LoadinIcon/LoadingIcon';
const URL = "https://fakestoreapi.com/products";

const DetailPage = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [itemData, setItemData] = useState({});
  const theme = useTheme();

  useEffect(() => {
    getDataByID();
  }, []);

  const getDataByID = async () => {
    try {
      const { data } = await axios.get(`${URL}/${id}`);
      setItemData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const goBack = () => {
    navigate('/');
  };

  return (
    <div>
      {loading ? (
        <LoadingIcon />
      ) : (
        <Container
          maxWidth="lg"
          style={{
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            borderRadius: '10px',
            backgroundColor: theme.palette.background.default,
            color: theme.palette.getContrastText(theme.palette.background.default),
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardMedia
                  component="img"
                  alt={itemData.title}
                  image={itemData.image}
                  title={itemData.title}
                  style={{
                    display: 'block',
                    margin: '0 auto',
                    borderRadius: '10px',
                    objectFit: 'cover',
                  }}
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h4" gutterBottom>
                {itemData.title}
              </Typography>
              <Typography variant="h6" gutterBottom>
                ${itemData.price}
              </Typography>
              <Typography variant="body1" paragraph>
                {itemData.description}
              </Typography>
              <Button variant="outlined" color="inherit" onClick={goBack}>
                Go Back
              </Button>
            </Grid>
          </Grid>
        </Container>
      )}
    </div>
  );
};

DetailPage.propTypes = {};

export default DetailPage;
