import React, { useState } from 'react'

import axios from 'axios'

import Container from '../../components/Layouts/Container'

const Market = () => {
    useState(() => {
        const getAllCoins = async () => {
            const response = await axios.get(`${ process.env.REACT_APP_CRYPTO_API }/coins/markets`, {
                params: {
                    vs_currency: 'usd',
                    order: 'market_cap_desc',
                    per_page: 100,
                    page: 1,
                    sparkline: true
                }
            })

            console.log(response.data)
        }

        getAllCoins()
    }, [])

    return (
        <Container>

        </Container>
    )
}

export default Market
