import type { NextPage } from 'next'
import Head from 'next/head'
import { UiContext } from '../store/isActiveContext'
import { GetStaticProps } from 'next'
import { ApolloClient, InMemoryCache, gql, createHttpLink } from '@apollo/client'

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

const  getStaticProps=  async ()=> {
  const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    cache: new InMemoryCache()
  });

  return{
    props:{}
  }

}






export default Home

