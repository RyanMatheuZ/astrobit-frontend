import React from 'react'

import { Box, Typography, Button } from '@mui/material'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'

const CardSection = ({ name, symbol, currentPrice, image, fiatCurrency }) => {
  const favoriteCoin = (name) => alert(name)

  return (
    <Box
      component="article"
      sx={{ display: 'flex', flexDirection: 'column', bgcolor: 'white', borderLeft: 3, borderColor: 'tertiaryColor', borderTopRightRadius: '20px', borderBottomLeftRadius: '20px', boxShadow: 6, cursor: 'default', width: '350px', p: 3 }}
    >
      <Box
        component="figure"
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}
      >
        <img
          src={image}
          alt={name}
          title={name}
          draggable="false"
          width="50"
          style={{ borderRadius: '50%' }}
        />

        <Button
          onClick={() => favoriteCoin(name)}
          sx={{ display: 'flex', alignItems: 'center', borderRadius: '5px', p: 1.5 }}
        >
          <FavoriteRoundedIcon color="warning" fontSize="medium" />
        </Button>
      </Box>

      <Box>
        <Typography
          component="h2"
          sx={{ fontSize: '20px', fontWeight: 700 }}
          title="Nome"
        >
          {name}
        </Typography>

        <Typography
          component="span"
          sx={{ fontSize: '14px', fontWeight: 400, textTransform: 'uppercase' }}
          title="Abreviação"
        >
          {symbol}
        </Typography>
      </Box>

      <Box>
        <Typography
          component="p"
          sx={{ fontSize: '16px', mt: 2 }}
          title="Preço atual"
        >
          <Typography
            component="span"
            sx={{ fontSize: '14px', fontWeight: 600, marginRight: 0.5 }}
          >
            {fiatCurrency}
          </Typography>

          {currentPrice}
        </Typography>
      </Box>
    </Box>
  )
}

export default CardSection
