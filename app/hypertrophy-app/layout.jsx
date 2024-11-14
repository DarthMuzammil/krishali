import Head from 'next/head'
import { SEOStrategy } from '@/lib/constants'

export const metadata = {
  title: SEOStrategy.appPage.title,
  description: SEOStrategy.appPage.metaDescription,
  keywords: SEOStrategy.appPage.keywords
}

export default function HypertrophyAppLayout ({ children }) {
  return (
    <html lang='en'>
      <Head>
        <meta name='keywords' content={metadata.keywords} />
        <meta name='description' content={metadata.description} />
      </Head>
      <body>{children}</body>
    </html>
  )
}
