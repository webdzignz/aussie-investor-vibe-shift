
import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, Zap, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Hero = ({ showIPOs = false, isFixedIncome = false }: { showIPOs?: boolean; isFixedIncome?: boolean }) => {
  const ipoData = [
    {
      company: "SpaceX",
      logo: "/lovable-uploads/0373420a-1f6b-4839-b969-8262802a98ed.png",
      name: "SpaceX",
      valuation: "$180B",
      status: "Expected 2025/26",
      statusColor: "bg-blue-100 text-blue-700",
      sector: "Aerospace",
      expectedPrice: "$85-95",
      id: "spacex"
    },
    {
      company: "OpenAI",
      logo: "/lovable-uploads/2cbe9023-c5cd-4088-a6f5-e1ad701cc9e2.png",
      name: "OpenAI",
      valuation: "$157B",
      status: "Expected 2025/26",
      statusColor: "bg-blue-100 text-blue-700",
      sector: "AI/Tech",
      expectedPrice: "$120-140",
      id: "openai"
    },
    {
      company: "Revolut",
      logo: "/lovable-uploads/1dea8d6a-2e66-4030-863d-ed493b432712.png",
      name: "Revolut",
      valuation: "$45B",
      status: "Expected 2025/26",
      statusColor: "bg-blue-100 text-blue-700",
      sector: "FinTech",
      expectedPrice: "$28-35",
      id: "revolut"
    }
  ];

  const bondsData = [
    {
      bank: "Deutsche Bank",
      logo: "/lovable-uploads/2a11e205-6972-4211-810a-a0511eb86512.png",
      name: "Deutsche Bank 10%",
      yield: "10%",
      rating: "A-",
      ratingColor: "bg-green-100 text-green-700",
      currency: "EUR",
      maturity: "14/11/2049",
      id: "deutsche"
    },
    {
      bank: "Barclays",
      logo: "/lovable-uploads/c6276a68-db62-4bd5-b3e8-eedc1d2c7f13.png",
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
      name: "Santander 9.625%",
      yield: "9.625%",
      rating: "A",
      ratingColor: "bg-green-100 text-green-700",
      currency: "USD",
      maturity: "21/11/2049",
      id: "santander"
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

  const scrollToForm = () => {
    const formSection = document.getElementById('get-started-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={`${isFixedIncome ? 'bg-gradient-to-br from-blue-50 to-blue-100' : 'bg-gradient-to-br from-green-50 to-green-100'} py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              <span className={`${isFixedIncome ? "bg-navy-900 text-white px-4 py-1 rounded-lg block mb-2 text-3xl" : "bg-green-800 text-white px-4 py-1 rounded-lg block mb-2 text-3xl"}`}>Welcome to</span>
              <span className={`${isFixedIncome ? "text-navy-900" : "text-primary"} block text-6xl`}>
                The <span className={`font-ink-free ${isFixedIncome ? "text-navy-900" : "text-yellow-500"}`}>Rate</span> Time
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Build wealth with confidence through our comprehensive investment platform. 
              Access ASX markets, international opportunities, and expert insights tailored for Australian investors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className={`${isFixedIncome ? 'bg-navy-900 text-white hover:bg-navy-800' : 'bg-primary text-primary-foreground hover:bg-primary/90'} px-8 py-4 text-lg`} onClick={scrollToForm}>
                Start Investing Today
              </Button>
              <Button size="lg" className={`${isFixedIncome ? 'bg-white text-navy-900 hover:bg-gray-50 border border-navy-900' : 'bg-gold text-gold-foreground hover:bg-gold/90'} px-8 py-4 text-lg`} onClick={scrollToForm}>
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
            {/* Dynamic Card - IPOs or Bonds */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-black">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {showIPOs ? "Coming Soon" : "High Yield Bonds"}
              </h3>
              <div className="space-y-3">
                {showIPOs ? (
                  ipoData.map((ipo, index) => (
                    <div 
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0 cursor-pointer hover:bg-gray-50 rounded px-2 transition-colors"
                      onClick={() => scrollToMarketData(ipo.id)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-white rounded border flex items-center justify-center">
                          <img src={ipo.logo} alt={ipo.company} className="w-10 h-10 object-contain" />
                        </div>
                        <div>
                          <div className="font-medium text-base">{ipo.name}</div>
                          <div className="text-sm text-gray-500">{ipo.sector} • {ipo.expectedPrice}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-green-600 font-bold">{ipo.valuation}</div>
                        <Badge variant="secondary" className={`${ipo.statusColor} text-xs`}>{ipo.status}</Badge>
                      </div>
                    </div>
                  ))
                ) : (
                  bondsData.map((bond, index) => (
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
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
