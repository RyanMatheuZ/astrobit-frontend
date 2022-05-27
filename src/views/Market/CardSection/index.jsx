import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Box, Typography, Button } from '@mui/material';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const CardSection = ({
  id, name, symbol, currentPrice, image, fiatCurrency, disfavorCoinStatus,
}) => {
  const userId = localStorage.getItem('id');

  const coinList = [];
  const userCoins = [];

  const favoriteCoin = (idCoin) => {
    axios.get(`https://localhost:5001/api/Usuario/${userId}`)
      .then((response) => {
        coinList.push(response.data.listaMoeda);
        coinList.map((item) => item.map((coins) => userCoins.push(coins.moedaId)));

        if (userCoins.includes(idCoin)) {
          toast.error('Moeda já favoritada!');
          return;
        }

        axios.get(`https://localhost:5001/api/UsuarioMoeda/Favoritar/${userId}/${idCoin}`)
          .then(() => toast.success('Moeda favoritada!'));
      });
  };

  const disfavorCoin = (idCoin) => {
    axios.delete(`https://localhost:5001/api/UsuarioMoeda/DeletarMoeda/${idCoin}/${userId}`)
      .then(() => {
        toast.success('Moeda removida com sucesso!');
        window.location.reload();
      });
  };

  return (
    <Box
      component="article"
      sx={{
        display: 'flex', flexDirection: 'column', bgcolor: 'white', borderLeft: 3, borderColor: 'tertiaryColor', borderTopRightRadius: '20px', borderBottomLeftRadius: '20px', boxShadow: 6, cursor: 'default', width: '350px', p: 3,
      }}
    >
      <Box
        component="figure"
        sx={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1,
        }}
      >
        <img
          src={image}
          alt={name}
          title={name}
          draggable="false"
          width="50"
          style={{ borderRadius: '50%' }}
        />

        {(userId && disfavorCoinStatus === false) && (
          <Button
            onClick={() => favoriteCoin(id)}
            sx={{
              display: 'flex', alignItems: 'center', borderRadius: '5px', p: 1.5,
            }}
          >
            <FavoriteRoundedIcon fontSize="medium" sx={{ color: 'grayColor' }} />
          </Button>
        )}

        {disfavorCoinStatus && (
          <Button
            onClick={() => disfavorCoin(id)}
            sx={{
              display: 'flex', alignItems: 'center', borderRadius: '5px', p: 1.5,
            }}
          >
            <DeleteOutlineIcon fontSize="medium" sx={{ color: 'red' }} />
          </Button>
        )}
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
  );
};

export default CardSection;
