
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import MarketData from "@/components/MarketData";
import BondsRates from "@/components/BondsRates";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <MarketData />
      <BondsRates />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
