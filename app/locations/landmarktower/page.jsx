import Header from "'@/components/header'"
import ImageCarousel from "'@/components/image-carousel'"
import TrainerBio from "'@/components/trainer-bio'"
import ActivityCards from "'@/components/activity-cards'"

export default function LandmarkTowerPage() {
  return (
    (<div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Landmark Tower Location</h1>
        <ImageCarousel />
        <TrainerBio />
        <ActivityCards />
      </main>
    </div>)
  );
}

