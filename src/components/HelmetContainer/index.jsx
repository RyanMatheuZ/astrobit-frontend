import React from 'react'

import Helmet from 'react-helmet'

const HelmetContainer = ({ title, description }) =>
  <Helmet htmlAttributes>
    <html lang="pt-br" />
    <meta charSet="utf-8" />
    <title>{title} | Astrobit</title>
    <link rel="canonical" href="https://astrobit.vercel.app" />
    <meta name="description" content={description} />
  </Helmet>

export default HelmetContainer
