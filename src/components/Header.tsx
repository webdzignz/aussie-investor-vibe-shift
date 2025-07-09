
import { Button } from "@/components/ui/button";
import { MapPin, User, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 aussie-gradient rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-primary">Australian Investor</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Dashboard</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Portfolio</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Markets</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Research</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Education</a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              <User className="w-4 h-4 mr-2" />
              Sign In
            </Button>
            <Button className="aussie-gradient text-white border-0">
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
