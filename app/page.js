import { HomepageNew } from '@/components/homepage-new'
import { ComingSoon } from '@/components/coming-soon'

export default function Home() {
  const showComingSoon = true; // You can change this to false to show the HomepageNew component

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-purple-700 to-blue-900">
      {showComingSoon ? <ComingSoon /> : <HomepageNew />}
    </main>
  )
}