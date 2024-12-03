import LandingPage from "@/components/screens/LandingPage"
import { metadataHomepage } from "@/lib/constants/homepage"

export const metadata = {
  title: metadataHomepage.title,
  description: metadataHomepage.description,
  keywords: metadataHomepage.keywords
}
 
export default function Home() {
  return (
    <div>
      <LandingPage />
    </div>
  )
}