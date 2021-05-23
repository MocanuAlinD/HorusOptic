import '../styles/globals.css'
import Layout from '../components/Layout'
import ScrollToTop from '../components/ScrollToTop'
import {useState, useEffect} from 'react'

// import { commerce } from '../lib/commerce'

function MyApp({ Component, pageProps }) {
  // const [products, setProducts] = useState([])

  // const fetchProducts = async () => {
    // const { data } = await commerce.products.list()
    // setProducts(data)
  // }

  // useEffect(() => {
    // fetchProducts()
  // }, [])

  return (
    <Layout >
      <Component {...pageProps} />
      <ScrollToTop/>
    </Layout>
  )
}

export default MyApp
