import { locations_metadata } from "@/lib/locations";
export async function generateMetadata({ params }) {
  const metadata = locations_metadata[params?.id] ? locations_metadata[params?.id] :  {};
  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
  };
}

export default function Layout({ children }) {
  return children;
}
