import React, { useState, useEffect } from 'react';

import { Box, Typography, Tooltip } from '@mui/material';

import axios from 'axios';

import StarIcon from '@mui/icons-material/Star';
import PersonIcon from '@mui/icons-material/PersonRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GreenSquare from '../../../components/Elements/GreenSquare';

const Header = () => {
  const userId = localStorage.getItem('id');
  const [userData, setUserData] = useState(userId);
  useEffect(() => {
    axios.get(`https://localhost:5001/api/Usuario/${userId}`)
      .then((response) => setUserData(response.data.usuario));
  }, []);
  const userStatus = [
    {
      label: 'Data de entrada',
      image: <StarIcon sx={{ color: 'secondaryColor', width: '20px' }} />,
      value: '10/05/2022',
    },
    {
      label: 'Perfil do investidor',
      image: <PersonIcon sx={{ color: 'secondaryColor', width: '20px' }} />,
      value: !userId ? '' : userData.tipoPerfil,
    },
    {
      label: 'Moedas favoritas',
      image: <FavoriteIcon sx={{ color: 'secondaryColor', width: '20px' }} />,
      value: '3',
    },
  ];
  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{
        display: 'flex', alignItems: 'center', outline: '1px solid #999', borderRadius: 2,
      }}
      >
        <img
          alt={!userId ? '' : userData.nome}
          title={!userId ? '' : userData.nome}
          draggable="false"
          style={{
            borderRadius: 5, width: '120px', height: '150px', opacity: 0,
          }}
        />
      </Box>
      <Box sx={{
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginLeft: 2,
      }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography sx={{ color: 'primaryColor', fontSize: '30px', fontWeight: 600 }}>
            Olá,
            {' '}
            {!userId ? '' : userData.nome}
            {' '}
            <GreenSquare />
          </Typography>
          <Typography sx={{ color: 'grayColor', fontSize: '14px', fontWeight: 500 }}>
            Bem-vindo novamente!
          </Typography>
        </Box>
        <Box sx={{
          display: 'flex', flexDirection: 'column', width: 'fit-content', cursor: 'default',
        }}
        >
          {userStatus.map((status) => (
            <Box
              key={status.label}
              sx={{ display: 'flex', alignItems: 'center', width: 'fit-content' }}
            >
              {status.image}
              <Tooltip title={status.label}>
                <Typography sx={{ fontSize: '14px', fontWeight: 500, marginLeft: 1 }}>
                  {status.value}
                </Typography>
              </Tooltip>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
