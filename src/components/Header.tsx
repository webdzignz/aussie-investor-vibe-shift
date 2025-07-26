
import { Button } from "@/components/ui/button";
import { User, Menu, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = ({ isFixedIncome = false, isPrivateEquity = false }: { isFixedIncome?: boolean; isPrivateEquity?: boolean }) => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  const scrollToMarketData = () => {
    const marketDataSection = document.getElementById('market-data');
    if (marketDataSection) {
      marketDataSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToIntroduction = () => {
    const featuresSection = document.querySelector('section.py-20.bg-white');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFooter = () => {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToForm = () => {
    const formSection = document.getElementById('get-started-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`${isFixedIncome ? 'bg-navy-900' : 'bg-black'} border-b border-gray-800 shadow-sm rounded-2xl m-4`}>
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
              <span className="text-xl font-bold text-white">
                The <span className="font-ink-free">Rate</span> Time
              </span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={goToHome}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer flex items-center space-x-1"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </button>
            <button 
              onClick={scrollToIntroduction}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Introduction
            </button>
            <button 
              onClick={scrollToMarketData}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Best Performers
            </button>
            <button 
              onClick={scrollToFooter}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Contact Us
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="hidden md:flex border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white">
              <User className="w-4 h-4 mr-2" />
              Sign In
            </Button>
            <Button onClick={scrollToForm} className={`${isPrivateEquity ? 'bg-yellow-500 text-black hover:bg-yellow-600' : 'bg-blue-400 text-white hover:bg-blue-500'} border-0`}>
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
