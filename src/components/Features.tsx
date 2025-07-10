
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, PieChart, TrendingUp, Shield, Smartphone, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";

const Features = () => {
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);

  const features = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Get detailed insights into your portfolio performance with our comprehensive analytics dashboard."
    },
    {
      icon: PieChart,
      title: "Diversified Portfolios",
      description: "Build balanced portfolios across ASX stocks, ETFs, and international markets with expert guidance."
    },
    {
      icon: TrendingUp,
      title: "Real-time Market Data",
      description: "Access live market data, price alerts, and professional-grade trading tools at your fingertips."
    },
    {
      icon: Shield,
      title: "Secure & Regulated",
      description: "Your investments are protected with bank-level security and full ASIC regulation compliance."
    },
    {
      icon: Smartphone,
      title: "Mobile Trading",
      description: "Trade on the go with our award-winning mobile app, featuring biometric security and instant notifications."
    },
    {
      icon: BookOpen,
      title: "Educational Resources",
      description: "Learn from market experts with our comprehensive library of guides, webinars, and market analysis."
    }
  ];

  // Group features into sets of 3
  const featureGroups = [
    features.slice(0, 3),
    features.slice(3, 6)
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGroupIndex((prev) => (prev + 1) % featureGroups.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [featureGroups.length]);

  const currentFeatures = featureGroups[currentGroupIndex];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Invest Successfully
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Our platform combines cutting-edge technology with decades of market expertise 
            to help Australian investors achieve their financial goals.
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
            Australian Investor - top financial intermediary introducing investors to the ideal financial partner.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {currentFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={`${currentGroupIndex}-${index}`}
                className="bg-green-800 border border-green-700 shadow-lg hover:shadow-xl transition-all duration-1000 rounded-2xl animate-fade-in"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 gold-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-white/90 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
