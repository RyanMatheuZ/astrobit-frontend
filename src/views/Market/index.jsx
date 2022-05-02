import React, { useState, useEffect } from 'react'

import { Box } from '@mui/material'

import LayoutDefaut from '../../components/Layouts/LayoutDefault'
import Container from '../../components/Layouts/Container'

import CardSection from './CardSection'
import CardLoading from './CardLoading'

import getHttpRequest from '../../utils/getHttpRequest'

const Market = () => {
  const [dataIsInTheLoadingPhase, setDataIsInTheLoadingPhase] = useState(true)
  const [allCoins, setAllCoins] = useState([])

  let currencyType = 'usd'
  let order = 'market_cap_desc'
  let amountOfCoinsPerPage = 15
  let currentPage = 0

  const url = `${process.env.REACT_APP_CRYPTO_API}/coins/markets`

  useEffect(() => {
    getHttpRequest(url, {
      vs_currency: currencyType,
      order: order,
      per_page: amountOfCoinsPerPage,
      page: currentPage,
      sparkline: true
    })
      .then(response => {
        setAllCoins(response.data)
        setDataIsInTheLoadingPhase(false)
      })
      .catch(error => console.error(error))
  }, [url, currencyType, order, amountOfCoinsPerPage, currentPage])

  return (
    <LayoutDefaut>
      <Container>
        <Box
          component="section"
          sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 3 }}
        >
          {!dataIsInTheLoadingPhase && (
            <>
              {allCoins.map((item, i) => (
                <CardSection
                  key={i}
                  name={item.name}
                  symbol={item.symbol}
                  image={item.image}
                  currentPrice={item.current_price}
                />
              ))}
            </>
          )}

          <CardLoading
            amountOfCoinsPerPage={amountOfCoinsPerPage}
            dataIsInTheLoadingPhase={dataIsInTheLoadingPhase}
          />
        </Box>
      </Container>
    </LayoutDefaut>
  )
}

export default Market
