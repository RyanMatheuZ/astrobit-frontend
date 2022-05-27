import React from 'react';
import { Box } from '@mui/material';

const GreenSquare = () => (
  <Box
    component="span"
    sx={{
      bgcolor: 'secondaryColor', display: 'inline-block', borderRadius: '3px', width: '15px', height: '15px',
    }}
  />
);

export default GreenSquare;
