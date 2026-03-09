import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, Search, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import azamiLogo from "@/assets/azami-logo.png";

const navLinks = [
  { label: "Novidades", href: "#novidades" },
  { label: "Coleções", href: "#colecoes" },
  { label: "Best Sellers", href: "#bestsellers" },
  { label: "Sobre", href: "#sobre" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      {/* Top announcement bar */}
      <div className="bg-primary/10 text-center py-1.5">
        <p className="text-xs font-body tracking-[0.2em] uppercase text-primary">
          Frete grátis para compras acima de R$299
        </p>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
            aria-label="Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Nav links - desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Logo */}
          <a href="/" className="absolute left-1/2 -translate-x-1/2">
            <img
              src={azamiLogo}
              alt="AZAMI MODAS"
              className="h-10 md:h-14 w-auto object-contain"
            />
          </a>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button className="text-foreground/70 hover:text-primary transition-colors" aria-label="Buscar">
              <Search size={18} />
            </button>
            <button className="hidden md:block text-foreground/70 hover:text-primary transition-colors" aria-label="Favoritos">
              <Heart size={18} />
            </button>
            <button className="text-foreground/70 hover:text-primary transition-colors relative" aria-label="Sacola">
              <ShoppingBag size={18} />
              <span className="absolute -top-1 -right-1.5 bg-primary text-primary-foreground text-[9px] font-body font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
