import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Box, Typography } from '@mui/material';

const Card = ({ header, text, image }) => (
  <Box sx={{
    display: 'flex', flexDirection: 'column', alignItems: 'center', my: 2, mx: 3,
  }}
  >
    <Box component="figure">
      <img
        src={`${process.env.PUBLIC_URL}/icons/${image}.svg`}
        alt={text}
        title={text}
        draggable="false"
        width="50"
      />
    </Box>
    <Typography sx={{ fontSize: { xs: '20px', md: '28px' }, fontWeight: 600, my: 2 }}>
      {header}
    </Typography>
    <Typography sx={{ textAlign: 'center' }}>
      {text}
    </Typography>
  </Box>
);

const CardSection = () => (
  <Grid
    container
    sx={{ py: 3 }}
  >
    <Grid item xs={12} md={4}>
      <Card header="9.2" text="Melhor NPS entre todas as fintechs do Brasil" image="card-one" />
    </Grid>
    <Grid item xs={12} md={4} sx={{ borderLeft: { xs: 0, md: 2 }, borderRight: { xs: 0, md: 2 }, borderColor: { md: 'primaryColor' } }}>
      <Card header="7 anos" text="Pioneira e referência no mercado desde 2014" image="card-two" />
    </Grid>
    <Grid item xs={12} md={4}>
      <Card header="14 bilhões" text="Em reais negociados de 2014 a 2021" image="card-three" />
    </Grid>
  </Grid>
);

Card.propTypes = {
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CardSection;
