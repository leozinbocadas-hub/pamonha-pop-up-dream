import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BookOpen, DollarSign, Smartphone, Home, type LucideIcon } from "lucide-react";

const benefits: { Icon: LucideIcon; title: string; description: string }[] = [
  {
    Icon: BookOpen,
    title: "Receitas Exclusivas",
    description:
      "Receitas testadas e aprovadas que encantam clientes e garantem pedidos recorrentes.",
  },
  {
    Icon: DollarSign,
    title: "Margem de Lucro Alta",
    description:
      "Aprenda a precificar corretamente e tenha margens de até 300% por pamonha.",
  },
  {
    Icon: Smartphone,
    title: "Estratégias de Venda",
    description:
      "Técnicas de marketing digital para vender pelo WhatsApp e redes sociais.",
  },
  {
    Icon: Home,
    title: "Comece de Casa",
    description:
      "Sem necessidade de investimento alto. Comece na sua própria cozinha hoje mesmo.",
  },
];

const Benefits = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="px-5 py-16 bg-background" ref={ref}>
      <h3
        className={`text-2xl font-bold text-center text-foreground mb-2 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
      >
        Por que o <span className="text-primary">Pamonhas Lucrativas</span>?
      </h3>
      <p
        className={`text-center text-muted-foreground mb-10 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
      >
        Tudo que você precisa para lucrar
      </p>

      <div className="flex flex-col gap-4 max-w-md mx-auto">
        {benefits.map((b, i) => (
          <div
            key={i}
            className={`bg-card rounded-lg p-5 shadow-md border border-border transition-all duration-300 hover:shadow-glow-green hover:-translate-y-1 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: `${0.1 * (i + 1)}s` }}
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <b.Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-lg mb-1">
                  {b.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {b.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
