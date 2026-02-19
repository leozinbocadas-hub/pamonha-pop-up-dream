import { useState } from "react";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Benefits from "@/components/landing/Benefits";
import Testimonials from "@/components/landing/Testimonials";
import Bonuses from "@/components/landing/Bonuses";
import Pricing from "@/components/landing/Pricing";
import Guarantee from "@/components/landing/Guarantee";
import UpsellModal from "@/components/landing/UpsellModal";
import Footer from "@/components/landing/Footer";
import FAQ from "@/components/landing/FAQ";
import FakeNotifications from "@/components/landing/FakeNotifications";

const Index = () => {
  const [showUpsell, setShowUpsell] = useState(false);

  const handleBasicPlan = () => {
    setShowUpsell(true);
  };

  const handlePremiumPlan = () => {
    window.open("https://pay.kirvano.com/31584ae3-a247-4375-885e-afd174a38018", "_self");
  };

  const handleUpsellAccept = () => {
    setShowUpsell(false);
    window.open("https://pay.kirvano.com/31ee8152-fc7b-47a2-a366-811a158efe74", "_self");
  };

  const handleUpsellDecline = () => {
    setShowUpsell(false);
    window.open("https://pay.kirvano.com/5161f934-dd00-4e0d-af1f-0602532ddd3e", "_self");
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden pt-12 sm:pt-10">
      <Header />
      <Hero />
      <Benefits />
      <Testimonials />
      <Bonuses />
      <Pricing
        onBasicClick={handleBasicPlan}
        onPremiumClick={handlePremiumPlan}
      />
      <Guarantee />
      <FAQ />
      <Footer />
      <UpsellModal
        open={showUpsell}
        onAccept={handleUpsellAccept}
        onDecline={handleUpsellDecline}
      />
      <FakeNotifications />
    </div>
  );
};

export default Index;
