import { Libre_Franklin as LibreFranklin, Chivo } from 'next/font/google'
import { GoogleTagManager } from '@next/third-parties/google'
import './globals.css'
import { SEOStrategy } from '@/lib/constants'
import Head from 'next/head'
import { cn } from '@/lib/utils'

const libreFranklin = LibreFranklin({
  subsets: ['latin'],
  display: 'swap'
})

const chivo = Chivo({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: SEOStrategy.mainPage.title,
  description: SEOStrategy.mainPage.metaDescription,
  keywords: SEOStrategy.mainPage.keywords
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <GoogleTagManager gtmId='GTM-KVTXB4CP' />
      <Head>
        <title>{metadata.title}</title>
        <meta name='description' content={metadata.title} />
        <meta name='keywords' content={metadata.keywords} />
      </Head>
      <body className={cn(libreFranklin.className, chivo.className)}>
        {children}
      </body>
    </html>
  )
}
