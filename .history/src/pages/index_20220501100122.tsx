import type { NextPage } from 'next'
import Head from 'next/head'
import { UiContext } from '../store/isActiveContext'
import { GetStaticProps } from 'next'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

import HeroSection from '../components/sections/Hero'
import AboutSection from '../components/sections/About'
import Project from '../components/sections/Project'

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Project />
    </>
  )
}

const  getStaticProps= 






export default Home


