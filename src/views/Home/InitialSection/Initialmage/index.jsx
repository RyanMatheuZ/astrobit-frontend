import React from 'react'

import { Grid } from '@mui/material'

const InitialImage = () =>
  <Grid
    item
    component="article"
    xs={12}
    md={6}
    sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', maxWidth: '450px', maxHeight: '450px' }}
  >
    <img
      src={process.env.PUBLIC_URL + '/images/pickaxe-bitcoin.png'}
      alt="Picareta e Bitcoin"
      draggable="false"
      width="100%"
    />
  </Grid>

export default InitialImage
