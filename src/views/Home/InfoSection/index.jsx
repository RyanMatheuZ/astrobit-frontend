import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

const Info = ({ icon, text }) => (
  <Box sx={{
    display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'center', my: 2,
  }}
  >
    <img
      src={`${process.env.PUBLIC_URL}/icons/${icon}.svg`}
      alt={text}
      title={text}
      draggable="false"
      width="30"
    />

    <Typography sx={{
      fontSize: { xs: '14px', md: '16px' }, textAlign: { xs: 'center', md: 'left' }, ml: { xs: 0, md: 2 }, width: { xs: '60%', md: '50%' },
    }}
    >
      {text}
    </Typography>
  </Box>
);

const InfoSection = () => (
  <Grid container sx={{ width: '80vw' }}>
    <Grid item xs={12} md={4}>
      <Info icon="info-one" text="Gerencie seus gostos e preferências" />
    </Grid>
    <Grid item xs={12} md={4} sx={{ borderLeft: { xs: 0, md: 2 }, borderRight: { xs: 0, md: 2 }, borderColor: { md: 'secondaryColor' } }}>
      <Info icon="info-two" text="Tenha um plano de investimentos" />
    </Grid>
    <Grid item xs={12} md={4}>
      <Info icon="info-three" text="Aprenda dicas com profissionais" />
    </Grid>
  </Grid>
);

export default InfoSection;
