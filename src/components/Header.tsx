import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, Search, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import azamiLogo from "@/assets/azami-logo.png";

const navLinks = [
  { label: "Night", href: "#night" },
  { label: "Beach", href: "#beach" },
  { label: "Best Sellers", href: "#bestsellers" },
  { label: "Sobre", href: "#sobre" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[hsl(0_0%_4%)/95] backdrop-blur-md border-b border-[hsl(0_0%_15%)]"
          : "bg-transparent"
      }`}
    >
      {/* Announcement bar */}
      <div
        className={`text-center py-2 transition-all duration-500 ${
          scrolled ? "h-0 py-0 overflow-hidden opacity-0" : "bg-primary/10"
        }`}
      >
        <p className="text-[10px] font-body tracking-[0.25em] uppercase text-primary">
          Frete grátis para compras acima de R$299
        </p>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
            aria-label="Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Nav links — desktop */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-[10px] tracking-[0.25em] uppercase text-[hsl(30_15%_70%)] hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Logo — centered */}
          <a href="/" className="absolute left-1/2 -translate-x-1/2">
            <img
              src={azamiLogo}
              alt="AZAMI MODAS"
              className="h-9 md:h-12 w-auto object-contain"
            />
          </a>

          {/* Right icons */}
          <div className="flex items-center gap-5">
            <button className="text-[hsl(30_15%_70%)] hover:text-primary transition-colors" aria-label="Buscar">
              <Search size={17} />
            </button>
            <button className="hidden md:block text-[hsl(30_15%_70%)] hover:text-primary transition-colors" aria-label="Favoritos">
              <Heart size={17} />
            </button>
            <button className="text-[hsl(30_15%_70%)] hover:text-primary transition-colors relative" aria-label="Sacola">
              <ShoppingBag size={17} />
              <span className="absolute -top-1.5 -right-2 bg-primary text-primary-foreground text-[8px] font-body font-semibold w-4 h-4 rounded-full flex items-center justify-center">
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
            className="md:hidden bg-[hsl(0_0%_4%)] border-b border-[hsl(0_0%_12%)] overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-body text-xs tracking-[0.25em] uppercase text-[hsl(30_15%_70%)] hover:text-primary transition-colors"
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
