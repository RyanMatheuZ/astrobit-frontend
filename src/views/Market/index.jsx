/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'

import { Box } from '@mui/material'

import LayoutDefaut from '../../components/Layouts/LayoutDefault'

import Header from '../../components/Modules/Header'
import Footer from '../../components/Modules/Footer'

import Container from '../../components/Layouts/Container'

import ProgressComponent from './ProgressComponent'
import CardSection from './CardSection'

import getHttpRequest from '../../utils/getHttpRequest'

const Market = () => {
  const [allCoins, setAllCoins] = useState([])

  const url = `${process.env.REACT_APP_CRYPTO_API}/coins/markets`
  const params = {
    vs_currency: 'usd',
    order: 'market_cap_desc',
    per_page: 21,
    page: 1,
    sparkline: true
  }

  useEffect(() => {
    getHttpRequest(url, params)
      .then(response => setAllCoins(response.data))
      .catch(error => console.error(error))
  }, [url, params])

  return (
    <LayoutDefaut>
      <Container>
        <Box
          component="section"
          sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 3 }}
        >
          {allCoins.map((item, i) => (
            <CardSection
              key={i}
              name={item.name}
              symbol={item.symbol}
              image={item.image}
              currentPrice={item.current_price}
            />
          ))}
        </Box>
      </Container>
    </LayoutDefaut>
  )
}

export default Market
