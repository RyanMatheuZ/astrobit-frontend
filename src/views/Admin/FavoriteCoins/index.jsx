import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Box, Typography, Divider } from '@mui/material';
import CardSection from '../../Market/CardSection';

const FavoriteCoins = () => {
  const userId = localStorage.getItem('id');

  const coinList = [];
  const userCoins = [];

  const [userCoinsQuantity, setUserCoinsQuantity] = useState();

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
              setUserCoinsQuantity(res.data);
              setDataIsInTheLoadingPhase(false);
            })
            .catch((err) => console.log(err));
        }
      }).catch((err) => console.log(err));
  }, []);

  return (
    <Box>
      {userCoinsQuantity && (
        <Typography
          component="h1"
          sx={{
            color: 'primaryColor', textAlign: 'center', fontSize: { xs: '15px', md: '20px' }, fontFamily: 'Montserrat', fontWeight: 600, marginTop: 5, marginBottom: 2,
          }}
        >
          Suas moedas favoritas
          <Divider />
        </Typography>
      )}
      {!userCoinsQuantity && (
        <Box sx={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 5,
        }}
        >
          <img
            alt="Favorite sua moeda."
            src={`${process.env.PUBLIC_URL}/images/btc-empty.svg`}
            width="100px"
          />
          <Typography sx={{
            color: 'blackColor', textAlign: 'center', fontSize: { xs: '10px', md: '15px' }, fontFamily: 'Montserrat', fontWeight: 600, marginTop: 5, marginBottom: 2,
          }}
          >
            Nenhuma moeda favorita!
          </Typography>
          <Link
            to="/market"
            style={{
              display: 'flex', alignItems: 'center', padding: '5px 10px', fontSize: '13px', backgroundColor: '#8979F2', width: 'fit-content', height: 30, textAlign: 'center', borderRadius: 5, color: '#F2F2F2', fontFamily: 'Montserrat',
            }}
          >
            Ver moedas
          </Link>
        </Box>
      )}
      <Box
        component="section"
        sx={{
          display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 3,
        }}
      >
        {!dataIsInTheLoadingPhase && (
          <>
            {userCoinsQuantity.map((allCoin) => (
              <CardSection
                id={allCoin.id}
                key={allCoin.id}
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
