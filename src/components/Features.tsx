
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, PieChart, TrendingUp, Shield, Smartphone, BookOpen } from "lucide-react";

const Features = () => {
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

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Invest Successfully
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform combines cutting-edge technology with decades of market expertise 
            to help Australian investors achieve their financial goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 border-gold/20">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 gold-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
