import { Card, CardContent } from "'@/components/ui/card'"

export default function TrainerBio() {
  return (
    (<Card className="mb-12">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <img
            src="/placeholder.svg?height=200&width=200"
            alt="Trainer headshot"
            className="w-48 h-48 rounded-full object-cover" />
          <div>
            <h2 className="text-2xl font-semibold mb-2">John Doe</h2>
            <p className="text-gray-600 mb-4">Certified Personal Trainer</p>
            <p className="text-gray-800">
              John is a passionate fitness professional with over 10 years of experience. He specializes in strength training, 
              weight loss, and functional fitness. John's personalized approach ensures that each client achieves their fitness 
              goals while maintaining proper form and technique.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>)
  );
}

