import React from 'react'

import { List, ListItem } from '@mui/material'

import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const social = [
  {
    imageIcon: <FacebookIcon sx={{ bgcolor: 'white', color: 'primaryColor', border: 2, borderColor: 'blackColor', borderRadius: 1, width: 35, height: 35 }} />,
    linkUrl: 'https://www.facebook.com',
    title: 'Facebook'
  },
  {
    imageIcon: <InstagramIcon sx={{ bgcolor: 'white', color: 'primaryColor', border: 2, borderColor: 'blackColor', borderRadius: 1, width: 35, height: 35 }} />,
    linkUrl: 'https://www.instagram.com',
    title: 'Instagram'
  },
  {
    imageIcon: <LinkedInIcon sx={{ bgcolor: 'white', color: 'primaryColor', border: 2, borderColor: 'blackColor', borderRadius: 1, width: 35, height: 35 }} />,
    linkUrl: 'https://www.linkedin.com',
    title: 'LinkedIn'
  }
]

const FooterSocial = () =>
  <List sx={{ display: 'flex', flexDirection: { xs: 'row', md: 'column' } }}>
    {social.map((item, i) => (
      <ListItem
        disablePadding
        key={i}
        sx={{ mx: { xs: 0.5, md: 0 }, my: 0.5 }}
      >
        <a
          href={item.linkUrl}
          title={item.title}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.imageIcon}
        </a>
      </ListItem>
    ))}
  </List>

export default FooterSocial
