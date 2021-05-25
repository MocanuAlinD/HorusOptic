import '../styles/globals.css'
import ScrollToTop from '../components/ScrollToTop'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { commerce } from '../lib/commerce'
import Head from 'next/head'

// import NProgress from 'nprogress';
// import Router from 'next/router';

// Router.onRouteChangeStart = () => NProgress.start();
// Router.onRouteChangeComplete = () => NProgress.done();
// Router.onRouteChangeError = () => NProgress.done();


function MyApp({ Component, pageProps }) {
  // console.log('MyApp pageProps: ', pageProps)
  const [cart, setCart] = useState({})

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity)
    setCart(cart)
    // console.log(item.cart)
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity: quantity})
    setCart(cart)
  }

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId)
    setCart(cart)
  }

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty()
    setCart(cart)
  }

  useEffect(() => {
    fetchCart()
  }, [])

  // console.log('Items in cart: ', cart)

  return (
    <>
      <Head>
        <title>Horus Top Optic</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cantata+One&family=Cinzel:wght@400;500&family=Elsie+Swash+Caps&family=Hammersmith+One&family=Indie+Flower&family=Josefin+Slab:wght@500&family=Montserrat:ital,wght@0,200;0,300;0,500;0,900;1,200;1,300;1,500;1,900&family=Poppins:ital,wght@0,200;0,400;0,600;0,900;1,200;1,400;1,600;1,900&family=Raleway:ital,wght@0,300;0,500;0,900;1,200&family=Special+Elite&display=swap"
          rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <script src="https://kit.fontawesome.com/cbb96f47ca.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&display=swap" rel="stylesheet"></link>
      </Head>

      <Navbar totalItems={cart.total_items === 0 ? null : cart.total_items} />
      <Component {...pageProps}
        onAddToCart={handleAddToCart}
        cart={cart}
        handleUpdateCartQty={handleUpdateCartQty}
        handleRemoveFromCart={handleRemoveFromCart}
        handleEmptyCart={handleEmptyCart}
      />
      <ScrollToTop />
      <Footer />
    </>
  )
}

export default MyApp
