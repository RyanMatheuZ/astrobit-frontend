import React from 'react';
import PropTypes from 'prop-types';

import { Box } from '@mui/material';

import Header from '../../Modules/Header';
import Footer from '../../Modules/Footer';

const LayoutDefault = ({ children }) => (
  <>
    <Header />
    <Box sx={{ my: 8 }}>
      {children}
    </Box>
    <Footer />
  </>
);

LayoutDefault.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LayoutDefault;
