import Link from "'next/link'"
import { Button } from "'@/components/ui/button'"
import { Menu, User } from "'lucide-react'"

export default function Header() {
  return (
    (<header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">
          FitnessPro
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link
            href="/locations"
            className="text-gray-600 hover:text-neutral-900 dark:hover:text-neutral-50">
            Locations
          </Link>
          <Link
            href="/trainers"
            className="text-gray-600 hover:text-neutral-900 dark:hover:text-neutral-50">
            Trainers
          </Link>
          <Link
            href="/classes"
            className="text-gray-600 hover:text-neutral-900 dark:hover:text-neutral-50">
            Classes
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
          <Button variant="outline" size="sm" className="hidden md:flex items-center">
            <User className="h-4 w-4 mr-2" />
            Sign In
          </Button>
        </div>
      </div>
    </header>)
  );
}

