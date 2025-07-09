
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

const MarketData = () => {
  const marketData = [
    { symbol: "ASX 200", price: "7,234.50", change: "+45.30", percent: "+0.63%", trend: "up" },
    { symbol: "All Ords", price: "7,456.20", change: "+52.80", percent: "+0.71%", trend: "up" },
    { symbol: "AUD/USD", price: "0.6745", change: "-0.0023", percent: "-0.34%", trend: "down" },
    { symbol: "Gold (AUD)", price: "$2,947.30", change: "+12.50", percent: "+0.43%", trend: "up" },
  ];

  const topStocks = [
    { symbol: "CBA", name: "Commonwealth Bank", price: "$102.45", change: "+2.1%" },
    { symbol: "BHP", name: "BHP Group", price: "$45.67", change: "+1.5%" },
    { symbol: "CSL", name: "CSL Limited", price: "$289.34", change: "-0.8%" },
    { symbol: "WBC", name: "Westpac", price: "$24.56", change: "+0.9%" },
    { symbol: "ANZ", name: "ANZ Bank", price: "$27.89", change: "+1.2%" },
    { symbol: "NAB", name: "National Australia Bank", price: "$34.12", change: "+0.7%" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Live Market Data
          </h2>
          <p className="text-xl text-gray-600">
            Stay updated with real-time market movements and top performing stocks
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900">
                Market Indices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {marketData.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                    <div>
                      <div className="font-semibold text-gray-900">{item.symbol}</div>
                      <div className="text-2xl font-bold text-gray-900">{item.price}</div>
                    </div>
                    <div className="text-right">
                      <div className={`flex items-center ${item.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                        {item.trend === 'up' ? (
                          <TrendingUp className="w-4 h-4 mr-1" />
                        ) : (
                          <TrendingDown className="w-4 h-4 mr-1" />
                        )}
                        <span className="font-medium">{item.change}</span>
                      </div>
                      <div className={`text-sm ${item.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                        {item.percent}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900">
                Top ASX Stocks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topStocks.map((stock, index) => (
                  <div key={index} className="flex justify-between items-center py-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 aussie-gradient rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{stock.symbol}</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{stock.symbol}</div>
                        <div className="text-sm text-gray-600">{stock.name}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900">{stock.price}</div>
                      <div className={`text-sm ${stock.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {stock.change}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MarketData;
