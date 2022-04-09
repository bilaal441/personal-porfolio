// import "../styles/globals.scss";

import Layout from '../components/layout/Layout'
import type { AppProps } from 'next/app'
import UiContextProvider from '../store/isActiveContext'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UiContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UiContextProvider>
  )
}

export default MyApp
