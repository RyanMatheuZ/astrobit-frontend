import React from 'react'

import Header from '../../components/Modules/Header'
import Footer from '../../components/Modules/Footer'

import InitalSection from './InitialSection'
import InfoSection from './InfoSection'
import PlatformSection from './PlarformSection'

import Container from '../../components/Layouts/Container'
import ContainerGlassmorphism from '../../components/Layouts/ContainerGlassmorphism'

const Home = () =>
  <>
    <Header />

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

    <Footer />
  </>

export default Home
