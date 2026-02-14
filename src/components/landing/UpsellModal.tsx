import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { PartyPopper, Check, Rocket } from "lucide-react";

interface UpsellModalProps {
  open: boolean;
  onAccept: () => void;
  onDecline: () => void;
}

const UpsellModal = ({ open, onAccept, onDecline }: UpsellModalProps) => {
  return (
    <Dialog open={open} onOpenChange={(v) => !v && onDecline()}>
      <DialogContent className="max-w-[90vw] rounded-xl p-6 sm:max-w-md">
        <DialogHeader className="text-center">
          <div className="mb-2 mx-auto">
            <PartyPopper className="w-10 h-10 text-secondary mx-auto" />
          </div>
          <DialogTitle className="text-xl font-extrabold text-foreground">
            Espere! Oferta Especial!
          </DialogTitle>
          <DialogDescription className="text-muted-foreground mt-2 text-sm">
            Só por hoje, leve o{" "}
            <span className="font-bold text-primary">Plano Pro Lucrativo</span> por
            um preço imperdível!
          </DialogDescription>
        </DialogHeader>

        <div className="text-center my-4">
          <p className="text-muted-foreground text-sm line-through">
            De R$ 27,90
          </p>
          <p className="text-4xl font-extrabold text-primary">R$ 17,90</p>
          <p className="text-xs text-muted-foreground mt-1">
            Economize R$ 10,00 agora!
          </p>
        </div>

        <ul className="space-y-2 text-sm text-foreground mb-6">
          <li className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#22c55e]" /> 250+ receitas exclusivas
          </li>
          <li className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#22c55e]" /> Calculadora de Lucro Automática
          </li>
          <li className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#22c55e]" /> Scripts de Vendas para WhatsApp
          </li>
          <li className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#22c55e]" /> Marketing Local (Atraia Vizinhos)
          </li>
          <li className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#22c55e]" /> Acesso Vitalício + Suporte
          </li>
        </ul>

        <div className="flex flex-col gap-3">
          <button
            onClick={onAccept}
            className="w-full py-3 rounded-full bg-primary text-primary-foreground font-bold text-base transition-all duration-300 hover:scale-105 shadow-glow-green animate-pulse-cta inline-flex items-center justify-center gap-2"
          >
            QUERO O PLANO PRO LUCRATIVO <Rocket className="w-5 h-5" />
          </button>
          <button
            onClick={onDecline}
            className="text-muted-foreground text-xs underline transition-colors duration-300 hover:text-foreground"
          >
            Não, obrigado. Continuar no Plano Essencial
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpsellModal;
