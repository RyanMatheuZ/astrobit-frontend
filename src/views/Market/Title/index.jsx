import React from 'react';
import { Typography } from '@mui/material';
import GreenSquare from '../../../components/Elements/GreenSquare';

const Title = () => (
  <Typography
    component="h1"
    sx={{
      color: 'primaryColor', textAlign: 'center', fontSize: { xs: '30px', md: '38px' }, fontFamily: 'Montserrat', fontWeight: 700, mb: 4,
    }}
  >
    Acompanhe o mercado
    {' '}
    <GreenSquare />
  </Typography>
);

export default Title;
