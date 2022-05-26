import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import { Box } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import HelmetContainer from '../../components/HelmetContainer';
import LayoutDefault from '../../components/Layouts/LayoutDefault';
import Container from '../../components/Layouts/Container';
import Header from './Header';
import FavoriteCoins from './FavoriteCoins';

const Admin = () => {
  const navigate = useNavigate();

  const userId = localStorage.getItem('id');

  const [userData, setUserData] = useState(userId);

  useEffect(() => {
    if (!userId) {
      navigate('/login', { replace: true });
      return;
    }

    axios.get(`https://localhost:5001/api/Usuario/${userId}`)
      .then((response) => setUserData(response.data.usuario));
  }, []);

  return (
    <LayoutDefault>
      <HelmetContainer
        title={userId ? String(userData.nome) : ''}
        description="Aqui é o seu espaço. Esteja por dentro de suas escolhas!"
      />
      <Container>
        <Box sx={{
          bgcolor: 'white', borderRadius: 5, boxShadow: 3, maxWidth: '900px', margin: 'auto', p: 3,
        }}
        >
          <Header />
          <FavoriteCoins />
        </Box>
        <ToastContainer />
      </Container>
    </LayoutDefault>
  );
};

export default Admin;
