import SEO from '../../next-seo.config'
import '../styles/globals.scss'
import { DefaultSeo } from 'next-seo'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{SEO.openGraph.site_name}</title>
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
