import React from 'react'

import HelmetContainer from '../../components/HelmetContainer'
import LayoutDefaut from '../../components/Layouts/LayoutDefault'
import Container from '../../components/Layouts/Container'
import ContainerGlassmorphism from '../../components/Layouts/ContainerGlassmorphism'

import Title from './Title'
import CardSection from './CardSection'
import InitalSection from './InitialSection'
import SecondSection from './SecondSection'

const About = () =>
  <LayoutDefaut>
    <HelmetContainer
      title="Sobre"
      description="Conheça aqui a nossa história e o que nos mantém motivados!"
    />
    <Container>
      <Title />
    </Container>
    <ContainerGlassmorphism>
      <CardSection />
    </ContainerGlassmorphism>
    <Container>
      <InitalSection />
      <SecondSection />
    </Container>
  </LayoutDefaut>

export default About
