import Head from "next/head"
import React, { FC } from 'react'
import { Navbar } from '../ui/index'

interface Props {
  children: React.ReactNode
  title?: string
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Juan Valencia" />
        <meta name="description" content="Informacion sobre pokemon xxxx" />
        <meta name="keywords" content="pokemon" />
        <meta property="og:title" content={`Information about pokemon ${title}`} />
        <meta property="og:description" content={`This is the page about the pokemon ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar />

      <main style={{
        padding: '0px 20px'
      }}>
        {children}
      </main>
    </>
  )
}