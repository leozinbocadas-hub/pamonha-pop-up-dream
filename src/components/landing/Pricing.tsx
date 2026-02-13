import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Package, Crown, Check, Rocket, Award, AlertCircle } from "lucide-react";

interface PricingProps {
  onBasicClick: () => void;
  onPremiumClick: () => void;
}

const Pricing = ({ onBasicClick, onPremiumClick }: PricingProps) => {
  const { ref, isVisible } = useScrollAnimation();
  const [timeLeft, setTimeLeft] = useState(114); // 01:54 in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <section id="planos" className="px-5 py-16 bg-background flex flex-col items-center" ref={ref}>
      {/* Central Urgency Timer */}
      <div className={`flex items-center gap-2 bg-[#e4231b] text-white mb-6 font-black text-base sm:text-lg px-8 py-3 rounded-xl shadow-lg ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
        <AlertCircle className="w-5 h-5" />
        <span className="uppercase tracking-tight">Oferta expira em: {formatTime(timeLeft)}</span>
      </div>

      <h3
        className={`text-2xl font-bold text-center text-foreground mb-2 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
      >
        Escolha seu plano
      </h3>
      <p
        className={`text-center text-muted-foreground mb-10 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
      >
        Comece a lucrar hoje mesmo
      </p>

      <div className="flex flex-col gap-6 max-w-sm mx-auto">
        {/* Basic Plan */}
        <div
          className={`bg-card rounded-xl p-6 border border-border shadow-md transition-all duration-300 hover:shadow-lg ${isVisible ? "animate-fade-up" : "opacity-0"}`}
          style={{ animationDelay: "0.1s" }}
        >
          <h4 className="font-bold text-lg text-foreground mb-1 flex items-center gap-2">
            <Package className="w-5 h-5 text-primary" /> Plano Essencial
          </h4>
          <p className="text-muted-foreground text-sm mb-4">
            Ideal para quem quer começar
          </p>
          <ul className="space-y-2 mb-6 text-sm text-foreground text-left">
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" /> Acesso ao App Mestre do Milho
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" /> As 5 Receitas que mais vendem
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" /> Passo a passo simples
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" /> Acesso imediato pelo celular
            </li>
          </ul>
          <div className="mb-4 text-left">
            <span className="text-3xl font-extrabold text-foreground">
              R$ 9,90
            </span>
          </div>
          <button
            onClick={onBasicClick}
            className="w-full py-4 rounded-xl border-2 border-primary text-primary font-black text-base transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-glow-green uppercase"
          >
            Quero o Plano Essencial
          </button>
        </div>

        {/* Premium Plan */}
        <div
          className={`relative bg-primary rounded-xl p-6 shadow-xl transition-all duration-300 hover:shadow-glow-green ${isVisible ? "animate-fade-up" : "opacity-0"}`}
          style={{ animationDelay: "0.25s" }}
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-xs font-black px-6 py-1.5 rounded-full flex items-center gap-1 shadow-md uppercase tracking-tighter">
            <Award className="w-3 h-3" /> O mais completo
          </div>
          <h4 className="font-extrabold text-xl text-primary-foreground mb-1 mt-2 flex items-center gap-2">
            <Crown className="w-5 h-5 text-secondary" /> Plano Pro Lucrativo
          </h4>
          <p className="text-primary-foreground text-sm mb-6 font-medium">
            Tudo que você precisa para lucrar de verdade e faturar de <span className="font-black underline">R$ 200 a R$ 500 por dia</span>
          </p>
          <ul className="space-y-3 mb-8 text-sm text-primary-foreground text-left">
            <li className="flex items-center gap-2">
              <Check className="w-5 h-5 text-secondary" /> Acesso Completo ao App
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-5 h-5 text-secondary" /> Todas as 20+ Receitas de Milho
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-5 h-5 text-secondary" /> Pamonhas, Bolos, Curau e muito mais
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-5 h-5 text-secondary" /> Dicas para vender muito todo dia
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-5 h-5 text-secondary" /> Acesso Vitalício (Sem mensalidade)
            </li>
          </ul>
          <div className="mb-4">
            <span className="text-3xl font-extrabold text-primary-foreground">
              R$ 27,90
            </span>
          </div>
          <button
            onClick={onPremiumClick}
            className="w-full py-3 rounded-full bg-secondary text-secondary-foreground font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-glow-yellow animate-pulse-cta inline-flex items-center justify-center gap-2"
          >
            QUERO O PLANO PREMIUM <Rocket className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
