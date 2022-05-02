import React from 'react'

import LayoutDefaut from '../../components/Layouts/LayoutDefault'
import Container from '../../components/Layouts/Container'
import ContainerGlassmorphism from '../../components/Layouts/ContainerGlassmorphism'

import Title from './Title'
import CardSection from './CardSection'
import InitalSection from './InitialSection'
import SecondSection from './SecondSection'

const About = () =>
  <LayoutDefaut>
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
