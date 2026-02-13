import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ShieldCheck, Award } from "lucide-react";

const Guarantee = () => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section className="px-5 py-20 bg-background overflow-hidden" ref={ref}>
            <div className="max-w-4xl mx-auto">
                <div className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
                    {/* Guarantee Badge */}
                    <div className="relative flex-shrink-0">
                        <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-secondary/10 flex items-center justify-center relative">
                            <div className="absolute inset-0 border-4 border-dashed border-secondary/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
                            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-secondary flex flex-col items-center justify-center text-secondary-foreground shadow-glow-yellow border-4 border-white text-center p-4">
                                <span className="text-4xl sm:text-5xl font-black leading-none">7</span>
                                <span className="text-sm sm:text-base font-bold uppercase tracking-tighter mt-1">Dias de</span>
                                <span className="text-lg sm:text-xl font-black uppercase tracking-tighter">Garantia</span>
                            </div>
                        </div>
                        {/* Decorative Stars/Sparkles */}
                        <div className="absolute -top-2 -right-2 text-secondary animate-pulse">
                            <Award className="w-10 h-10" />
                        </div>
                    </div>

                    {/* Guarantee Text */}
                    <div className="flex-1 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-black px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
                            <ShieldCheck className="w-4 h-4" /> Risco Zero para você
                        </div>

                        <h3 className="text-3xl sm:text-4xl font-black text-foreground mb-6 leading-tight uppercase tracking-tighter">
                            Satisfação Garantida <br />ou seu <span className="text-primary italic">Dinheiro de Volta!</span>
                        </h3>

                        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8">
                            Eu confio tanto no meu método que vou tirar todo o peso das suas costas.
                            Você tem <span className="font-bold text-foreground">7 dias inteiros</span> para testar as receitas e ver os resultados.
                            Se por qualquer motivo você achar que não é para você, basta nos enviar um e-mail e devolvemos 100% do seu investimento.
                            <span className="block mt-4 font-bold text-foreground">Sem perguntas, sem burocracia e continuamos amigos.</span>
                        </p>

                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                            <div className="flex items-center gap-2 text-sm font-bold opacity-70">
                                <ShieldCheck className="w-5 h-5 text-primary" /> Compra 100% Segura
                            </div>
                            <div className="flex items-center gap-2 text-sm font-bold opacity-70">
                                <ShieldCheck className="w-5 h-5 text-primary" /> Acesso Imediato
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Guarantee;
