import "nextra-theme-blog/style.css"

import { MDXEmbedProvider } from "mdx-embed"
import React from "react"

import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MDXEmbedProvider>
      <Component {...pageProps} />
    </MDXEmbedProvider>
  )
}
