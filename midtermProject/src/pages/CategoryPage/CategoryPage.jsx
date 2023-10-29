import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import ProductCard from '../../components/ProductCard/ProductCard';
import { Box } from '@mui/material';
import LoadingIcon from '../../components/LoadinIcon/LoadingIcon';

const URL = "https://fakestoreapi.com/products/category";

const CategoryPage = props => {
  const {category} = useParams()
  const [catrgoryData, setCategoryData] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDataByCategory();
  }, [category]);

  const getDataByCategory = async () => {
    try {
      const { data } = await axios.get(`${URL}/${category}`);
      setCategoryData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar showViewMore={true}/>
      {loading ? (
        <LoadingIcon />
      ) : (
        <Box display='grid' gridTemplateColumns='auto auto auto auto' gap='20px' marginTop={2}>
        {
            catrgoryData.map((data, index) =>{
                return <ProductCard data={data} key={index}/>
            })
        }
      </Box>
      )}
    </>
  )
}

CategoryPage.propTypes = {}

export default CategoryPage