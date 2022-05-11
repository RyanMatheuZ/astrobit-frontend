import React from 'react'

import { Box } from '@mui/material'

import HelmetContainer from '../../components/HelmetContainer'
import LayoutDefault from '../../components/Layouts/LayoutDefault'
import Container from '../../components/Layouts/Container'

import Header from './Header'
import FavoriteCoins from './FavoriteCoins'

const Admin = () =>
  <LayoutDefault>
    <HelmetContainer
      title={'Ryan'}
      description="Aqui é o seu espaço. Esteja por dentro de suas escolhas!"
    />
    <Container>
      <Box sx={{ bgcolor: 'white', borderRadius: 5, boxShadow: 3, maxWidth: '900px', margin: 'auto', p: 3 }}>
        <Header />
        <FavoriteCoins />
      </Box>
    </Container>
  </LayoutDefault>

export default Admin
