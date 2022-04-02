import React from 'react'

import { Grid } from '@mui/material'

import InitialText from './InitialText'
import InitialImage from './Initialmage'

const InitialSection = () =>
  <Grid
    component="section"
    container
  >
    <InitialText />
    <InitialImage />
  </Grid>

export default InitialSection
