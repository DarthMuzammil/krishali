export default function sitemap() {
    const locations = [
        {
          name: 'Landmark Tower',
          path: '/',
          coordinates: { lat: 24.4851, lng: 54.3508 }// Example coordinates for Dubai
        },
        {
          name: 'Golden Falcon Tower',
          path: '/',
          coordinates: { lat: 24.4875, lng: 54.3592 } // Example coordinates for Abu Dhabi
        },
        {
          name: 'Al Bustan Complex',
          path: '/',
          coordinates: { lat: 24.4298, lng: 54.4283 } // Example coordinates for Dubai
        }
      ]

      
    return [
      {
        url: 'https://krishaligroup.com',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://krishaligroup.com',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://krishaligroup.com',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
      ...locations
    ]
  }