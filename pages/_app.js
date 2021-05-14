import '../styles/globals.css'
import Layout from '../components/Layout'
import ScrollToTop from '../components/ScrollToTop'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps}/>
      <ScrollToTop/>
    </Layout>
  )
}

export default MyApp
