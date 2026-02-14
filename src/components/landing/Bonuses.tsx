import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Gift, Calculator, Camera, AlertOctagon, Users } from "lucide-react";

const bonuses = [
    {
        Icon: Calculator,
        title: "Calculadora de Lucro Automática",
        description: "Ferramenta para colocar o preço certo e garantir margens de lucro de até 300% em cada venda.",
        value: "R$ 97,00",
    },
    {
        Icon: Camera,
        title: "Templates de WhatsApp Venda",
        description: "Scripts prontos para 'Avisar que tem Pamonha', fechar encomendas e recuperar clientes antigos.",
        value: "R$ 67,00",
    },
    {
        Icon: Users,
        title: "Guia de Marketing Local",
        description: "Aprenda a usar Instagram e Google Maps para atrair todos os vizinhos do seu bairro.",
        value: "R$ 147,00",
    },
    {
        Icon: AlertOctagon,
        title: "Checklist de Equipamentos",
        description: "O que comprar para produzir mais rápido, com menos esforço e economizando dinheiro.",
        value: "R$ 47,00",
    },
    {
        Icon: Gift,
        title: "Guia de Acompanhamentos",
        description: "Como vender itens extras e aumentar o seu ticket médio em todas as encomendas.",
        value: "R$ 37,00",
    },
];

const Bonuses = () => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section id="bonus" className="px-5 py-20 bg-[#f8fff8]" ref={ref}>
            <div className="max-w-md mx-auto">
                <div className="text-center mb-12">
                    <div className={`inline-flex items-center gap-2 bg-[#fac706] text-[#1a5b33] text-[10px] font-black px-4 py-1.5 rounded-full mb-4 uppercase tracking-[0.2em] shadow-sm ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
                        <Gift className="w-4 h-4" /> 16 Bônus Estratégicos incluídos
                    </div>
                    <h3 className={`text-4xl font-black text-[#1a5b33] mb-3 leading-tight ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
                        VOCÊ VAI LEVAR TUDO ISSO <span className="text-[#e4231b]">DE GRAÇA!</span>
                    </h3>
                    <p className={`text-muted-foreground text-sm font-medium ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
                        Ao garantir o Plano Pro hoje, você desbloqueia o ecossistema completo:
                    </p>
                </div>

                <div className="grid gap-4">
                    {bonuses.map((b, i) => (
                        <div
                            key={i}
                            className={`bg-white rounded-2xl p-5 border border-green-100 shadow-sm relative overflow-hidden group hover:border-[#fac706] transition-all duration-300 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
                            style={{ animationDelay: `${0.1 * (i + 1)}s` }}
                        >
                            {/* Value Badge */}
                            <div className="absolute -right-12 top-4 rotate-45 bg-gray-50 text-gray-300 text-[9px] py-1 px-12 font-bold line-through">
                                {b.value}
                            </div>

                            <div className="flex gap-4 items-center">
                                <div className="w-12 h-12 rounded-xl bg-[#1a5b33]/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1a5b33] group-hover:text-white transition-colors">
                                    <b.Icon className="w-6 h-6 text-[#1a5b33] group-hover:text-white" />
                                </div>
                                <div>
                                    <h4 className="font-black text-[#1a5b33] text-base leading-tight">
                                        {b.title}
                                    </h4>
                                    <p className="text-muted-foreground text-[12px] leading-relaxed mt-1">
                                        {b.description}
                                    </p>
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
