
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const MarketData = () => {
  const bondsData = [
    {
      bank: "Deutsche Bank",
      logo: "/lovable-uploads/2a11e205-6972-4211-810a-a0511eb86512.png",
      logoColor: "bg-blue-900",
      cardColor: "bg-blue-900/90 border-blue-900/20",
      textColor: "text-white",
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
      logoColor: "bg-blue-300",
      cardColor: "bg-blue-300/90 border-blue-300/20",
      textColor: "text-gray-900",
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
      cardColor: "bg-red-600/90 border-red-600/20",
      textColor: "text-white",
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
      logoColor: "bg-black",
      cardColor: "bg-black/90 border-black/20",
      textColor: "text-white",
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
      logoColor: "bg-blue-900",
      cardColor: "bg-blue-900/90 border-blue-900/20",
      textColor: "text-white",
      name: "JP Morgan 8.75%",
      yield: "8.75%",
      rating: "BBB+",
      ratingColor: "bg-yellow-100 text-yellow-700",
      currency: "USD",
      maturity: "01/09/2030",
      id: "jp-morgan"
    }
  ];

  return (
    <section id="market-data" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Best Performers
          </h2>
          <p className="text-xl text-gray-600">
            Premium bond opportunities with competitive yields and ratings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {bondsData.map((bond, index) => (
            <Card 
              key={index} 
              id={`bond-${bond.id}`}
              className={`group relative overflow-hidden ${bond.cardColor} shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_30px_80px_-15px_rgba(0,0,0,0.4)] transition-all duration-500 rounded-2xl hover:scale-[1.02] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000 border`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2 relative z-10">
                  <div className={`w-12 h-12 ${bond.logoColor} rounded-lg border flex items-center justify-center shadow-lg`}>
                    <img src={bond.logo} alt={bond.bank} className="w-8 h-8 object-contain" />
                  </div>
                  <Badge variant="secondary" className={`${bond.ratingColor} font-medium shadow-sm`}>
                    {bond.rating}
                  </Badge>
                </div>
                <CardTitle className={`text-lg font-semibold ${bond.textColor} leading-tight relative z-10`}>
                  {bond.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-3">
                  <div className="text-center">
                    <div className={`text-3xl font-bold ${bond.textColor} mb-1`}>{bond.yield}</div>
                    <div className={`text-sm ${bond.textColor} opacity-80`}>Annual Yield</div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className={`${bond.textColor} opacity-80`}>Currency:</span>
                      <span className={`font-medium ${bond.textColor}`}>{bond.currency}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`${bond.textColor} opacity-80`}>Maturity:</span>
                      <span className={`font-medium ${bond.textColor}`}>{bond.maturity}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketData;
