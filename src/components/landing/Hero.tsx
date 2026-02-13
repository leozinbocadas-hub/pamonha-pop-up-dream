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

      {/* Mockup Container */}
      <div className="relative w-full max-w-[320px] mb-12 group">
        <div className="relative bg-[#1a1a1a] rounded-[2.5rem] p-3 shadow-2xl border-[6px] border-[#333]">
          <div className="bg-[#0f1110] rounded-[2rem] overflow-hidden aspect-[9/18] relative">
            <img
              src="/placeholder.svg"
              alt="Mockup"
              className="w-full h-full object-cover"
            />

            {/* Overlay Info on Mockup */}
            <div className="absolute bottom-6 left-6 text-left text-white z-20">
              <p className="text-xl font-black mb-1">Lucro Real</p>
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#fac706]">
                <CheckCircle2 className="w-4 h-4" />
                <span>100% Prático</span>
              </div>
            </div>

            {/* Mockup Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none"></div>
          </div>
        </div>

        {/* Glow behind phone */}
        <div className="absolute -inset-4 bg-green-200/50 blur-3xl -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
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
