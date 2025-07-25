
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, PieChart, TrendingUp, Shield, Smartphone, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";

const Features = ({ isFixedIncome = false }: { isFixedIncome?: boolean }) => {
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);

  const features = [
    {
      icon: BarChart3,
      title: "Yield Analytics",
      description: "Comprehensive yield analysis and duration metrics to optimize your fixed income portfolio performance."
    },
    {
      icon: PieChart,
      title: "Bond Diversification",
      description: "Build balanced portfolios across government bonds, corporate debt, and international fixed income securities."
    },
    {
      icon: TrendingUp,
      title: "Real-time Bond Pricing",
      description: "Access live bond prices, yield curves, and professional-grade fixed income trading tools."
    },
    {
      icon: Shield,
      title: "Credit Risk Management",
      description: "Your investments are protected with institutional-grade credit analysis and full regulatory compliance."
    },
    {
      icon: Smartphone,
      title: "Mobile Bond Trading",
      description: "Trade bonds on the go with our secure mobile platform, featuring real-time yield calculations."
    },
    {
      icon: BookOpen,
      title: "Fixed Income Education",
      description: "Learn from bond market experts with guides, webinars, and comprehensive fixed income analysis."
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
            Everything You Need for Fixed Income Success
          </h2>
        </div>

        <div className="max-w-4xl mx-auto text-left mb-16">
          <p className="text-lg text-gray-700 leading-relaxed">
            The Rate Move is a trusted financial intermediary specializing in fixed income securities with an extensive network of established bond dealers and institutional partners. Over the past few years, we have built a reputation for connecting investors with high-quality fixed income opportunities—from government bonds to corporate debt and structured products. Through strategic relationships with major financial institutions and deep market expertise, The Rate Move provides clients access to competitive yields and secure investment options. Our track record in fixed income markets speaks for itself: clients benefit from carefully curated bond portfolios that deliver consistent returns and capital preservation, establishing us as a premier partner for income-focused investors.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {currentFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={`${currentGroupIndex}-${index}`}
                className={`${isFixedIncome ? 'bg-white border border-gray-200' : 'bg-green-800 border border-green-700'} shadow-lg hover:shadow-xl transition-all duration-1000 rounded-2xl animate-fade-in`}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${isFixedIncome ? 'bg-navy-900' : 'gold-gradient'} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className={`text-xl font-semibold ${isFixedIncome ? 'text-gray-900' : 'text-white'}`}>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className={`${isFixedIncome ? 'text-gray-700' : 'text-white/90'} leading-relaxed`}>
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
