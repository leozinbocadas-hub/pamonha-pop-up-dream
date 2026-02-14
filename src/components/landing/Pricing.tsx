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
          className={`bg-card rounded-xl p-6 border-2 border-[#1a5b33]/20 shadow-md transition-all duration-300 hover:shadow-lg ${isVisible ? "animate-fade-up" : "opacity-0"}`}
          style={{ animationDelay: "0.1s" }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
            <h4 className="font-black text-lg text-foreground uppercase tracking-tight">
              Plano Essencial
            </h4>
          </div>
          <p className="text-[#1a5b33] font-bold text-sm mb-4">
            (Ouro Verde)
          </p>
          <p className="text-muted-foreground text-xs mb-4 leading-relaxed">
            Ideal para quem quer começar com o pé direito e dominar o básico lucrativo.
          </p>
          <ul className="space-y-2 mb-6 text-[13px] text-foreground text-left">
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-[#22c55e] mt-0.5 flex-shrink-0" />
              <span><strong>50 Receitas Clássicas:</strong> Pamonhas, Curais, Bolos e Sucos.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-[#22c55e] mt-0.5 flex-shrink-0" />
              <span><strong>Guia Passo a Passo:</strong> Instruções detalhadas para o sabor perfeito.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-[#22c55e] mt-0.5 flex-shrink-0" />
              <span><strong>Área de Membros Web:</strong> App otimizado para usar na cozinha.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-[#22c55e] mt-0.5 flex-shrink-0" />
              <span><strong>Cálculo Preciso:</strong> Lista de ingredientes para evitar desperdício.</span>
            </li>
          </ul>
          <div className="mb-4 text-left">
            <span className="text-sm text-muted-foreground block line-through">R$ 47,00</span>
            <span className="text-4xl font-black text-foreground">
              R$ 9,90
            </span>
          </div>
          <button
            onClick={onBasicClick}
            className="w-full py-4 rounded-xl border-2 border-[#1a5b33] text-[#1a5b33] font-black text-base transition-all duration-300 hover:bg-[#1a5b33] hover:text-white hover:shadow-glow-green uppercase"
          >
            Quero o Plano Essencial
          </button>
        </div>

        {/* Premium Plan */}
        <div
          className={`relative bg-[#1a5b33] rounded-2xl p-6 shadow-2xl transition-all duration-300 hover:shadow-glow-green border-4 border-[#fac706] ${isVisible ? "animate-fade-up" : "opacity-0"}`}
          style={{ animationDelay: "0.25s" }}
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#fac706] text-[#1a5b33] text-[10px] font-black px-6 py-2 rounded-full flex items-center gap-1 shadow-md uppercase tracking-widest whitespace-nowrap">
            <Award className="w-3 h-3" /> O Método Completo
          </div>

          <div className="flex items-center gap-2 mb-1 mt-4">
            <div className="w-3 h-3 rounded-full bg-[#fac706]" />
            <h4 className="font-black text-xl text-white uppercase tracking-tight">
              Plano Pro Lucrativo
            </h4>
          </div>

          <p className="text-[#fac706] text-sm mb-4 font-black">
            O Ecossistema Completo
          </p>

          <p className="text-white/90 text-xs mb-6 font-medium leading-relaxed">
            Para quem quer construir um negócio de elite e escalar as vendas com o método completo.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-white/10 rounded-lg p-3">
              <p className="text-white font-black text-xs uppercase mb-2 flex items-center gap-2">
                <Check className="w-4 h-4 text-[#fac706]" /> Tudo do Essencial MAIS:
              </p>
              <ul className="space-y-2 text-[12px] text-white/90">
                <li className="flex items-start gap-2">
                  <span className="text-[#fac706] font-bold">+200 Receitas Exclusivas:</span> Gourmet, Regionais e Internacionais.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#fac706] font-bold">16 Bônus Estratégicos:</span> Calculadoras, Scripts e Truques de Venda.
                </li>
              </ul>
            </div>

            <ul className="space-y-2 text-[13px] text-white">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#fac706] mt-0.5 flex-shrink-0" />
                <span>Salgados, Bebidas e Sobremesas de Luxo</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#fac706] mt-0.5 flex-shrink-0" />
                <span>Templates de WhatsApp e Marketing Local</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#fac706] mt-0.5 flex-shrink-0" />
                <span>Acesso Vitalício + Suporte Platinum</span>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <span className="text-sm text-white/60 block line-through">R$ 197,00</span>
            <span className="text-5xl font-black text-white">
              R$ 27,90
            </span>
          </div>

          <button
            onClick={onPremiumClick}
            className="w-full py-5 rounded-xl bg-[#fac706] text-[#1a5b33] font-black text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-glow-yellow animate-pulse-cta flex flex-col items-center justify-center gap-0 leading-tight"
          >
            <span className="uppercase ring-offset-2">QUERO O MÉTODO COMPLETO</span>
            <span className="text-[10px] opacity-80 font-bold uppercase tracking-widest">(Acesso Imediato)</span>
          </button>
        </div>
      </div>

      {/* Checkout Summary Bullet Points */}
      <div className={`mt-16 w-full max-w-sm mx-auto bg-white/50 border border-border/50 rounded-2xl p-6 backdrop-blur-sm ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
        <h5 className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] mb-4 text-center">Resumo do que você recebe:</h5>
        <ul className="space-y-3">
          {[
            "Biblioteca com 250+ Receitas (Do Tradicional ao Gourmet)",
            "Calculadora de Lucro Automática (Saiba quanto lucra em cada venda)",
            "Scripts de Vendas para WhatsApp (Copie e cole para vender)",
            "Guia de Tráfego para Negócio Local (Apareça para quem mora perto)",
            "Acesso Vitalício ao Aplicativo",
            "Suporte e Atualizações de Conteúdo"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-[13px] font-medium text-foreground/80">
              <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-green-600" />
              </div>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Pricing;
