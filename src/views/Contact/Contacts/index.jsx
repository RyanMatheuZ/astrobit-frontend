import React from 'react'

import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled'
import EmailIcon from '@mui/icons-material/Email'
import LanguageIcon from '@mui/icons-material/Language'

const contacts = [
  {
    label: '(16) 2681-7787',
    image: <PhoneEnabledIcon sx={{ color: 'secondaryColor', marginRight: '15px' }} />
  },
  {
    label: 'astrobit@inc.com',
    image: <EmailIcon sx={{ color: 'secondaryColor', marginRight: '15px' }} />
  },
  {
    label: 'astrobit.vercel.app',
    image: <LanguageIcon sx={{ color: 'secondaryColor', marginRight: '15px' }} />
  }
]

export default contacts
