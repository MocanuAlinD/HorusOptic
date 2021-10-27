// import '../styles/globals.css'
import ScrollToTop from "../components/ScrollToTop";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { commerce } from "../lib/commerce";
import Head from "next/head";
import GlobalStyle from "./globalStyles";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);


  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
    // console.log("Fetched cart")
  };

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
    // console.log("Added to cart: ", productId,quantity)
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
    // console.log("Update quantity:", productId, quantity)
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
    // console.log("Remove from cart: ", productId)
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Horus Top Optic</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          src="https://kit.fontawesome.com/cbb96f47ca.js"
          crossorigin="anonymous"
        ></script>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;700;900&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      {!router.pathname.includes("/Produse/[id]") && (
        <Navbar totalItems={cart.total_items === 0 ? null : cart.total_items} />
      )}

      <Component
        {...pageProps}
        onAddToCart={handleAddToCart}
        cart={cart}
        onUpdateCartQty={handleUpdateCartQty}
        onRemoveFromCart={handleRemoveFromCart}
        onEmptyCart={handleEmptyCart}
        order={order}
        onCaptureCheckout={handleCaptureCheckout}
        error={errorMessage}
        loading={loading}
      />

      {router.pathname.includes("/Produse/[id]") ? "" : <Footer />}

      <ScrollToTop />
    </>
  );
}

export default MyApp;
