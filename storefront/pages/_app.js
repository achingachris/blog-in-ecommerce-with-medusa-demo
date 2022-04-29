import Head from 'next/head'
import { StoreProvider } from '../context/store-context'
import { DisplayProvider } from '../context/display-context'
import '../styles/globals.css'
import Layout from '../components/layout/layout'

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <DisplayProvider>
        <Head>
          <title>Medusa Store and Blog</title>
          <meta name='description' content='A Medusa Ecommerce with a Blog' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DisplayProvider>
    </StoreProvider>
  )
}

export default MyApp
