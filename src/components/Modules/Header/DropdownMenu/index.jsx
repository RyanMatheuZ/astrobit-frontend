import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import {
  Box,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  IconButton,
  Tooltip,
  Divider,
} from '@mui/material';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import menuItems from '../MenuItems';

const DropdownMenu = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const userId = localStorage.getItem('id');
  const handleLogout = () => {
    localStorage.clear();
    navigate('/', { replace: true });
  };
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Painel do usuário">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ bgcolor: 'white', width: 40, height: 40 }}>
              <AccountCircleIcon sx={{ color: 'primaryColor', width: 38, height: 38 }} />
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        display="none"
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {userId && (
          <>
            <MenuItem>
              <ListItemIcon>
                <Avatar fontSize="small" sx={{ color: 'primaryColor', bgcolor: 'white' }} />
              </ListItemIcon>
              <Link to="/admin">
                Minha conta
              </Link>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <ExitToAppIcon fontSize="small" sx={{ color: 'primaryColor', bgcolor: 'white' }} />
              </ListItemIcon>
              <Box onClick={() => handleLogout()}>
                Sair
              </Box>
            </MenuItem>
          </>
        )}
        {!userId && (
          <>
            {menuItems.map((menuItem) => (
              <MenuItem key={menuItem.label}>
                <ListItemIcon>
                  {menuItem.image}
                </ListItemIcon>
                <Link to={menuItem.path}>
                  <Typography sx={{ color: 'blackColor' }}>
                    {menuItem.label}
                  </Typography>
                </Link>
              </MenuItem>
            ))}
          </>
        )}
      </Menu>
    </>
  );
};

export default DropdownMenu;
