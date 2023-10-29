import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';

const LoadingIcon = (props) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '300px' }}>
      <CircularProgress />
    </div>
  );
}

LoadingIcon.propTypes = {};

export default LoadingIcon;
