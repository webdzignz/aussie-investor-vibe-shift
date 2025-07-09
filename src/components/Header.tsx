
import { Button } from "@/components/ui/button";
import { User, Menu } from "lucide-react";

const AustraliaOutline = () => (
  <svg
    width="20"
    height="16"
    viewBox="0 0 100 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-4"
  >
    <path
      d="M15 25C20 20 30 18 40 20C50 15 60 12 70 15C75 18 80 25 85 30C88 35 85 40 82 45C80 50 75 55 70 58C65 60 60 58 55 55C50 52 45 50 40 52C35 54 30 56 25 54C20 52 15 48 12 43C10 38 12 32 15 25Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1"
    />
    <circle cx="75" cy="65" r="3" fill="currentColor" />
  </svg>
);

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 aussie-gold-gradient rounded-lg flex items-center justify-center">
                <AustraliaOutline />
              </div>
              <span className="text-xl font-bold text-primary">Australian Investor</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-gold transition-colors">Dashboard</a>
            <a href="#" className="text-gray-700 hover:text-gold transition-colors">Portfolio</a>
            <a href="#" className="text-gray-700 hover:text-gold transition-colors">Markets</a>
            <a href="#" className="text-gray-700 hover:text-gold transition-colors">Research</a>
            <a href="#" className="text-gray-700 hover:text-gold transition-colors">Education</a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="hidden md:flex border-gold text-gold hover:bg-gold hover:text-gold-foreground">
              <User className="w-4 h-4 mr-2" />
              Sign In
            </Button>
            <Button className="gold-gradient text-white border-0 hover:opacity-90">
              Get Started
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
