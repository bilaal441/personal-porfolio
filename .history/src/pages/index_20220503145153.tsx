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

export const getStaticProps = async () => {
  const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
  })

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_ACESS_TOKEN}`,
      },
    }
  })

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  })

  const { data } = await client.query({
    query: gql`
      {
        user(login: "bilaal441") {
          pinnableItems(first: 10) {
            nodes {
              ... on Repository {
                id
                name
                description
                openGraphImageUrl
                url
                object(expression: "HEAD:README.md") {
                  ... on Blob {
                    text
                  }
                }
                homepageUrl
                repositoryTopics(first: 10) {
                  nodes {
                    topic {
                      name
                    }
                  }
                }
              }
            }
            edges {
              node
            }
          }
        }
      }
    `,
  })

  const { user } = data
  // console.log(user)
  const pinnableItems = user.pinnableItems.edges.map(
    ({ node }: { node: [] }) => node,
  )
  console.log(pinnableItems)

  return {
    props: {},
  }
}

export default Home
