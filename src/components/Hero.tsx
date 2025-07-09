
import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, Zap, Globe } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 to-green-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Invest in Your
              <span className="text-primary block">Australian Future</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Build wealth with confidence through our comprehensive investment platform. 
              Access ASX markets, international opportunities, and expert insights tailored for Australian investors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="aussie-gradient text-white border-0 px-8 py-4 text-lg">
                Start Investing Today
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                Explore Platform
              </Button>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>ASIC Regulated</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-primary" />
                <span>Real-time Trading</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-primary" />
                <span>Global Markets</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Portfolio Performance</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Value</span>
                    <span className="text-2xl font-bold text-gray-900">$127,450</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Today's Change</span>
                    <span className="text-lg font-semibold text-green-600 flex items-center">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      +$2,340 (1.87%)
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-blue-600">CBA</span>
                    </div>
                    <span className="font-medium">Commonwealth Bank</span>
                  </div>
                  <span className="text-green-600 font-medium">+2.1%</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-red-600">BHP</span>
                    </div>
                    <span className="font-medium">BHP Group</span>
                  </div>
                  <span className="text-green-600 font-medium">+1.5%</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-purple-600">CSL</span>
                    </div>
                    <span className="font-medium">CSL Limited</span>
                  </div>
                  <span className="text-red-600 font-medium">-0.8%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
