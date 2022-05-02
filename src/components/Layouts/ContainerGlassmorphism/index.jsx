import React from 'react'

import { Box } from '@mui/material'

const ContainerGlassmorphism = ({ children }) =>
  <Box sx={{ position: 'relative', my: 2 }}>
    <Box sx={{ bgcolor: 'white', filter: 'blur(10px)', py: 8 }}>
      <Box sx={{ opacity: 0 }}>
        {children}
      </Box>
    </Box>

    <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '2' }}>
      <Box>
        {children}
      </Box>
    </Box>
  </Box>

export default ContainerGlassmorphism
