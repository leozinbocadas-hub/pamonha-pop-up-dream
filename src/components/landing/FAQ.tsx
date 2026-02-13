import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Como vou receber o acesso ao Método?",
        answer: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com todos os dados de acesso à nossa plataforma exclusiva e todos os bônus prometidos.",
    },
    {
        question: "Preciso de equipamentos caros para começar?",
        answer: "Não! O Método foi desenhado para ser feito com o que você já tem na sua cozinha. Você pode começar hoje mesmo sem investimentos altos em equipamentos.",
    },
    {
        question: "O pagamento é seguro?",
        answer: "Totalmente seguro. Utilizamos as maiores e mais seguras plataformas de pagamento do Brasil, com criptografia de ponta para proteger seus dados.",
    },
    {
        question: "Terei suporte em caso de dúvidas?",
        answer: "Sim! Dependendo do seu plano, você terá acesso ao nosso suporte exclusivo para tirar qualquer dúvida sobre as receitas ou estratégias de venda.",
    },
    {
        question: "E se eu não gostar do conteúdo?",
        answer: "Nós confiamos tanto no nosso Método que oferecemos 7 dias de garantia incondicional. Se você não ficar satisfeita, devolvemos 100% do seu dinheiro sem perguntas.",
    },
];

const FAQ = () => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section className="px-5 py-16 bg-white" ref={ref}>
            <div className="max-w-md mx-auto">
                <div className="text-center mb-10">
                    <h3 className={`text-2xl font-black text-[#1a5b33] mb-2 uppercase tracking-tighter ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
                        Dúvidas Frequentes
                    </h3>
                    <p className={`text-muted-foreground text-sm ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
                        Tire suas dúvidas e comece agora
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((faq, i) => (
                        <AccordionItem
                            key={i}
                            value={`item-${i}`}
                            className={`border-b-0 bg-muted/30 rounded-2xl px-4 transition-all duration-300 hover:bg-muted/50 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
                            style={{ animationDelay: `${0.1 * (i + 1)}s` }}
                        >
                            <AccordionTrigger className="text-left font-bold text-[#1a5b33] hover:no-underline py-4 text-sm sm:text-base">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                <div className={`mt-12 text-center p-6 rounded-3xl bg-[#1a5b33]/5 border-2 border-dashed border-[#1a5b33]/20 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
                    <p className="text-sm text-[#1a5b33] font-bold">Ainda tem alguma dúvida?</p>
                    <p className="text-xs text-muted-foreground mt-1 mb-4">Estamos prontos para te ajudar!</p>
                    <a
                        href="https://wa.me/seu-numero"
                        target="_blank"
                        className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-2 rounded-full font-bold text-sm shadow-md hover:scale-105 transition-transform"
                    >
                        Falar pelo WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
