import React from 'react';

import { Link } from 'react-router-dom';

import { Box } from '@mui/material';

const WhiteLogo = () => {
  const logoUrl = `${process.env.PUBLIC_URL}/icons/logo/astrobit-white-logo.svg`;

  return (
    <Box component="div">
      <Link to="/">
        <img
          src={logoUrl}
          alt="Astrobit"
          title="Astrobit"
          draggable="false"
          width="150"
        />
      </Link>
    </Box>
  );
};

export default WhiteLogo;
