import React from 'react';
import PersonIcon from '@mui/icons-material/PersonAdd';
import LoginIcon from '@mui/icons-material/Login';

const menuItems = [
  {
    label: 'Cadastre-se',
    path: '/register',
    image: <PersonIcon fontSize="small" sx={{ color: 'primaryColor' }} />,
  },
  {
    label: 'Entrar',
    path: '/login',
    image: <LoginIcon fontSize="small" sx={{ color: 'primaryColor' }} />,
  },
];

export default menuItems;
