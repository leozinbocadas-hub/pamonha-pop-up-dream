import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria S.",
    location: "São Paulo, SP",
    text: "Comecei vendendo para vizinhos e hoje faturo mais de R$ 3.000/mês só com pamonhas! O curso mudou minha vida.",
    stars: 5,
  },
  {
    name: "João P.",
    location: "Belo Horizonte, MG",
    text: "As receitas são incríveis! Meus clientes pedem toda semana. Melhor investimento que já fiz.",
    stars: 5,
  },
  {
    name: "Ana C.",
    location: "Goiânia, GO",
    text: "Em 2 semanas já tinha recuperado o investimento. As dicas de venda pelo WhatsApp são sensacionais!",
    stars: 5,
  },
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="px-5 py-16 bg-muted" ref={ref}>
      <h3
        className={`text-2xl font-bold text-center text-foreground mb-2 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
      >
        O que nossos alunos dizem
      </h3>
      <p
        className={`text-center text-muted-foreground mb-10 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
      >
        Resultados reais de pessoas reais
      </p>

      <div className="flex flex-col gap-4 max-w-md mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`bg-card rounded-lg p-5 shadow-md border border-border transition-all duration-300 hover:shadow-lg ${isVisible ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: `${0.15 * (i + 1)}s` }}
          >
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: t.stars }).map((_, si) => (
                <Star key={si} className="w-4 h-4 text-secondary fill-secondary" />
              ))}
            </div>
            <p className="text-foreground text-sm leading-relaxed mb-3 italic">
              "{t.text}"
            </p>
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                {t.name[0]}
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
