import '../styles/globals.css'
import Layout from '../components/Layout'
import ScrollToTop from '../components/ScrollToTop'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { commerce } from '../lib/commerce'

export async function getStaticProps() {
  const { data: products } = await commerce.products.list()

  const sortedNames1 = []
  for (let i in products) {
    if (sortedNames1.includes(products[i].name)) {
      continue
    } else { sortedNames1.push(products[i].name) }
  }
  const sortedNames = sortedNames1.sort((a, b) => a > b && 1 || -1)

  return {
    props: {
      products, sortedNames
    }
  }
}


function MyApp({ Component, pageProps }) {
  console.log('MyApp pageProps: ', pageProps)
  const [cart, setCart] = useState({})

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity)
    setCart(item.cart)
    console.log(item.cart)
  }

  useEffect(() => {
    fetchCart()
  }, [])

  console.log('Items in cart: ', cart)

  // console.log('APP props: ',pageProps)
  // console.log('Cart: ', cart)


  return (
    <>
      <Navbar total_items={cart.total_items}/>
      <Component {...pageProps} products={pageProps.products} sortedNames={pageProps.sortedNames} onAddToCart={handleAddToCart} />
      <ScrollToTop />
      <Footer />
    </>
  )
}

export default MyApp
