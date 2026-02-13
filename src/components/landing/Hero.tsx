import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Wheat, Rocket } from "lucide-react";
import heroImage from "@/assets/hero-pamonha.jpg";

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative bg-hero text-primary-foreground overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Pamonhas deliciosas"
          className="w-full h-full object-cover opacity-20"
          loading="eager"
        />
      </div>

      <div
        ref={ref}
        className="relative z-10 px-5 py-16 flex flex-col items-center text-center"
      >
        <Wheat
          className={`w-16 h-16 text-secondary mb-4 ${isVisible ? "animate-float" : "opacity-0"}`}
        />

        <h2
          className={`text-3xl font-extrabold leading-tight mb-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
        >
          Transforme Pamonhas em{" "}
          <span className="text-secondary">Lucro Real!</span>
        </h2>

        <p
          className={`text-lg font-normal opacity-90 mb-8 max-w-sm ${isVisible ? "animate-fade-up" : "opacity-0"}`}
          style={{ animationDelay: "0.2s" }}
        >
          Descubra o método comprovado para faturar vendendo pamonhas artesanais
          — mesmo começando do zero.
        </p>

        <a
          href="#planos"
          className={`inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-bold text-lg px-8 py-4 rounded-full shadow-glow-yellow transition-all duration-300 hover:scale-105 hover:shadow-xl animate-pulse-cta ${isVisible ? "animate-fade-up" : "opacity-0"}`}
          style={{ animationDelay: "0.4s" }}
        >
          QUERO COMEÇAR AGORA <Rocket className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
