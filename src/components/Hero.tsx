
import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, Zap, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  const bondsData = [
    {
      bank: "Deutsche Bank",
      logo: "/lovable-uploads/2a11e205-6972-4211-810a-a0511eb86512.png",
      logoColor: "bg-blue-600",
      name: "Deutsche Bank 10%",
      yield: "10%",
      rating: "A-",
      ratingColor: "bg-green-100 text-green-700",
      currency: "EUR",
      maturity: "14/11/2049",
      id: "deutsche-bank"
    },
    {
      bank: "Barclays",
      logo: "/lovable-uploads/c6276a68-db62-4bd5-b3e8-eedc1d2c7f13.png",
      logoColor: "bg-blue-500",
      name: "Barclays 9.625%",
      yield: "9.625%",
      rating: "A",
      ratingColor: "bg-green-100 text-green-700",
      currency: "USD",
      maturity: "22/11/2049",
      id: "barclays"
    },
    {
      bank: "Santander",
      logo: "/lovable-uploads/4dcaf7c3-9230-4b8d-b0b3-384f45a53768.png",
      logoColor: "bg-red-600",
      name: "Santander 9.625%",
      yield: "9.625%",
      rating: "A",
      ratingColor: "bg-green-100 text-green-700",
      currency: "USD",
      maturity: "21/11/2049",
      id: "santander"
    },
    {
      bank: "UBS",
      logo: "/lovable-uploads/910b2a2f-c249-4fbb-aa16-21fa6f50fc1e.png",
      logoColor: "bg-red-700",
      name: "UBS 9.016%",
      yield: "9.016%",
      rating: "A",
      ratingColor: "bg-green-100 text-green-700",
      currency: "USD",
      maturity: "15/11/2033",
      id: "ubs"
    },
    {
      bank: "JP Morgan",
      logo: "/lovable-uploads/0bf80c5a-0c53-4f79-b182-66cb126ebc15.png",
      logoColor: "bg-blue-800",
      name: "JP Morgan 8.75%",
      yield: "8.75%",
      rating: "BBB+",
      ratingColor: "bg-yellow-100 text-yellow-700",
      currency: "USD",
      maturity: "01/09/2030",
      id: "jp-morgan"
    }
  ];

  const scrollToMarketData = (bondId: string) => {
    const marketDataSection = document.getElementById('market-data');
    if (marketDataSection) {
      marketDataSection.scrollIntoView({ behavior: 'smooth' });
      // Add a small delay to highlight the specific bond
      setTimeout(() => {
        const bondCard = document.getElementById(`bond-${bondId}`);
        if (bondCard) {
          bondCard.classList.add('ring-2', 'ring-primary', 'ring-offset-2');
          setTimeout(() => {
            bondCard.classList.remove('ring-2', 'ring-primary', 'ring-offset-2');
          }, 2000);
        }
      }, 500);
    }
  };

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
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-black">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">High Yield Bonds</h3>
              <div className="space-y-3">
                {bondsData.map((bond, index) => (
                  <div 
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0 cursor-pointer hover:bg-gray-50 rounded px-2 transition-colors"
                    onClick={() => scrollToMarketData(bond.id)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-white rounded border flex items-center justify-center">
                        <img src={bond.logo} alt={bond.bank} className="w-6 h-6 object-contain" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">{bond.name}</div>
                        <div className="text-xs text-gray-500">{bond.currency} • {bond.maturity}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-red-600 font-bold">{bond.yield}</div>
                      <Badge variant="secondary" className={`${bond.ratingColor} text-xs`}>{bond.rating}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
