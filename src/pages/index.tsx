import type { NextPage } from 'next'
import Head from 'next/head'
import { UiContext } from '../store/isActiveContext'
import { GetStaticProps } from 'next'

import HeroSection from '../components/sections/hero'
import AboutSection from '../components/sections/about'

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
    </>
  )
}

export default Home
