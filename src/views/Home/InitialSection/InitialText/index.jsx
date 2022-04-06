import React from 'react'

import { Grid, Box, Typography } from '@mui/material'

import GreenSquare from '../../../../components/Elements/GreenSquare'

const ParagraphText = ({ text }) =>
  <Typography
    component="p"
    sx={{ color: 'blackColor', fontSize: { xs: '16px', md: '20px' }, fontFamily: 'Montserrat', fontWeight: 400, my: 1 }}
  >
    {text} < GreenSquare />
  </Typography>

const InitialText = () =>
  <Grid
    item
    component="article"
    xs={12}
    md={6}
  >
    <Box>
      <Grid container>
        <Grid
          item
          xs={12}
        >
          <Typography
            component="h1"
            sx={{ color: 'primaryColor', fontSize: { xs: '30px', md: '38px' }, fontFamily: 'Montserrat', fontWeight: 700 }}
          >
            Astrobit
          </Typography>
        </Grid>

        <Grid
          item
          component="figure"
          xs={1}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <img
            src={process.env.PUBLIC_URL + '/icons/line.svg'}
            alt="Linha verde vertical"
            draggable="false"
            width="20"
          />
        </Grid>

        <Grid
          item
          xs={11}
          sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}
        >
          <ParagraphText text="O mercado de Criptomoedas é o futuro da validação, transferência e segurança de    ativos globais sem a necessidade de um intermediário" />

          <ParagraphText text="Se o bitcoin fosse uma empresa, hoje ele seria a 9º empresa mais valiosa do mundo avaliada em mais de $700 milhões" />

          <ParagraphText text="Mais de 10 milhões de pessoas possuem criptoativos e já formam um grupo maior que o de investidores da B3 e do Tesouro Direto juntos" />
        </Grid>
      </Grid>
    </Box >
  </Grid >

export default InitialText
