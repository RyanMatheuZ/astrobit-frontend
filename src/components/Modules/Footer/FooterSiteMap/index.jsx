import React from 'react';

import { Link } from 'react-router-dom';

import { List, ListItem } from '@mui/material';

const siteMaps = [
  { label: 'Início', path: '/' },
  { label: 'Sobre', path: '/about' },
  { label: 'Mercado', path: '/market' },
  { label: 'Contato', path: '/contact' },
];

const FooterSiteMap = () => (
  <List>
    <ListItem
      disablePadding
      sx={{
        color: 'blackColor', justifyContent: { xs: 'center', md: 'flex-start' }, fontSize: 'h6.fontSize', fontFamily: 'Montserrat', fontWeight: 600,
      }}
    >
      Mapa do site
    </ListItem>
    {siteMaps.map((siteMap) => (
      <Link key={siteMap.label} to={siteMap.path}>
        <ListItem
          disablePadding
          sx={{
            color: 'blackColor', justifyContent: { xs: 'center', md: 'flex-start' }, fontFamily: 'Montserrat', mt: 1,
          }}
        >
          {siteMap.label}
        </ListItem>
      </Link>
    ))}
  </List>
);

export default FooterSiteMap;
