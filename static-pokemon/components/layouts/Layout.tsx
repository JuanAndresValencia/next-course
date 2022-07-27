import Head from "next/head"
import React, { FC } from 'react'
import { Navbar } from '../ui/index'

interface Props {
  children: React.ReactNode
  title?: string
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Juan Valencia" />
        <meta name="description" content="Informacion sobre pokemon xxxx" />
        <meta name="keywords" content="pokemon" />
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