export default function robots() {
    return {
      rules: {
        userAgent: '*',
        disallow: '/private/',
      },
      sitemap: ['https://krishaligroup.com/sitemap.xml', 'https://krishaligroup.com/locations/landmarktower/sitemap.xml','https://krishaligroup.com/locations/goldenfalcontower/sitemap.xml'],
    }
  }