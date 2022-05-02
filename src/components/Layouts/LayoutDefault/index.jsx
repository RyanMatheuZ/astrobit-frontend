import React from 'react'

import { Box } from '@mui/material'

import Header from '../../Modules/Header'
import Footer from '../../Modules/Footer'

const LayoutDefault = ({ children }) =>
  <>
    <Header />
    <Box sx={{ my: 8 }}>
      {children}
    </Box>
    <Footer />
  </>

export default LayoutDefault
