
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const MarketData = () => {
  const bondsData = [
    {
      bank: "Deutsche Bank",
      logo: "DB",
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
      logo: "BC",
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
      logo: "ST",
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
      logo: "UBS",
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
      logo: "JPM",
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

  return (
    <section id="market-data" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Current Bond Offerings
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
              className="shadow-lg border-gold/10 hover:shadow-xl transition-all duration-300"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-12 h-12 ${bond.logoColor} rounded-lg flex items-center justify-center`}>
                    <span className="text-xs font-bold text-white">{bond.logo}</span>
                  </div>
                  <Badge variant="secondary" className={`${bond.ratingColor} font-medium`}>
                    {bond.rating}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900 leading-tight">
                  {bond.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-1">{bond.yield}</div>
                    <div className="text-sm text-gray-500">Annual Yield</div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Currency:</span>
                      <span className="font-medium text-gray-900">{bond.currency}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Maturity:</span>
                      <span className="font-medium text-gray-900">{bond.maturity}</span>
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
