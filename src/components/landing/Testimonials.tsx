import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Fatima Souza",
    location: "São Paulo, SP",
    text: "Comecei vendendo para vizinhos e hoje faturo mais de R$ 3.000/mês só com pamonhas! O Método mudou minha vida.",
    stars: 5,
    image: "https://i.ibb.co/bRH7NWPn/image.png",
  },
  {
    name: "Juliana Vilaça",
    location: "Belo Horizonte, MG",
    text: "As receitas são incríveis! Meus clientes pedem toda semana. Melhor investimento que já fiz.",
    stars: 5,
    image: "https://i.ibb.co/bM9yQC8h/image.png",
  },
  {
    name: "Isabel Oliveira",
    location: "Goiânia, GO",
    text: "Em 2 semanas já tinha recuperado o investimento. As dicas de venda pelo WhatsApp são sensacionais!",
    stars: 5,
    image: "https://i.ibb.co/YB38211b/image.png",
  },
];

const studentImages = [
  "https://i.ibb.co/qYYM6WXk/image.png",
  "https://i.ibb.co/j9ry03FX/image.png",
  "https://i.ibb.co/VW3n13mF/image.png",
  "https://i.ibb.co/Tqkht3Hd/image.png",
  "https://i.ibb.co/RkJyKHMv/image.png",
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="px-5 py-16 bg-muted" ref={ref}>
      <h3
        className={`text-2xl font-bold text-center text-foreground mb-2 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
      >
        O que nossos clientes dizem
      </h3>
      <p
        className={`text-center text-muted-foreground mb-10 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
      >
        Resultados reais de pessoas reais
      </p>

      <div className="flex flex-col gap-4 max-w-md mx-auto">
        {testimonials.map((t: any, i) => (
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
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg overflow-hidden shadow-sm border-2 border-white">
                {t.image ? (
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                ) : (
                  t.name[0]
                )}
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* New Carousel after testimonials with Border Frames */}
      <div className={`max-w-md w-full mt-16 px-4 mx-auto ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.5s" }}>
        <h4 className="text-lg font-black text-center text-[#1a5b33] mb-8 leading-tight uppercase">
          Veja a produção das nossas <span className="text-[#e4231b]">Clientes de Sucesso</span>
        </h4>

        <Carousel className="w-full relative group">
          <CarouselContent>
            {studentImages.map((src, index) => (
              <CarouselItem key={index}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src={src}
                    alt={`Produção ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="static translate-y-0 h-10 w-10 border-2 border-[#1a5b33] text-[#1a5b33] hover:bg-[#1a5b33] hover:text-white transition-colors" />
            <CarouselNext className="static translate-y-0 h-10 w-10 border-2 border-[#1a5b33] text-[#1a5b33] hover:bg-[#1a5b33] hover:text-white transition-colors" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
