import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const logos = [
  {
    label: 'Facebook',
    image: <FacebookIcon sx={{ color: 'secondaryColor' }} />,
    imageWidth: '125',
    linkUrl: 'https://facebook.com/',
  },
  {
    label: 'Twitter',
    image: <TwitterIcon sx={{ color: 'secondaryColor' }} />,
    imageWidth: '125',
    linkUrl: 'https://twitter.com/',
  },
  {
    label: 'Instagram',
    image: <InstagramIcon sx={{ color: 'secondaryColor' }} />,
    imageWidth: '75',
    linkUrl: 'https:/instagram.com',
  },
];

export default logos;
