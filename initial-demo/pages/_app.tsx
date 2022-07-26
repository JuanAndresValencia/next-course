import React from 'react'
import '../styles/globals.css'
import { NextPage } from 'next'
import { ReactElement } from 'react';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => React.ReactNode;
}

function MyApp({ Component, pageProps }) {
  
  const getLayout = Component.getLayout || ((page) => page) 

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
