import React from 'react'

import { Grid, Box, Typography } from '@mui/material'

const SecondText = () =>
  <Grid
    container
    sx={{ mt: 8 }}
  >
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
        Paixão em construir o futuro
      </Typography>
      <Typography component="p">
        Nascemos da vontade de desenvolver no Brasil um mercado sólido e com credibilidade para negociação de bitcoin e outras criptomoedas. Nos consolidamos como uma das maiores e mais antigas exchanges de criptoativos do mundo com mais de 20 bilhões de reais negociados até então, chegando a marca de quase 1 milhão de clientes cadastrados.
      </Typography>
    </Grid>
    <Grid
      item
      xs={12}
      md={6}
      sx={{ display: 'flex', justifyContent: 'center', my: 2 }}
    >
      <img
        src={process.env.PUBLIC_URL + '/icons/about-two.svg'}
        alt="Estudante"
        title="Estudante"
        draggable="false"
        style={{ maxWidth: '350px', width: '100%' }}
      />
    </Grid>
  </Grid>

const SecondSection = () =>
  <Box component="section">
    <SecondText />
  </Box>

export default SecondSection
