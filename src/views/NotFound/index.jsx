import React from 'react';

import HelmetContainer from '../../components/HelmetContainer';
import LayoutDefaut from '../../components/Layouts/LayoutDefault';
import Container from '../../components/Layouts/Container';

import Section from './Section';

const NotFound = () => (
  <LayoutDefaut>
    <HelmetContainer
      title="Página não encontrada"
      description="Oops! Essa página não pode ser encontrada."
    />
    <Container>
      <Section />
    </Container>
  </LayoutDefaut>
);

export default NotFound;
