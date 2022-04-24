import React from 'react'

import { Container } from '@mui/material'

const LayoutContainer = ({ children }) => <Container fixed sx={{ my: 2 }}>{ children }</Container>

export default LayoutContainer
