import { locations_metadata } from "@/lib/locations"

export function MetadataSetter({ locationId }) {
  const metadata = locationId 
    ? locations_metadata.find((location, index) => index.toString() === locationId)
    : null

  if (!metadata) {
    return null
  }

  return (
    <>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords} />
      <meta property="og:image" content={metadata.images} />
    </>
  )
}

