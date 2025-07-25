import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import MarketData from "@/components/MarketData";
import BondsRates from "@/components/BondsRates";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const FixedTermProducts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header isFixedIncome={true} />
      <Hero isFixedIncome={true} />
      <Features isFixedIncome={true} />
      <MarketData />
      <BondsRates />
      <CallToAction isFixedIncome={true} />
      <Footer isFixedIncome={true} />
    </div>
  );
};

export default FixedTermProducts;