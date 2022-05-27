import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../Elements/Logo';
import Container from '../../Layouts/Container';
import DropdownMenu from './DropdownMenu';

const pages = [
  { label: 'Início', path: '/' },
  { label: 'Sobre', path: '/about' },
  { label: 'Mercado', path: '/market' },
  { label: 'Contato', path: '/contact' },
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  return (
    <AppBar position="static" component="header" sx={{ bgcolor: 'white', boxShadow: 0 }}>
      <Container>
        <Toolbar disableGutters sx={{ my: 0.5 }}>
          <Logo flexGrowValue={1} />

          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link key={page.label} to={page.path}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: 'blackColor', textTransform: 'capitalize', fontSize: 'h6.fontSize', fontWeight: 500, my: 2, px: 2, display: 'block',
                  }}
                >
                  {page.label}
                </Button>
              </Link>
            ))}
            <DropdownMenu />
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: 'secondaryColor' }} />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              keepMounted
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
              PaperProps={{
                sx: {
                  width: '100%',
                },
              }}
            >
              {pages.map((page) => (
                <Link key={page.label} to={page.path}>
                  <MenuItem sx={{ color: 'blackColor' }} onClick={handleCloseNavMenu}>
                    {page.label}
                  </MenuItem>
                </Link>
              ))}
              <DropdownMenu />
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
