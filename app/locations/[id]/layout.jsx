import { locations } from "@/lib/constants/locations";
export async function generateMetadata({ params }) {
  const metadata = locations[params?.id] ? locations[params?.id].metadata :  {};
  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
  };
}

export default function Layout({ children }) {
  return children;
}
