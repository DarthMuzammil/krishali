import Head from 'next/head'
import { SEOStrategy } from '@/lib/constants'

export const metadata = {
  title: SEOStrategy.personalTrainingPageBodybuilding.title,
  description: SEOStrategy.personalTrainingPageBodybuilding.metaDescription,
  keywords: SEOStrategy.personalTrainingPageBodybuilding.keywords
}

export default function PersonalTrainingLayout ({ children }) {
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
