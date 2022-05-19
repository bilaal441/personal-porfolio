import type { NextPage } from 'next'
import Head from 'next/head'

import { GetStaticProps } from 'next'
import { Fragment } from 'react'
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
import { repoData } from '../../interface/index'

type props = {
  feature: []
  about: {
    bio: object[]
    skilss: object[]
  }
}
const Home: NextPage<props> = ({ feature, about }) => {
  return (
    <Fragment>
      <HeroSection />
      <AboutSection bio={about.bio} skilss={about.skilss} />
      <Project items={feature} />
    </Fragment>
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

  const pinnableItems = user.pinnableItems.nodes.flat()

  const items = pinnableItems
    .filter(({ homepageUrl }: { homepageUrl: '' }) =>
      homepageUrl?.includes('netlify.app'),
    )
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
      }: repoData) => ({
        id,
        name,
        description,
        homepageUrl,
        imageUrl: openGraphImageUrl,
        text: object && object?.text,
        topics: nodes?.map(({ topic }: { topic?: { name?: string } }) => {
          return topic?.name
        }),
        url,
      }),
    )

  const getBio = await fetch(
    `https://bilall-c0e63-default-rtdb.europe-west1.firebasedatabase.app/data.json`,
  )

  const bioData = await getBio.json()

  return {
    props: {
      feature: items,
      about: bioData,
    },
  }
}

export default Home
