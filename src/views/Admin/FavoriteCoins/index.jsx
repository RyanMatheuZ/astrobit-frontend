import React, { useEffect, useState } from 'react';

import { Box, Typography, Divider } from '@mui/material';
import axios from 'axios';

import CardSection from '../../Market/CardSection';

const FavoriteCoins = () => {
  const coinList = [];
  const userCoins = [];

  const [x, setX] = React.useState();

  const userId = localStorage.getItem('id');

  const [dataIsInTheLoadingPhase, setDataIsInTheLoadingPhase] = useState(true);
  useEffect(() => {
    axios.get(`https://localhost:5001/api/Usuario/${userId}`)
      .then((response) => {
        coinList.push(response.data.listaMoeda);
        coinList.map((item) => item.map((coin) => userCoins.push(coin.moedaId)));

        const ids = userCoins.join();
        if (ids.length > 0) {
          axios.get('https://api.coingecko.com/api/v3/coins/markets', {
            params: {
              vs_currency: 'usd',
              ids,
            },
          })
            .then((res) => {
              setX(res.data);
              console.log(userCoins);
              setDataIsInTheLoadingPhase(false);
            })
            .catch((err) => console.log(err));
        }
      }).catch((err) => console.log(err));
  }, []);

  return (
    <Box>
      <Typography
        component="h1"
        sx={{
          color: 'primaryColor', textAlign: 'center', fontSize: { xs: '15px', md: '20px' }, fontFamily: 'Montserrat', fontWeight: 600, marginTop: 5, marginBottom: 2,
        }}
      >
        Suas moedas favoritas
        <Divider />
      </Typography>
      {!x && (
        <Typography sx={{
          color: 'primaryColor', textAlign: 'center', fontSize: { xs: '10px', md: '15px' }, fontFamily: 'Montserrat', fontWeight: 600, marginTop: 5, marginBottom: 2,
        }}
        >
          Nenhuma moeda favorita!
        </Typography>
      )}
      <Box
        component="section"
        sx={{
          display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 3,
        }}
      >
        {!dataIsInTheLoadingPhase && (
          <>
            {x.map((allCoin) => (
              <CardSection
                key={allCoin.name}
                name={allCoin.name}
                symbol={allCoin.symbol}
                image={allCoin.image}
                currentPrice={allCoin.current_price}
                fiatCurrency="$"
                disfavorCoinStatus
              />
            ))}
          </>
        )}
      </Box>
      <Box />
    </Box>
  );
};
export default FavoriteCoins;
