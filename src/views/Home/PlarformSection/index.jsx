import React from 'react'

import { Grid, Box, Typography } from '@mui/material'

const PlatformImage = () =>
  <Grid
    item
    xs={12}
    lg={6}
    sx={{ display: 'flex', alignItems: 'center' }}
  >
    <img
      src={process.env.PUBLIC_URL + '/mockups/mockup-devices.png'}
      alt="Astrobit em dispositivos"
      title="Astrobit em dispositivos"
      draggable="false"
      style={{ filter: 'drop-shadow(0px 5px 5px gray)', maxWidth: '600px', width: '100%' }}
    />
  </Grid>

const ExchangeInfo = ({ icon, title, text }) =>
  <Box sx={{ display: 'flex', mb: 2 }}>
    <Box
      component="figure"
      sx={{ display: 'flex', alignItems: 'flex-start', mr: 1 }}
    >
      <img
        src={process.env.PUBLIC_URL + `/icons/${icon}.svg`}
        alt={title}
        title={title}
        draggable="false"
        width="35"
      />
    </Box>

    <Box>
      <Typography sx={{ color: 'blackColor', fontSize: { xs: '18px', md: '20px' }, fontFamily: 'Montserrat', fontWeight: 600, mb: 1 }}>
        {title}
      </Typography>
      <Typography sx={{ color: 'grayColor', fontSize: { xs: '14px', md: '16px' }, fontFamily: 'Montserrat', fontWeight: 400 }}>
        {text}
      </Typography>
    </Box>
  </Box>

const PlatformText = () =>
  <Grid
    item
    xs={12}
    lg={4}
  >
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography
        component="h2"
        sx={{ color: 'primaryColor', fontSize: { xs: '22px', md: '30px' }, fontFamily: 'Montserrat', fontWeight: 700, mb: 3 }}
      >
        Astrobit Exchange
      </Typography>

      <ExchangeInfo icon="exchange-one" title="+50 criptoativos para negociar" text="Aqui você encontra Bitcoin e outras criptomoedas, tokens DeFi, tokens NFT, games e metaverso." />
      <ExchangeInfo icon="exchange-two" title="Benefícios para você" text="Com garantia cripto, depósitos e saques BRL via PIX e o melhor atendimento do Brasil você encontra aqui." />
      <ExchangeInfo icon="exchange-three" title="Muita praticidade" text="Uma plataforma sensacional, feita para todo tipo de usuário, seja iniciante, intermediário ou avançado." />
    </Box>
  </Grid>

const PlatformSection = () =>
  <Grid
    component="section"
    container
    sx={{ display: 'flex', justifyContent: 'space-around' }}
  >
    <PlatformImage />
    <PlatformText />
  </Grid>

export default PlatformSection
