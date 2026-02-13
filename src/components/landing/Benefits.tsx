import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BookOpen, DollarSign, Smartphone, Home, type LucideIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const processImages = [
  "https://i.ibb.co/JjNFGs5L/1620px-Pamonha3.webp",
  "https://i.ibb.co/G4Lnth8w/cutting-pamonha-traditional-brazilian.jpg",
  "https://i.ibb.co/zVYvtP8F/hq720.jpg",
  "https://i.ibb.co/C3wQWMxH/IMG-6473.webp",
];

const benefits: { Icon: LucideIcon; title: string; description: string }[] = [
  {
    Icon: BookOpen,
    title: "App Mestre do Milho",
    description:
      "Acesse todas as receitas e derivados do milho direto no seu celular através do nosso aplicativo prático.",
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
    <section className="px-5 py-16 bg-background flex flex-col items-center" ref={ref}>
      {/* New Carousel Section */}
      <div className="max-w-md w-full mb-16 px-4">
        <h2 className="text-xl font-black text-center text-[#1a5b33] mb-6 leading-tight uppercase">
          UM PROCESSO BEM FÁCIL PARA FAZER MUITO <span className="text-[#e4231b]">DINHEIRO AINDA EM FEVEREIRO</span>
        </h2>

        <Carousel className="w-full relative group">
          <CarouselContent>
            {processImages.map((src, index) => (
              <CarouselItem key={index}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src={src}
                    alt={`Passo ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-center gap-4 mt-6">
            <CarouselPrevious className="static translate-y-0 h-10 w-10 border-2 border-[#1a5b33] text-[#1a5b33] hover:bg-[#1a5b33] hover:text-white transition-colors" />
            <CarouselNext className="static translate-y-0 h-10 w-10 border-2 border-[#1a5b33] text-[#1a5b33] hover:bg-[#1a5b33] hover:text-white transition-colors" />
          </div>
        </Carousel>
      </div>

      {/* Existing Benefits Header */}
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

      <div className="flex flex-col gap-4 max-w-md w-full mx-auto px-4">
        {benefits.map((b, i) => (
          <div
            key={i}
            className={`group bg-card rounded-lg p-5 shadow-md border border-border transition-all duration-300 hover:shadow-glow-green hover:-translate-y-1 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: `${0.1 * (i + 1)}s` }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#1a5b33] flex items-center justify-center flex-shrink-0 shadow-md transition-transform duration-300 group-hover:scale-110">
                <b.Icon className="w-6 h-6 text-white" />
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
