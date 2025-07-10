
import { Button } from "@/components/ui/button";
import { User, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-black border-b border-gray-800 shadow-sm rounded-2xl m-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <img 
                  src="/lovable-uploads/1472ad70-7fe5-477b-88d5-67ae021f7dc8.png" 
                  alt="Australia"
                  className="w-5 h-4 object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white">Australian Investor</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Introduction</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Products</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="hidden md:flex border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white">
              <User className="w-4 h-4 mr-2" />
              Sign In
            </Button>
            <Button className="gold-gradient text-white border-0 hover:opacity-90">
              Get Started
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden text-gray-300 hover:text-white hover:bg-gray-800">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
