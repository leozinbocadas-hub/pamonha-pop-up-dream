import { ChevronDown, CheckCircle2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-[#f2fcf2] pt-8 pb-16 px-4 flex flex-col items-center text-center overflow-hidden">
      {/* Badge */}
      <div className="bg-[#fac706] text-[#006400] text-xs sm:text-sm font-black px-6 py-2 rounded-full flex items-center gap-2 shadow-md mb-8 animate-fade-in uppercase tracking-wide">
        <span className="text-lg">🔥</span> Mais de 100 empreendoras satisfeitas
      </div>

      {/* Main Headline */}
      <h1 className="text-[32px] sm:text-[48px] lg:text-[56px] font-black leading-[0.95] text-[#1a5b33] flex flex-col gap-1 mb-6 max-w-2xl uppercase tracking-tighter">
        <span>FAÇA DE R$ 200 A</span>
        <span>R$ 500 POR DIA</span>
        <span>VENDENDO</span>
        <div className="relative inline-block self-center px-4 py-1 mt-1">
          <span className="relative z-10">PAMONHA</span>
          <div className="absolute inset-0 bg-[#fac706] -rotate-1"></div>
        </div>
      </h1>

      {/* Subheadline */}
      <p className="text-base sm:text-lg text-[#4a6358] max-w-sm mb-10 leading-relaxed font-medium">
        Descubra o segredo das pamonhas mais lucrativas da sua cidade e comece seu negócio hoje mesmo, na sua cozinha!
      </p>

      {/* Vertical VSL Player */}
      <div className="relative w-full max-w-[320px] mb-12 mx-auto overflow-hidden rounded-2xl shadow-2xl bg-black">
        <div className="aspect-[9/16] w-full">
          <div
            id="vid-698eabf9aa67549cb8e2e05c"
            className="w-full h-full"
            style={{ display: 'block', margin: '0 auto' }}
          >
            {/* Vtub player */}
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <a
        href="#planos"
        className="bg-[#008a00] hover:bg-[#00a300] text-white font-black text-lg py-5 px-8 rounded-xl shadow-[0_8px_0_0_#005a00] active:shadow-none active:translate-y-2 transition-all flex items-center gap-3 w-full max-w-[340px] justify-center mb-4 uppercase tracking-tight"
      >
        Quero aprender agora <ChevronDown className="w-6 h-6" />
      </a>

      {/* Trust Badge */}
      <div className="flex items-center gap-1.5 text-[13px] text-[#4a6358] font-medium opacity-80">
        <span>🔒</span> Compra 100% Segura e Garantida
      </div>
    </section>
  );
};

export default Hero;
