import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { Box, grid2Classes } from '@mui/material';
import ProductCard from '../../components/ProductCard/ProductCard';
import Navbar from '../../components/Navbar/Navbar';
import LoadingIcon from '../../components/LoadinIcon/LoadingIcon';

const URL = "https://fakestoreapi.com/products";

const Homepage = props => {
  const [productData, setProductData] = useState([])
  const [loading, setLoading] = useState(true);

    const fetchAPI = async () => {
        try {
          const {data} = await axios.get(URL)
          setProductData(data)
          setLoading(false);
        } catch (error) {
          console.error(error);
          setLoading(false);
        }
    }

    useEffect(() =>{
      fetchAPI()
    }, []);

  return (
    <>
      <Navbar showViewMore={false}/>
      {loading ? (
        <LoadingIcon />
      ) : (
        <Box display="grid" gridTemplateColumns="auto auto auto auto" gap="20px" marginTop={2}>
          {productData.map((data, index) => {
            return <ProductCard data={data} key={index} />;
          })}
        </Box>
      )}
    </>
    
  )
}

Homepage.propTypes = {}

export default Homepage