import React, {useEffect, useState} from "react"
import {Layout} from "../components/index"
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function BlogApp({ Component, pageProps }: AppProps) {
  return <body style={{background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)"}}>
    <Layout >
     <Component {...pageProps} />
    </Layout>
  </body>
}

export default BlogApp
