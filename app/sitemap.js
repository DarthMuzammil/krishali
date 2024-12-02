import { locations, locationsLandingPage } from "@/lib/constants/locations";

export default function sitemap() {
  const staticPages = [
    {
      url: 'https://krishaligroup.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ];

  // Generate entries for landing pages
  const landingPages = locationsLandingPage.map((location) => ({
    url: `https://krishaligroup.com/` + `/locations/${location.name.toLowerCase().replace(/\s+/g, "-")}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.8,
  }));

  // Generate entries for location-specific pages
  const locationPages = Object.keys(locations).map((id) => ({
    url: `https://krishaligroup.com` + `/locations/${id.toLowerCase().replace(/\s+/g, "-")}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.7,
  }));

  return [...staticPages, ...landingPages, ...locationPages];
}
