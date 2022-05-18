import type { NextPage } from 'next'
import Head from 'next/head'
import { UiContext } from '../store/isActiveContext'
import { GetStaticProps } from 'next'
import { ReactNode } from 'react'
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

type props = {
  feature: []
}
const Home: NextPage<props> = ({ feature }) => {
  console.log(feature)
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
  console.log(user)

  const pinnableItems = user.pinnableItems.nodes.flat()
  const feature = pinnableItems.filter(
    ({ homepageUrl }: { homepageUrl: '' }) => homepageUrl,
  )

  const items = pinnableItems
    .filter(({ homepageUrl }: { homepageUrl: '' }) => homepageUrl)
    .map(
      ({
        id,
        name,
        description,
        homepageUrl,
        openGraphImageUrl,
        object,
        repositoryTopics: { nodes },
        url,
      }: {
        id: string
        name: string
        description: string
        homepageUrl: string
        openGraphImageUrl: string
        url: string
        object?: {
          text?: string
        }

        repositoryTopics: {
          nodes: Object[]
        }
      }) => {
        return {
          id,
          name,
          description,
          homepageUrl,
          openGraphImageUrl,
          text: object && object?.text,
          topics: nodes?.map(({ topic }: {
            
          }) => {
            return topic
          }),
          url,
        }
      },
    )

  console.log(feature)

  return {
    props: {
      feature: items,
    },
  }
}

export default Home