import type { NextPage } from 'next'
import Head from 'next/head'
import { UiContext } from '../store/isActiveContext'
import { GetStaticProps } from 'next'
import {
  ApolloClient,
  InMemoryCache,
  gql,
  createHttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
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

const getStaticProps = async () => {
  const httpLink = createHttpLink({
    uri: '/graphql',
  })

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token')
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    }
  })

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  })

  return {
    props: {},
  }
}

export default Home
