import azamiLogo from "@/assets/azami-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[hsl(0_0%_4%)] text-[hsl(30_15%_70%)] border-t border-[hsl(0_0%_10%)]">
      <div className="container mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src={azamiLogo} alt="AZAMI MODAS" className="h-9 w-auto mb-5 object-contain" />
            <p className="font-body text-xs leading-relaxed">
              Moda feminina autoral com curadoria de tendências. Peças que celebram a sua melhor versão.
            </p>
          </div>

          <div>
            <h4 className="font-body text-[10px] tracking-[0.3em] uppercase text-[hsl(30_15%_92%)] mb-5">Loja</h4>
            <ul className="space-y-3">
              {["Night Collection", "Beach Collection", "Best Sellers", "Promoções"].map((l) => (
                <li key={l}>
                  <a href="#" className="font-body text-xs hover:text-primary transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-[10px] tracking-[0.3em] uppercase text-[hsl(30_15%_92%)] mb-5">Ajuda</h4>
            <ul className="space-y-3">
              {["Trocas e Devoluções", "Frete e Prazos", "Tabela de Medidas", "FAQ"].map((l) => (
                <li key={l}>
                  <a href="#" className="font-body text-xs hover:text-primary transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-body text-[10px] tracking-[0.3em] uppercase text-[hsl(30_15%_92%)] mb-5">Newsletter</h4>
            <p className="font-body text-xs mb-4">Receba novidades e ofertas exclusivas.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 bg-[hsl(0_0%_8%)] border border-[hsl(0_0%_15%)] px-4 py-2.5 font-body text-xs text-[hsl(30_15%_92%)] placeholder:text-[hsl(30_8%_40%)] focus:outline-none focus:border-primary transition-colors"
              />
              <button className="bg-primary text-primary-foreground font-body text-[10px] tracking-[0.15em] uppercase px-5 py-2.5 hover:bg-primary/90 transition-colors">
                OK
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-6 border-t border-[hsl(0_0%_10%)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-[10px] tracking-wider">
            © 2026 AZAMI MODAS. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            {["Termos de Uso", "Política de Privacidade"].map((l) => (
              <a key={l} href="#" className="font-body text-[10px] hover:text-primary tracking-wider transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
