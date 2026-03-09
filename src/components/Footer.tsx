import azamiLogo from "@/assets/azami-logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src={azamiLogo} alt="AZAMI MODAS" className="h-10 w-auto mb-5 object-contain" />
            <p className="font-body text-xs text-muted-foreground leading-relaxed">
              Moda feminina autoral com curadoria de tendências. Peças que celebram a sua melhor versão.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-body text-[10px] tracking-[0.3em] uppercase text-foreground mb-5">
              Loja
            </h4>
            <ul className="space-y-3">
              {["Novidades", "Coleções", "Best Sellers", "Promoções"].map((l) => (
                <li key={l}>
                  <a href="#" className="font-body text-xs text-muted-foreground hover:text-primary transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-[10px] tracking-[0.3em] uppercase text-foreground mb-5">
              Ajuda
            </h4>
            <ul className="space-y-3">
              {["Trocas e Devoluções", "Frete e Prazos", "Tabela de Medidas", "FAQ"].map((l) => (
                <li key={l}>
                  <a href="#" className="font-body text-xs text-muted-foreground hover:text-primary transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-body text-[10px] tracking-[0.3em] uppercase text-foreground mb-5">
              Newsletter
            </h4>
            <p className="font-body text-xs text-muted-foreground mb-4">
              Receba novidades e ofertas exclusivas.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 bg-background border border-border px-4 py-2.5 font-body text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <button className="bg-primary text-primary-foreground font-body text-[10px] tracking-[0.15em] uppercase px-5 py-2.5 hover:bg-primary/90 transition-colors">
                OK
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-[10px] text-muted-foreground tracking-wider">
            © 2026 AZAMI MODAS. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            {["Termos de Uso", "Política de Privacidade"].map((l) => (
              <a
                key={l}
                href="#"
                className="font-body text-[10px] text-muted-foreground hover:text-primary tracking-wider transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
