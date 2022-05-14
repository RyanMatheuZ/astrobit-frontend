import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { Box } from '@mui/material';

const Logo = ({ flexGrowValue }) => {
  const logoUrl = `${process.env.PUBLIC_URL}/icons/logo/astrobit-logo.svg`;

  return (
    <Box
      component="div"
      sx={{ flexGrow: flexGrowValue }}
    >
      <Link to="/">
        <img
          src={logoUrl}
          alt="Astrobit"
          title="Astrobit"
          draggable="false"
          width="70"
        />
      </Link>
    </Box>
  );
};

Logo.propTypes = {
  flexGrowValue: PropTypes.number.isRequired,
};

export default Logo;
