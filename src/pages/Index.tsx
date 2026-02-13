import { useState } from "react";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Benefits from "@/components/landing/Benefits";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import UpsellModal from "@/components/landing/UpsellModal";
import Footer from "@/components/landing/Footer";

const Index = () => {
  const [showUpsell, setShowUpsell] = useState(false);

  const handleBasicPlan = () => {
    setShowUpsell(true);
  };

  const handlePremiumPlan = () => {
    window.open("#premium", "_self");
  };

  const handleUpsellAccept = () => {
    setShowUpsell(false);
    window.open("#premium-desconto", "_self");
  };

  const handleUpsellDecline = () => {
    setShowUpsell(false);
    window.open("#basico", "_self");
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <Hero />
      <Benefits />
      <Testimonials />
      <Pricing
        onBasicClick={handleBasicPlan}
        onPremiumClick={handlePremiumPlan}
      />
      <Footer />
      <UpsellModal
        open={showUpsell}
        onAccept={handleUpsellAccept}
        onDecline={handleUpsellDecline}
      />
    </div>
  );
};

export default Index;
