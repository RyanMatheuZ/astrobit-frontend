import React from 'react';

import { Link } from 'react-router-dom';

import { Box, Grid, Typography } from '@mui/material';

const Text = () => (
  <Box sx={{
    display: 'flex', flexDirection: 'column', borderLeft: 5, borderColor: 'secondaryColor', paddingLeft: 3,
  }}
  >
    <Typography sx={{
      color: 'primaryColor', fontSize: { xs: '28px', md: '48px' }, fontWeight: 700,
    }}
    >
      Oops!
    </Typography>
    <Typography sx={{
      color: 'blackColor', fontSize: { xs: '18px', md: '28px' }, fontWeight: 400, marginTop: 1,
    }}
    >
      Essa página não pode ser encontrada.
    </Typography>
    <Link
      to="/"
      style={{ width: 'fit-content' }}
    >
      <Typography sx={{
        color: 'white', bgcolor: 'primaryColor', borderRadius: '20px', paddingBlock: 1, paddingInline: 2, marginTop: 2,
      }}
      >
        Voltar ao início
      </Typography>
    </Link>
  </Box>
);

const Image = () => (
  <Box component="figure" sx={{ marginBlock: 4 }}>
    <img
      src={`${process.env.PUBLIC_URL}/images/not-found.svg`}
      alt="Página não encontrada"
      title="Página não encontrada"
      draggable="false"
      style={{ maxWidth: '400px', width: '100%' }}
    />
  </Box>
);

const Section = () => (
  <Grid container>
    <Grid
      item
      xs={12}
      md={6}
      sx={{ display: 'flex', alignItems: 'center' }}
    >
      <Text />
    </Grid>
    <Grid
      item
      xs={12}
      md={6}
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Image />
    </Grid>
  </Grid>
);

export default Section;
