import React from 'react';
import { List, ListItem } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const socials = [
  {
    label: 'Facebook',
    imageIcon: <FacebookIcon sx={{
      bgcolor: 'white', color: 'primaryColor', borderRadius: 1, width: 35, height: 35,
    }}
    />,
    linkUrl: 'https://www.facebook.com',
  },
  {
    label: 'Instagram',
    imageIcon: <InstagramIcon sx={{
      bgcolor: 'white', color: 'primaryColor', borderRadius: 1, width: 35, height: 35,
    }}
    />,
    linkUrl: 'https://www.instagram.com',
  },
  {
    label: 'LinkedIn',
    imageIcon: <LinkedInIcon sx={{
      bgcolor: 'white', color: 'primaryColor', borderRadius: 1, width: 35, height: 35,
    }}
    />,
    linkUrl: 'https://www.linkedin.com',
  },
];

const FooterSocial = () => (
  <List sx={{ display: 'flex', flexDirection: { xs: 'row', md: 'column' } }}>
    {socials.map((social) => (
      <ListItem
        disablePadding
        key={social.label}
        sx={{ mx: { xs: 0.5, md: 0 }, my: 0.5 }}
      >
        <a
          href={social.linkUrl}
          title={social.label}
          target="_blank"
          rel="noopener noreferrer"
        >
          {social.imageIcon}
        </a>
      </ListItem>
    ))}
  </List>
);

export default FooterSocial;
