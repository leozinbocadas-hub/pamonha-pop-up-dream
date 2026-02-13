import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Package, Crown, Check, Rocket, Award } from "lucide-react";

interface PricingProps {
  onBasicClick: () => void;
  onPremiumClick: () => void;
}

const Pricing = ({ onBasicClick, onPremiumClick }: PricingProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="planos" className="px-5 py-16 bg-background" ref={ref}>
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
            <Package className="w-5 h-5 text-primary" /> Plano Básico
          </h4>
          <p className="text-muted-foreground text-sm mb-4">
            Ideal para quem quer começar
          </p>
          <ul className="space-y-2 mb-6 text-sm text-foreground">
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" /> 5 receitas de pamonha
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" /> Guia de precificação
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" /> Acesso imediato
            </li>
          </ul>
          <div className="mb-4">
            <span className="text-3xl font-extrabold text-foreground">
              R$ 10,00
            </span>
          </div>
          <button
            onClick={onBasicClick}
            className="w-full py-3 rounded-full border-2 border-primary text-primary font-bold text-base transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-glow-green"
          >
            QUERO O PLANO BÁSICO
          </button>
        </div>

        {/* Premium Plan */}
        <div
          className={`relative bg-primary rounded-xl p-6 shadow-xl transition-all duration-300 hover:shadow-glow-green ${isVisible ? "animate-fade-up" : "opacity-0"}`}
          style={{ animationDelay: "0.25s" }}
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
            <Award className="w-3 h-3" /> MAIS POPULAR
          </div>
          <h4 className="font-bold text-lg text-primary-foreground mb-1 mt-2 flex items-center gap-2">
            <Crown className="w-5 h-5 text-secondary" /> Plano Premium
          </h4>
          <p className="text-primary-foreground/80 text-sm mb-4">
            Tudo que você precisa para lucrar de verdade
          </p>
          <ul className="space-y-2 mb-6 text-sm text-primary-foreground">
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-secondary" /> 15+ receitas exclusivas
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-secondary" /> Guia completo de vendas
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-secondary" /> Marketing pelo WhatsApp
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-secondary" /> Planilha de controle financeiro
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-secondary" /> Suporte por 30 dias
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
