// import "../styles/globals.scss";

import Layout from "../components/layout/Layout"
import type { AppProps } from "next/app"
import UiContextProvider from "../store/isActiveContext"
import { IconContext } from "react-icons"
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
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </IconContext.Provider>
    </UiContextProvider>
  )
}

export default MyApp
