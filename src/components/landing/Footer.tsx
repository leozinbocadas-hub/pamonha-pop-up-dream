const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground px-5 py-8 text-center">
      <p className="text-2xl mb-2">🌽</p>
      <p className="font-bold text-lg">Pamonhas Lucrativas</p>
      <p className="text-primary-foreground/70 text-xs mt-2">
        © {new Date().getFullYear()} Pamonhas Lucrativas. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
