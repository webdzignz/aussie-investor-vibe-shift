import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PrivateEquityData = () => {
  const equityData = [
    {
      company: "SpaceX",
      logo: "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=400&h=400&fit=crop", // Rocket/space themed
      logoColor: "bg-gray-900",
      cardColor: "bg-gray-900/90 border-gray-900/20",
      textColor: "text-white",
      name: "SpaceX Series N",
      valuation: "$180B",
      sector: "Aerospace",
      sectorColor: "bg-blue-100 text-blue-700",
      sharePrice: "$112",
      expectedIPO: "2025",
      id: "spacex"
    },
    {
      company: "OpenAI",
      logo: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=400&fit=crop", // AI/tech themed
      logoColor: "bg-green-600",
      cardColor: "bg-green-600/90 border-green-600/20",
      textColor: "text-white",
      name: "OpenAI Series C",
      valuation: "$157B",
      sector: "AI Technology",
      sectorColor: "bg-purple-100 text-purple-700",
      sharePrice: "$350",
      expectedIPO: "2026",
      id: "openai"
    },
    {
      company: "Revolut",
      logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=400&fit=crop", // Fintech themed
      logoColor: "bg-blue-500",
      cardColor: "bg-blue-500/90 border-blue-500/20",
      textColor: "text-white",
      name: "Revolut Series E",
      valuation: "$45B",
      sector: "Fintech",
      sectorColor: "bg-green-100 text-green-700",
      sharePrice: "$865",
      expectedIPO: "2024",
      id: "revolut"
    }
  ];

  return (
    <section id="market-data" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Upcoming IPO Opportunities
          </h2>
          <p className="text-xl text-gray-600">
            Exclusive access to pre-IPO investments in tomorrow's market leaders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equityData.map((equity, index) => (
            <Card 
              key={index} 
              id={`equity-${equity.id}`}
              className={`shadow-lg ${equity.cardColor} hover:shadow-xl transition-all duration-300 border rounded-2xl`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-16 h-16 ${equity.logoColor} rounded-lg border flex items-center justify-center overflow-hidden`}>
                    <img src={equity.logo} alt={equity.company} className="w-full h-full object-cover" />
                  </div>
                  <Badge variant="secondary" className={`${equity.sectorColor} font-medium`}>
                    {equity.sector}
                  </Badge>
                </div>
                <CardTitle className={`text-xl font-semibold ${equity.textColor} leading-tight`}>
                  {equity.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className={`text-3xl font-bold ${equity.textColor} mb-1`}>{equity.valuation}</div>
                    <div className={`text-sm ${equity.textColor} opacity-80`}>Current Valuation</div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className={`${equity.textColor} opacity-80`}>Share Price:</span>
                      <span className={`font-medium ${equity.textColor}`}>{equity.sharePrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={`${equity.textColor} opacity-80`}>Expected IPO:</span>
                      <span className={`font-medium ${equity.textColor}`}>{equity.expectedIPO}</span>
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

export default PrivateEquityData;