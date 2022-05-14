import React from 'react';

import { Box, Typography } from '@mui/material';

const FavoriteCoins = () => (
  <Box>
    <Typography
      component="h1"
      sx={{
        color: 'primaryColor', fontSize: { xs: '15px', md: '20px' }, fontFamily: 'Montserrat', fontWeight: 600, marginTop: 5,
      }}
    >
      Suas moedas favoritas
    </Typography>
    <Box />
  </Box>
);

export default FavoriteCoins;
