import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Gift, Calculator, Camera, AlertOctagon, Users } from "lucide-react";

const bonuses = [
    {
        Icon: Calculator,
        title: "Planilha de Lucro Real",
        description: "Saiba exatamente quanto você ganha em cada pamonha vendida e nunca mais perca dinheiro.",
        value: "R$ 47,00",
    },
    {
        Icon: Camera,
        title: "Pack de Fotos Premium",
        description: "Fotos profissionais e chamativas para você usar no seu Instagram e atrair dezenas de clientes.",
        value: "R$ 67,00",
    },
    {
        Icon: AlertOctagon,
        title: "Os 5 Erros Fatais",
        description: "Um guia prático sobre o que NÃO fazer para não jogar dinheiro fora no início do seu negócio.",
        value: "R$ 37,00",
    },
    {
        Icon: Users,
        title: "Comunidade VIP",
        description: "Acesso ao grupo exclusivo de empreendedoras para trocar receitas e estratégias de venda.",
        value: "R$ 147,00",
    },
];

const Bonuses = () => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section className="px-5 py-16 bg-[#f8fff8]" ref={ref}>
            <div className="max-w-md mx-auto">
                <div className="text-center mb-12">
                    <div className={`inline-flex items-center gap-2 bg-[#fac706] text-[#006400] text-xs font-black px-4 py-1 rounded-full mb-4 uppercase tracking-wider shadow-sm ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
                        <Gift className="w-4 h-4" /> Bônus Exclusivos
                    </div>
                    <h3 className={`text-3xl font-black text-[#1a5b33] mb-3 leading-tight ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
                        VOCÊ VAI LEVAR TUDO ISSO <span className="text-[#e4231b]">DE GRAÇA!</span>
                    </h3>
                    <p className={`text-muted-foreground text-sm ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
                        Ao garantir seu acesso hoje, você desbloqueia esses 4 bônus especiais:
                    </p>
                </div>

                <div className="grid gap-6">
                    {bonuses.map((b, i) => (
                        <div
                            key={i}
                            className={`bg-white rounded-2xl p-5 border-2 border-dashed border-green-200 shadow-sm relative overflow-hidden group hover:border-primary transition-all duration-300 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
                            style={{ animationDelay: `${0.1 * (i + 1)}s` }}
                        >
                            {/* Value Badge */}
                            <div className="absolute -right-12 top-4 rotate-45 bg-gray-100 text-gray-400 text-[10px] py-1 px-12 font-bold line-through">
                                {b.value}
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <b.Icon className="w-6 h-6 text-primary group-hover:text-white" />
                                </div>
                                <div>
                                    <h4 className="font-extrabold text-[#1a5b33] text-lg leading-tight mb-1">
                                        {b.title}
                                    </h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {b.description}
                                    </p>
                                    <div className="mt-2 inline-block bg-green-100 text-green-700 text-[10px] font-black px-2 py-0.5 rounded uppercase">
                                        Grátis Hoje
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Total Value Summary */}
                <div className={`mt-10 p-8 bg-white rounded-3xl border-4 border-[#fac706] text-center shadow-xl relative overflow-hidden ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.5s" }}>
                    {/* Decorative background element */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#fac706]/10 rounded-bl-full -mr-12 -mt-12"></div>

                    <p className="text-gray-600 text-sm font-black uppercase tracking-[0.2em] mb-3">Valor Total dos Bônus:</p>
                    <p className="text-3xl font-black text-gray-500/80 line-through mb-2">R$ 298,00</p>

                    <div className="bg-[#e4231b] text-white py-4 px-8 rounded-2xl inline-block mt-3 shadow-lg transform -rotate-1">
                        <p className="text-2xl sm:text-3xl font-black uppercase tracking-tighter">
                            POR APENAS <span className="text-3xl sm:text-4xl">R$ 0,00</span>
                        </p>
                    </div>

                    <p className="text-xs text-green-600 font-extrabold mt-5 uppercase tracking-widest">
                        * Oferta válida apenas para hoje!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Bonuses;
