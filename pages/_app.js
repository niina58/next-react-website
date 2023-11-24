import Layout from 'components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Components {...pageProps} />
    </Layout>
  )
}

export default MyApp