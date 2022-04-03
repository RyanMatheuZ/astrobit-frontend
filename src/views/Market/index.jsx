import React, { useState, useEffect } from 'react'

import axios from 'axios'

import { Box, Typography } from '@mui/material'

import Header from '../../components/Modules/Header'
import Footer from '../../components/Modules/Footer'

import Container from '../../components/Layouts/Container'

const Market = () => {
  const [allCoins, setAllCoins] = useState([])

  useEffect(() => {
    const getAllCoins = async () => {
      const response = await axios.get(`${process.env.REACT_APP_CRYPTO_API}/coins/markets`, {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: 21,
          page: 1,
          sparkline: true
        }
      })

      setAllCoins(response.data)
    }

    getAllCoins()
  }, [])

  return (
    <>
      <Header />

      <Container>
        <Box
          component="section"
          sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 3 }}
        >
          {allCoins.map(coin => (
            <Box
              component="article"
              sx={{ display: 'flex', flexDirection: 'column', bgcolor: 'white', borderLeft: 3, borderColor: 'tertiaryColor', borderTopRightRadius: '20px', borderBottomLeftRadius: '20px', boxShadow: 6, cursor: 'default', width: '350px', p: 3 }}
            >
              <Box
                component="figure"
                sx={{ mb: 1 }}
              >
                <img
                  src={coin.image}
                  alt={coin.name}
                  title={coin.name}
                  draggable="false"
                  width="50"
                  style={{ borderRadius: '50%' }}
                />
              </Box>

              <Box>
                <Typography
                  component="h2"
                  sx={{ fontSize: '20px', fontWeight: 700 }}
                  title="Nome"
                >
                  {coin.name}
                </Typography>

                <Typography
                  component="span"
                  sx={{ fontSize: '14px', fontWeight: 400, textTransform: 'uppercase' }}
                  title="Abreviação"
                >
                  {coin.symbol}
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
                    sx={{ fontSize: '14px', fontWeight: 600 }}
                  >
                    $
                  </Typography>{coin.current_price}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>

      <Footer />
    </>
  )
}

export default Market
