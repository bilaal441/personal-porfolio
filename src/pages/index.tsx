import type { NextPage, GetStaticProps } from "next"
import Head from "next/head"

import { Fragment } from "react"

import HeroSection from "../components/sections/Hero"
import AboutSection from "../components/sections/About"
import Project from "../components/sections/Project"
import { repoData } from "../../interface/index"
import client from "../../apollo-client"
import { gql } from "@apollo/client"
import Contact from "../components/sections/Contact"

type props = {
  feature: []
  about: {
    bio: object[]
    skilss: object[]
  }
}
const home: NextPage<props> = ({ feature, about }: props) => {
  return (
    <Fragment>
      <Head>
        <title>Bilal - front-end developer</title>
        <meta name="title" content="Bilal sharif  - front-end developer" />
        <meta name="keywords" content="bilal sharif , Bilal sharif website" />
        <meta
          name="description"
          content="front end devoloper have passion for creating dynimic page, lives london  uk  "
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bilalsharif.co.uk" />
        <meta property="og:title" content="Bilal sharif - front-end developer" />
        <meta
          property="og:description"
          content="front end devoloper have passion for creating dynimic page, lives london  uk"
        />
        <meta property="og:image" content="https://i.imgur.com/AOMvmeJ.png" />

        <meta property="twitter:card" content="summary_large_image" />
        {/* <meta property="twitter:url" content="https://abdulrahman.id/" /> */}
        <meta property="twitter:title" content="Bilal - front-end developer" />
        <meta
          property="twitter:description"
          content="front end devoloper have passion for creating dynimic page, lives london  uk"
        />
        <meta
          property="twitter:image"
          // content="https://i.imgur.com/AOMvmeJ.png"
        />
      </Head>

      <HeroSection />
      <AboutSection bio={about.bio} skilss={about.skilss} />
      <Project items={feature} />
      <Contact />
    </Fragment>
  )
}

export const getStaticProps: GetStaticProps = async () => {
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

  const { user } = await data

  const pinnableItems = user?.pinnableItems?.nodes?.flat()

  const items = pinnableItems
    .filter(({ homepageUrl }: { homepageUrl: "" }) =>
      homepageUrl?.includes("netlify.app"),
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

export default home
