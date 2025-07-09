
import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, Zap, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg">
                Start Investing Today
              </Button>
              <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 px-8 py-4 text-lg">
                Explore Platform
              </Button>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-gold" />
                <span>ASIC Regulated</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-gold" />
                <span>Real-time Trading</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-gold" />
                <span>Global Markets</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            {/* High Yield Bonds Card */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gold/20">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">High Yield Bonds</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-white">DB</span>
                    </div>
                    <div>
                      <div className="font-medium text-sm">Deutsche Bank 10%</div>
                      <div className="text-xs text-gray-500">EUR • 14/11/2049</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-red-600 font-bold">10%</div>
                    <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">A-</Badge>
                  </div>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-white">BC</span>
                    </div>
                    <div>
                      <div className="font-medium text-sm">Barclays 9.625%</div>
                      <div className="text-xs text-gray-500">USD • 22/11/2049</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-red-600 font-bold">9.625%</div>
                    <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">A</Badge>
                  </div>
                </div>

                <div className="flex justify-between items-center py-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-white">ST</span>
                    </div>
                    <div>
                      <div className="font-medium text-sm">Santander 9.625%</div>
                      <div className="text-xs text-gray-500">USD • 21/11/2049</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-red-600 font-bold">9.625%</div>
                    <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">A</Badge>
                  </div>
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
