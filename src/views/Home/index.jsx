import React from 'react'

import InitalSection from './InitialSection'
import InfoSection from './InfoSection'
import PlatformSection from './PlarformSection'

import Container from '../../components/Layouts/Container'
import ContainerGlassmorphism from '../../components/Layouts/ContainerGlassmorphism'

const Home = () =>
  <main>
    <Container>
      <InitalSection />
    </Container>
    <ContainerGlassmorphism>
      <InfoSection />
    </ContainerGlassmorphism>
    <Container>
      <PlatformSection />
    </Container>
  </main>

export default Home
