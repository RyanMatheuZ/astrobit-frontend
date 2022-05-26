import React from 'react';

import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { Box, Tooltip, IconButton } from '@mui/material';

import BackIcon from '@mui/icons-material/ArrowBackIosRounded';

import { ToastContainer } from 'react-toastify';

const ContainerForm = ({ children }) => (
  <>
    <ToastContainer />
    <Box sx={{
      display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' }, bgcolor: 'primaryColor', width: '100%', height: '200px', paddingInline: 10,
    }}
    >
      <Link to="/">
        <Tooltip title="Voltar ao inicio" sx={{ marginBottom: { xs: 5, md: 0 } }}>
          <IconButton>
            <BackIcon sx={{ color: 'white' }} />
          </IconButton>
        </Tooltip>
      </Link>
    </Box>

    <Box sx={{
      transform: 'translateY(-30%)',
      marginBlock: 10,
      marginInline: 'auto',
      paddingInline: 2,
      maxWidth: '500px',
      width: '100%',
    }}
    >
      {children}
    </Box>
  </>
);

ContainerForm.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ContainerForm;
