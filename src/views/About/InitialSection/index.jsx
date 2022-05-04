import React from 'react'

import { Grid, Box, Typography } from '@mui/material'

const InitialText = () =>
  <Grid
    container
    sx={{ mt: 8 }}
  >
    <Grid
      item
      xs={12}
      md={6}
      sx={{ display: 'flex', justifyContent: 'center', my: 2 }}
    >
      <img
        src={process.env.PUBLIC_URL + '/icons/about-one.svg'}
        alt="Mãe e filha"
        title="Mãe e filha"
        draggable="false"
        style={{ maxWidth: '250px', width: '100%' }}
      />
    </Grid>
    <Grid
      item
      xs={12}
      md={6}
      sx={{ my: 2 }}
    >
      <Typography
        component="h3"
        sx={{ color: 'primaryColor', textAlign: 'left', fontSize: { xs: '20px', md: '28px' }, fontFamily: 'Montserrat', fontWeight: 600, mb: 1 }}
      >
        Simplificamos para que sonhos <br /> possam ser realizados
      </Typography>
      <Typography component="p">
        Com 7 anos de mercado, a Astrobit surgiu para facilitar a vida financeira das pessoas. Somos um time com mais de 40 pessoas apaixonadas por construir o futuro. Nos dedicamos para tornar o mundo das criptomoedas disponível e acessível de forma simples, rápida e segura, permitindo que qualquer pessoa consiga investir em sua independência financeira.
      </Typography>
    </Grid>
  </Grid>

const InitialSection = () =>
  <Box component="section">
    <InitialText />
  </Box>

export default InitialSection
