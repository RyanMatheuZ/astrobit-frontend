import React from 'react'

import { Box, Typography } from '@mui/material'

const logos = [
  { label: 'Forbes', image: 'forbes-logo', imageWidth: '125', linkUrl: 'https://forbes.com.br/' },
  { label: 'Estadão', image: 'estadao-logo', imageWidth: '125', linkUrl: 'https://www.estadao.com.br/' },
  { label: 'CNN', image: 'cnn-logo', imageWidth: '75', linkUrl: 'https://www.cnnbrasil.com.br' },
  { label: 'Meta', image: 'meta-logo', imageWidth: '125', linkUrl: 'https://about.facebook.com/br/meta/' },
  { label: 'Space X', image: 'spacex-logo', imageWidth: '125', linkUrl: 'https://www.spacex.com/' },
  { label: 'Red Hat', image: 'red-hat-logo', imageWidth: '175', linkUrl: 'https://www.redhat.com/en' }
]

const PartnerTitle = () =>
  <Typography
    component="h2"
    sx={{ color: 'primaryColor', fontSize: { xs: '26px', md: '34px' }, fontFamily: 'Montserrat', fontWeight: 700, textAlign: 'center', mb: 3 }}
  >
    Parceiros
  </Typography>

const PartnerLogos = () =>
  <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', my: 5 }}>
    {logos.map((logo, i) => (
      <Box
        key={i}
        component="figure"
        sx={[{ filter: 'grayscale(1)', '&:hover': { filter: 'grayscale(0)' } }, { marginInline: { xs: 2, md: 3 } }, { marginBlock: 1 }]}
      >
        <a
          href={logo.linkUrl} target="_blank" rel="noopener noreferrer"
        >
          <img
            src={`${process.env.PUBLIC_URL}/icons/partner-logo/${logo.image}.svg`}
            alt={logo.label}
            title={logo.label}
            draggable="false"
            width={logo.imageWidth}
          />
        </a>
      </Box>
    ))}
  </Box >

const PartnerSection = () =>
  <Box component="section">
    <PartnerTitle />
    <PartnerLogos />
  </Box>

export default PartnerSection
