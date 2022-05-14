import React from 'react';
import PropTypes from 'prop-types';

import Helmet from 'react-helmet';

const HelmetContainer = ({ title, description }) => (
  <Helmet htmlAttributes>
    <html lang="pt-br" />
    <meta charSet="utf-8" />
    <title>
      {title}
      {' '}
      | Astrobit
    </title>
    <link rel="canonical" href="https://astrobit.vercel.app" />
    <meta name="description" content={description} />
  </Helmet>
);

HelmetContainer.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default HelmetContainer;
