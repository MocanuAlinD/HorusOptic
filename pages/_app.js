import '../styles/globals.css'
import Layout from '../components/Layout'
import ScrollToTop from '../components/ScrollToTop'
import React, { useRef, useEffect, memo } from 'react'
import { useRouter } from 'next/router'

const ROUTES_TO_RETAIN = ['/Produse', '/Produse/']


function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const retainedComponents = useRef({})

  const isRetainableRoute = ROUTES_TO_RETAIN.includes(router.asPath)

  // Add Component to retainedComponents if we haven't got it already
  if (isRetainableRoute && !retainedComponents.current[router.asPath]) {
    const MemoComponent = memo(Component)
    retainedComponents.current[router.asPath] = {
      component: <MemoComponent {...pageProps} />,
      scrollPos: 0
    }
  }

  // Save the scroll position of current page before leaving
  const handleRouteChangeStart = url => {
    if (isRetainableRoute) {
      retainedComponents.current[router.asPath].scrollPos = window.scrollY
    }
  }

  // Save scroll position - requires an up-to-date router.asPath
  useEffect(() => {
    router.events.on('routeChangeStart', handleRouteChangeStart)
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
    }
  }, [router.asPath])

  // Scroll to the saved position when we load a retained component
  useEffect(() => {
    if (isRetainableRoute) {
      window.scrollTo(0, retainedComponents.current[router.asPath].scrollPos)
    }
  }, [Component, pageProps])


  return (
    <Layout>
      <Component {...pageProps}/>
      <ScrollToTop/>
    </Layout>
  )
}

export default MyApp
