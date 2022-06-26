import Layout from "../components/layout/Layout"
import type { AppProps } from "next/app"
import UiContextProvider from "../store/isActiveContext"
import { IconContext } from "react-icons"
import Head from "next/head"
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UiContextProvider>
      <IconContext.Provider
        value={{
          color: "var( --clr-sky-blue)",
          size: "1.1rem",
          className: "global-class-name",
        }}
      >
        <>
          <Head>
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/favicon-16x16.png"
            />
            <link rel="manifest" href="/site.webmanifest" />
            <link
              rel="mask-icon"
              href="/safari-pinned-tab.svg"
              color="#5bbad5"
            />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      </IconContext.Provider>
    </UiContextProvider>
  )
}

export default MyApp
