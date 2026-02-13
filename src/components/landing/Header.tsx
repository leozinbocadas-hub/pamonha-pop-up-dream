import { Wheat } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur-sm px-4 py-3 shadow-lg">
      <div className="flex items-center justify-center gap-2">
        <Wheat className="w-6 h-6 text-secondary" />
        <h1 className="text-xl font-bold text-primary-foreground tracking-tight">
          Pamonhas Lucrativas
        </h1>
      </div>
    </header>
  );
};

export default Header;
