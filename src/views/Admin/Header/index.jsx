import React from 'react'

import { Box, Typography, Tooltip } from '@mui/material'

import StarIcon from '@mui/icons-material/Star'
import PersonIcon from '@mui/icons-material/PersonRounded'
import FavoriteIcon from '@mui/icons-material/Favorite'

import GreenSquare from '../../../components/Elements/GreenSquare'

// Conservador
// Moderado
// Experiente

const status = [
  {
    label: 'Data de entrada',
    image: <StarIcon sx={{ color: 'secondaryColor', width: '20px' }} />,
    value: '10/05/2022'
  },
  {
    label: 'Perfil do investidor',
    image: <PersonIcon sx={{ color: 'secondaryColor', width: '20px' }} />,
    value: 'Experiente'
  },
  {
    label: 'Moedas favoritas',
    image: <FavoriteIcon sx={{ color: 'secondaryColor', width: '20px' }} />,
    value: '3'
  }
]

const Header = () =>
  <Box sx={{ display: 'flex' }}>
    <Box sx={{ display: 'flex', alignItems: 'center', outline: '1px solid #999', borderRadius: 2 }}>
      <img
        src={`${process.env.PUBLIC_URL}/images/ryan.jpg`}
        alt="Ryan"
        title="Ryan"
        draggable="false"
        style={{ borderRadius: 5, width: '120px', height: '150px', opacity: 0 }}
      />
    </Box>
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginLeft: 2 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography sx={{ color: 'primaryColor', fontSize: '30px', fontWeight: 600 }}>
          Olá, Ryan <GreenSquare />
        </Typography>
        <Typography sx={{ color: 'grayColor', fontSize: '14px', fontWeight: 500 }}>
          Bem-vindo novamente!
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: 'fit-content', cursor: 'default' }}>
        {status.map((item, i) => (
          <Box
            key={i}
            sx={{ display: 'flex', alignItems: 'center', width: 'fit-content' }}
          >
            {item.image}
            <Tooltip title={item.label}>
              <Typography sx={{ fontSize: '14px', fontWeight: 500, marginLeft: 1 }}>
                {item.value}
              </Typography>
            </Tooltip>
          </Box>
        ))}
      </Box>
    </Box>
  </Box>

export default Header
