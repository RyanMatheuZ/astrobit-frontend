import React from 'react'

import { Box, Grid, Typography } from '@mui/material'

import { Container } from '../../../components/Layouts/Container'

const Info = ({ icon, text }) =>
  <Box>
    <img
      src={process.env.PUBLIC_URL + `/icons/${icon}`}
      alt=""
      title=""
      draggable="false"
    />

    <Typography>
      {text}
    </Typography>
  </Box>


const InfoSection = () =>
  <Container>
  </Container>

export default InfoSection
