import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '@mui/material';

const LayoutContainer = ({ children }) => (
  <Container fixed sx={{ my: 2 }}>
    { children }
  </Container>
);

LayoutContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LayoutContainer;
