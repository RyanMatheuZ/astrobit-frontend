import React from 'react'

import { Grid, Box, Typography } from '@mui/material'

import GreenSquare from '../../../../components/Elements/GreenSquare'

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
            sx={{ color: 'primaryColor', fontSize: 38, fontFamily: 'Montserrat', fontWeight: 700 }}
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
          sx={{ display: 'inline' }}
        >
          <Typography
            component="p"
            sx={{ color: 'blackColor', fontSize: 20, fontFamily: 'Montserrat', fontWeight: 400 }}
          >
            O mercado de Criptomoedas é o futuro
            da validação, transferência e segurança
            de ativos globais sem a necessidade de um
            intermediário < GreenSquare />
          </Typography>
        </Grid>
      </Grid>
    </Box>
  </Grid>

export default InitialText
