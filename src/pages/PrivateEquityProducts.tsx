import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PrivateEquityData from "@/components/PrivateEquityData";
import IPOTable from "@/components/IPOTable";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const PrivateEquityProducts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero showIPOs={true} />
      <Features />
      <PrivateEquityData />
      <IPOTable />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default PrivateEquityProducts;