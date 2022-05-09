import React from 'react'

import HelmetContainer from '../../components/HelmetContainer'
import LayoutDefaut from '../../components/Layouts/LayoutDefault'
import Container from '../../components/Layouts/Container'
import ContainerGlassmorphism from '../../components/Layouts/ContainerGlassmorphism'

import InitalSection from './InitialSection'
import InfoSection from './InfoSection'
import PlatformSection from './PlarformSection'
import PartnerSection from './PartnerSection'

const Home = () =>
  <LayoutDefaut>
    <HelmetContainer
      title="Início"
      description="Seja muito bem-vindo à nossa plataforma, somos pioneiros e referência no mercado desde 2014!"
    />
    <Container>
      <InitalSection />
    </Container>
    <ContainerGlassmorphism>
      <InfoSection />
    </ContainerGlassmorphism>
    <Container>
      <PlatformSection />
      <PartnerSection />
    </Container>
  </LayoutDefaut>

export default Home
